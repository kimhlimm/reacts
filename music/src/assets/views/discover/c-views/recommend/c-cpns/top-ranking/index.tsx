import React, { memo } from "react"
import type { ReactNode } from "react"
import { useAppSelector } from "../../../../../../store"
import { RankingWrapper } from "./style"
import AreaHeaderV1 from "../../../../../../componet/area-header-v1"
import TopRankingItem from "../top-ranking-item"
interface IPorps {
  children?: ReactNode
}
const TopRanking: React.FC<IPorps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings,
  }))
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}
export default memo(TopRanking)
