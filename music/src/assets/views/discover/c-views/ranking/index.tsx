import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Ranking: React.FC<IPorps> = () => {
  return <div>Ranking</div>
}
export default memo(Ranking)
