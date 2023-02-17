import React, { memo, Suspense } from "react"
import type { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./c-cpns/index"
interface IPorps {
  children?: ReactNode
}
const Discover: React.FC<IPorps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(Discover)
