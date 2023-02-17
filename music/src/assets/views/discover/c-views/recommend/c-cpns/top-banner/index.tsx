import React, { memo, useRef, ElementRef, useState } from "react"
import type { ReactNode } from "react"
import { appShallowEqual, useAppSelector } from "../../../../../../store"
import classNames from "classnames"
import { Carousel } from "antd"
import {
  TopBannercenter,
  TopBannerLeft,
  TopBannerRight,
  TopBannerWrapper,
} from "./style"
interface IPorps {
  children?: ReactNode
}
const TopBanner: React.FC<IPorps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex] = useState(0)
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners,
    }
  }, appShallowEqual)
  function handlePrev() {
    bannerRef.current?.prev()
  }
  function handleNext() {
    bannerRef.current?.next()
  }

  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + "?imageView&blur=40x20"
  }
  return (
    <TopBannerWrapper
      style={{ background: `url('${bgImageUrl}')center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <TopBannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            ref={bannerRef}
            effect="fade"
            dots={false}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={index}>
                  <span
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </TopBannerLeft>
        <TopBannerRight></TopBannerRight>
        <TopBannercenter>
          <button className="btn left" onClick={handlePrev}></button>
          <button className="btn right" onClick={handleNext}></button>
        </TopBannercenter>
      </div>
    </TopBannerWrapper>
  )
}
export default memo(TopBanner)
