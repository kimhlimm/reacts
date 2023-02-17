import React, { memo } from "react"
import type { ReactNode } from "react"
import { AreaHeaderV2wrapper } from "./style"
interface IPorps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}
const AreaHeaderV2: React.FC<IPorps> = (props) => {
  const { title = "默认标题", moreText = "查看全部", moreLink } = props
  return (
    <AreaHeaderV2wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && (
        <a className="content" href={moreLink}>
          {moreText}
        </a>
      )}
    </AreaHeaderV2wrapper>
  )
}
export default memo(AreaHeaderV2)
