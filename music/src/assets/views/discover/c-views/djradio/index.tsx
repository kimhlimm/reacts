import React, { memo } from "react"
import type { ReactNode } from "react"
interface IPorps {
  children?: ReactNode
}
const Djradio: React.FC<IPorps> = () => {
  return <div>Djradio</div>
}
export default memo(Djradio)
