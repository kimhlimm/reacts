import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Mine: React.FC<IPorps> = () => {
  return <div>Mine</div>
}
export default memo(Mine)
