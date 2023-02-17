import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import AppFooter from "./assets/componet/app-footer"
import AppHeader from "./assets/componet/app-header"
import routes from "./assets/router"
import "antd/dist/reset.css"
import PlayBar from "./assets/views/player/play-bar"
// import {
//   useAppSelector,
//   useAppDispatch,
//   appShallowEqual,
// } from "./assets/store/index"
// import { changeCounter } from "./assets/store/modules/counter"
// import { IRootState } from "./assets/store/index"
// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>
function App() {
  // const { count } = useAppSelector(
  //   (state) => ({
  //     count: state.counter.count,
  //   }),
  //   appShallowEqual
  // )
  // const dispatch = useAppDispatch()
  // function changeCount() {
  //   dispatch(changeCounter(1))
  // }
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/* 播放器工具栏 */}
      <PlayBar />
    </div>
  )
}

export default App
