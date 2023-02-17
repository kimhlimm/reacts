import React, { memo } from "react"
import type { ReactNode } from "react"
import { BarControl, BarOpertor, BarPlayerInfo, PlayBarWrapper } from "./style"
import { Link } from "react-router-dom"
import { Slider } from "antd"
interface IPorps {
  children?: ReactNode
}
const PlayBar: React.FC<IPorps> = () => {
  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap_v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">日落大道</span>
              <span className="singer-name">梁博</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="current">04:35</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOpertor>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOpertor>
      </div>
      <div>au</div>
    </PlayBarWrapper>
  )
}
export default memo(PlayBar)
