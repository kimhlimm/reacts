import React, { ElementRef, memo, useRef } from "react"
import type { ReactNode } from "react"
import { AlbumWrapper } from "./style"
import AreaHeaderV1 from "../../../../../../componet/area-header-v1"
import { Carousel } from "antd"
import { useAppSelector } from "../../../../../../store"
import NewAlbumItem from "../../../../../../componet/new-album-item"
interface IPorps {
  children?: ReactNode
}
const NewAlbum: React.FC<IPorps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums,
  }))
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新歌上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}
export default memo(NewAlbum)
