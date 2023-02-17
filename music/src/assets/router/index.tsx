import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
const Discover = lazy(() => import("../views/discover/index"))
const DownLoad = lazy(() => import("../views/download/index"))
const Focus = lazy(() => import("../views/focus/index"))
const Mine = lazy(() => import("../views/mine/index"))
const Recommend = lazy(
  () => import("../views/discover/c-views/recommend/index")
)
const Album = lazy(() => import("../views/discover/c-views/album/index"))
const Artist = lazy(() => import("../views/discover/c-views/artist/index"))
const Djradio = lazy(() => import("../views/discover/c-views/djradio/index"))
const Ranking = lazy(() => import("../views/discover/c-views/ranking/index"))
const Songs = lazy(() => import("../views/discover/c-views/songs/index"))
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
    ],
  },
  {
    path: "/download",
    element: <DownLoad />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
]
export default routes
