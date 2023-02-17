import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const AppFooter: React.FC<IPorps> = () => {
  return <div>AppFooter</div>
}
export default memo(AppFooter)
