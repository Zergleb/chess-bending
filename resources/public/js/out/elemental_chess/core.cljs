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

(def app-state
  (r/atom
   {:gameboard [
    ["wr" "wk" "wb" "wq" "wK" "wbe" "wkf" "wrw"]
    ["wp" "wp" "wp" "wp" "wp" "wp" "wp" "wp"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["0" "0" "0" "0" "0" "0" "0" "0"]
    ["bp" "bp" "bp" "bp" "bp" "bp" "bp" "bp"]
    ["brf" "bke" "bbw" "bq" "bK" "bb" "bk" "br"]
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
    "f" {:class "fire"}
    "w" {:class "water"}
    "e" {:class "earth"}
    "n" {:class "normal"}
  }
})

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
      [:img.cellimage {:src cell-color}] 
      (cond 
        (> (count cell) 1) 
          (do 
            (def cellArray (.split cell ""))
            (def playerClass (:class (get (:players game-consts) (first cellArray))))
            (def pieceClass (:class (get (:pieces game-consts) (nth cell 1))))
            (def elementClass (:class (get (:elements game-consts) (nth cell 2 "n"))))
            [:span {:class (str playerClass " " pieceClass " " elementClass " chesspiece")}]
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


