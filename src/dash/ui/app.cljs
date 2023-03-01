(ns dash.ui.app
  (:require [hyperfiddle.electric :as p]
            [hyperfiddle.electric-dom2 :as dom]
            [dash.ui.views :as views]))

(def electric-main
  (p/boot
    (binding [dom/node (dom/by-id "root")]
      (new views/App))))

(defonce reactor nil)

(defn ^:dev/after-load ^:export start []
  (assert (nil? reactor) "reactor already running")
  (set! reactor (electric-main
                  #(js/console.log "Reactor success:" %)
                  #(js/console.error "Reactor failure:" %))))

(defn ^:dev/before-load stop []
  (when reactor (reactor)) ; teardown
  (set! reactor nil))
