import React, { memo } from "react"
import type { ReactNode } from "react"
import { AnchorWrapper } from "./style"
import AreaHeaderv2 from "../../../../../../componet/area-headerv2"
import { hotRadios } from "../../../../../../data/local_data"
interface IPorps {
  children?: ReactNode
}
const HotAnchor: React.FC<IPorps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderv2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a className="image" href="#/">
                <img src={item.picUrl} alt="123" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="dexc">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}
export default memo(HotAnchor)
