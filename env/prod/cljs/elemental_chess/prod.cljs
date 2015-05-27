(ns elemental-chess.app
  (:require [elemental-chess.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)