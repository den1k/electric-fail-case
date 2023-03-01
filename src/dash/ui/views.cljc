(ns dash.ui.views
  #?(:cljs (:require-macros dash.ui.views))
  (:require
    [hyperfiddle.electric :as e]
    [hyperfiddle.electric-dom2 :as dom]))


(e/defn App []
  (e/server (e/client (dom/div (dom/text "goo"))))
  )
