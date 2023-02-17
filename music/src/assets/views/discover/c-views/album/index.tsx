import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Album: React.FC<IPorps> = () => {
  return <div>Album</div>
}
export default memo(Album)
