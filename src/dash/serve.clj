(ns lumber.serve
  (:require [mount.core :as mount :refer [defstate]]
            [ring.adapter.jetty9 :as ring.jetty9]
            [reitit.ring :as r.ring]
            [hyperfiddle.electric-jetty-adapter :as el-jetty]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.not-modified :refer [wrap-not-modified]]))

(defn document
  [{:as opts :keys [js styles links meta body title]}]
  [:html
   [:head
    #_[:link {:rel "icon" :href "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"}]
    (for [m meta]
      [:meta m])
    (for [s styles]
      [:style {:type                    "text/css"
               :dangerouslySetInnerHTML {:__html s}}])
    (for [l links]
      [:link {:rel "stylesheet" :href l}])
    (when title [:title title])]
   [:body
    body
    (for [{:keys [src script]} js]
      [:script
       (if src
         {:src src}
         {:dangerouslySetInnerHTML {:__html script}})])]])

(defn html [{:as opts :keys [js styles links meta body]}]
  [:<>
   [:meta {:charset "UTF-8"}]
   [document opts]])

(defn dash-index [_]
  {:status  200,
   :headers {"content-type" "text/html"},
   :body    "<meta charset=\"UTF-8\"/><html><head><title>dash</title></head><body><div id=\"root\"></div><script src=\"/js/compiled/dash.js\"></script><script>dash.ui.app.init()</script></body></html>"}
  )

(defn resource-handler [handler]
  (-> handler
      (wrap-resource "public")
      (wrap-content-type)
      (wrap-not-modified)))

(def router
  (r.ring/router
    [["/"
      {:get dash-index}]]))

(def handler
  (r.ring/ring-handler
    router
    (r.ring/create-default-handler)
    {:middleware [#_default-middleware resource-handler]})
  )

(def default-port 3800)
(defstate server
  :start (ring.jetty9/run-jetty
           handler
           {:port       (get *command-line-args* :port default-port)
            :join?      false
            :websockets {"/"
                         (fn [ring-req]
                           (el-jetty/electric-ws-adapter
                             (fn [write-msg read-msg]
                               (el-jetty/electric-ws-message-handler ring-req write-msg read-msg)
                               )))}})
  :stop (ring.jetty9/stop-server server))

(defn -main [& args]
  (mount/start))

(comment

  (def shadow-start! @(requiring-resolve 'shadow.cljs.devtools.server/start!))
  (def shadow-stop! @(requiring-resolve 'shadow.cljs.devtools.server/stop!))
  (def shadow-watch @(requiring-resolve 'shadow.cljs.devtools.api/watch))

  (do
    (mount/start)
    (shadow-start!)
    (shadow-watch :dash))

  (shadow-stop!)

  )