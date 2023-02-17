import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getArtistList,
} from "../../../../../service/modules/recommend"
export const fetchBannerDataAction = createAsyncThunk(
  "banners",
  (args, { dispatch }) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendsAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingerAction(res.artists))
    })
  }
)
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  "rankingData",
  (args, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlayListDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      console.log(playlists)
      dispatch(changeRankingsAction(playlists))
    })
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: [],
}
const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    },
  },
  extraReducers: () => {
    // builder
    //   .addCase(fetchBannerDataAction.pending, () => {
    //     return console.log("pending")
    //   })
    //   .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
    //     state.banners = payload
    //   })
    //   .addCase(fetchBannerDataAction.rejected, () => {
    //     return console.log("reject")
    //   })
  },
})
export const {
  changeBannerAction,
  changeHotRecommendsAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingerAction,
} = recommendSlice.actions
export default recommendSlice.reducer
