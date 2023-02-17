import React, { memo } from "react"
import type { ReactNode } from "react"
import { SinggerWrapper } from "./style"
import AreaHeaderV2 from "../../../../../../componet/area-headerv2/index"
import { useAppSelector } from "../../../../../../store"
import { getImageSize } from "../../../../../../utils/format"
interface IPorps {
  children?: ReactNode
}
const Singger: React.FC<IPorps> = () => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers,
  }))
  return (
    <SinggerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="#/discover/artist"
      />
      <div className="atists">
        {settleSingers.map((item) => {
          return (
            <a href="#/discover/artist" className="item" key={item.id}>
              <img src={getImageSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(" ")}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为音乐人</a>
      </div>
    </SinggerWrapper>
  )
}
export default memo(Singger)
