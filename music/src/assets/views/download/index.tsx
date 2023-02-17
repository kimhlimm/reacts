import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Download: React.FC<IPorps> = () => {
  return <div>Download</div>
}
export default memo(Download)
