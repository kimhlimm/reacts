import React, { memo } from "react"
import type { ReactNode } from "react"
import AreaHeaderV1 from "../../../../../../componet/area-header-v1"
import { HotRecommendWrapper } from "./style"
import { appShallowEqual, useAppSelector } from "../../../../../../store"
import SongMenuItem from "../../../../../../componet/song-menu-item"
interface IPorps {
  children?: ReactNode
}
const HotRecommend: React.FC<IPorps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends,
    }),
    appShallowEqual
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem itemData={item} key={item.id}></SongMenuItem>
        })}
      </div>
    </HotRecommendWrapper>
  )
}
export default memo(HotRecommend)
