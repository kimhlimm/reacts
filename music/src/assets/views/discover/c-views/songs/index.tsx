import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Songs: React.FC<IPorps> = () => {
  return <div>Songs</div>
}
export default memo(Songs)
