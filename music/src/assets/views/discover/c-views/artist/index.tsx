import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Artist: React.FC<IPorps> = () => {
  return <div>Artist</div>
}
export default memo(Artist)
