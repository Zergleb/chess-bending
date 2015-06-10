(ns elemental-chess.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [clojure.string :as string]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [clojure.string :as string]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

(enable-console-print!)

(defonce app-state
  (r/atom
   {:gameboard [
    ["wrn" "wkn" "wbn" "wKn" "wqn" "wbn" "wkn" "wrn"]
    ["wpn" "wpn" "wpn" "wpn" "wpn" "wpn" "wpn" "wpn"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["bpn" "bpn" "bpn" "bpn" "bpn" "bpn" "bpn" "bpn"]
    ["brn" "bkn" "bbn" "bKn" "bqn" "bbn" "bkn" "brn"]
    ]
   }
  )
)

(def ^:const game-consts {:pieces
  {
    "p" {:class "pawn"}
    "k" {:class "knight"}
    "b" {:class "bishop"}
    "q" {:class "queen"}
    "r" {:class "rook"}
    "K" {:class "king"}
  }
  :players {
    "w" {:class "white"}
    "b" {:class "black"}
  }
  :elements {
    "f" {:class "fire" :next "w"}
    "w" {:class "water" :next "e"}
    "e" {:class "earth" :next "n"}
    "n" {:class "normal", :next "f"}
  }
})

(defn drag-start [row column]
  (fn [ev] (do 
    (.setData (.-dataTransfer ev) "row" row)
    (.setData (.-dataTransfer ev) "column" column)
  ))
);; for Firefox. You MUST set something as data.

(defn changeCellOnBoard [board row column newValue]
  (println newValue)
  (let [gameRow (get board row)]
    (let [newGameRow (assoc gameRow column newValue)] 

      (assoc board row newGameRow)
    )
  )
)

(defn changeElement [row column]
  (fn [ev]
  (let [gamerow (get (:gameboard @app-state) row)]
  (let [piece (get gamerow column)]
  (let [element (nth piece 2 "")] 
  (let [newelement (:next (get (:elements game-consts) element))]
  (let [newPiece (str (.substring piece 0 2) newelement)]
    (swap! app-state assoc :gameboard (changeCellOnBoard (:gameboard @app-state) row column newPiece))
  ))))))
)

(defn allow-drop [e]
  (.preventDefault e))

(defn move-piece-transaction [appstate fromRow fromColumn toRow toColumn]
  (def gameboard (:gameboard appstate))
  (def gameRow (get gameboard fromRow))
  (def piece (get gameRow fromColumn))
  (def newGameRow (assoc gameRow fromColumn ""))
  (def newGameBoard (assoc gameboard fromRow newGameRow))

  (def secondGameRow (get newGameBoard toRow))
  (def secondNewGameRow (assoc secondGameRow toColumn piece))
  (def secondNewGameBoard (assoc newGameBoard toRow secondNewGameRow))

  (assoc appstate :gameboard secondNewGameBoard)
)

(defn move-piece [fromRow fromColumn toRow toColumn]
  (swap! app-state move-piece-transaction (js/parseInt fromRow) (js/parseInt fromColumn) toRow toColumn)

  (println piece)
  (println (str fromRow "-" fromColumn " -> " toRow "-" toColumn))
)

(defn dropAction [row column] 
  (fn [ev] 
    (.preventDefault ev)       
    (move-piece (.getData (.-dataTransfer ev) "row") (.getData (.-dataTransfer ev) "column") row column)
))

(defn navbar []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "Elemental Chess"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (when (= :home (session/get :page)) "active")}
       [:a {:href "#/"} "Home"]]
      [:li {:class (when (= :about (session/get :page)) "active")}
       [:a {:href "#/about"} "About"]]]]]])

(defn about-page []
  [:div "this is the story of elemental-chess... work in progress"])

(defn game-cell [cell row column]
  (def cell-color (if (even? (+ row column)) "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP4/x8AAwAB/2+Bq7YAAAAASUVORK5CYII=" "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMwTHD6DwADbAHTRVnX2wAAAABJRU5ErkJggg=="))
    [:span.cell 
      {
        :on-drag-over allow-drop
        :on-drag-enter allow-drop
        :on-drop (dropAction row column)
      }
      [:img.cellimage {:src cell-color}] 
      (cond 
        (> (count cell) 1) 
          (do 
            (def cellArray (.split cell ""))
            (def playerClass (:class (get (:players game-consts) (first cellArray))))
            (def pieceClass (:class (get (:pieces game-consts) (nth cell 1))))
            (def elementClass (:class (get (:elements game-consts) (nth cell 2 "n"))))
            [:span {
                    :class (str playerClass " " pieceClass " " elementClass " chesspiece")
                    :draggable true ; -> otherwise the browser won't let you drag it
                    :on-drag-start (drag-start row column)
                    :on-click (changeElement row column)
                   }]
          )
        :else nil 
      )
    ]
)

(defn game-row [rowindex row]
  [:center
    [:div.row
      (map-indexed (fn [columnindex cellValue] (game-cell cellValue rowindex columnindex)) row)
    ]
  ]
)

(defn game-board [gameboard]
  (map-indexed game-row gameboard)
)

(defn home-page []
  [:div.container
   [:div.jumbotron
    [:h1 "Elemental Chess"]
    [:p "Welcome to your doom!"]
   ]
   [:div 
    (game-board (:gameboard @app-state))
   ]
  ]
)

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
      (GET "/docs" {:handler #(session/put! :docs %)}))

(defn mount-components []
  (reagent/render-component [#'navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [#'page] (.getElementById js/document "app")))

(defn init! []
  (fetch-docs!)
  (hook-browser-navigation!)
  (session/put! :page :home)
  (mount-components))


