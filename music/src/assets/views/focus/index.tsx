import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Focus: React.FC<IPorps> = () => {
  return <div>Focus</div>
}
export default memo(Focus)
