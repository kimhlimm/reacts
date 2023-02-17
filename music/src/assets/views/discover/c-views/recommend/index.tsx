import React, { memo, useEffect } from "react"
import type { ReactNode } from "react"
import { useAppDispatch } from "../../../../store"
import {
  fetchBannerDataAction,
  fetchRankingDataAction,
} from "./store/recommend"
import TopBanner from "./c-cpns/top-banner"
import HotRecommend from "./c-cpns/hot-recommend"
import { RecommendWrapper } from "./style"
import NewAlbum from "./c-cpns/new-album"
import TopRanking from "./c-cpns/top-ranking"
import UserLogin from "./c-cpns/user-login"
import Singger from "../recommend/c-cpns/settle-singer/index"
import HotAnchor from "./c-cpns/hot-anchor"
interface IPorps {
  children?: ReactNode
}
const Recommend: React.FC<IPorps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <Singger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
