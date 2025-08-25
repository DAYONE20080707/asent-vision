"use client"

import Image from "next/image"

interface Lowerkv_02Props {
  // 画像関連
  backgroundImage?: string
  // テキスト関連
  title?: string
  subtitle?: string
}

// 私たちについて
const Lowerkv_02 = ({
  backgroundImage = "/common/lowerkv.jpg",
  title = "タイトルが入ります",
  subtitle = "title",
}: Lowerkv_02Props) => {
  return (
    <div
      className="h-[200px] md:h-[800px]"
      style={{
        background: `url(${backgroundImage}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="md:max-w-[1240px] mx-auto space-y-10 px-5 relative h-full flex items-center text-accentColor">
        <h1 className="text-base md:text-xl font-semibold tracking-[0.03em] leading-[100%]">
          {title}
          <span className="block font-en text-[64px] font-normal ![line-height:100%]">
            {subtitle}
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Lowerkv_02
