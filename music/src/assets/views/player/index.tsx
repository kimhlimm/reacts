import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Player: React.FC<IPorps> = () => {
  return <div>Player</div>
}
export default memo(Player)
