// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!pb-0 !px-0" variant="dot">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5">
          <ContentHeadline
            enTitle="Who we are"
            mainTitle="私たちについて"
            enTitleClassName=""
            titleClassName=""
          />
        </section>
        <AboutSection
          title="人と組織の可能性を\n引き出し、 企業の\n持続的成長を支援する\nパートナーとなる"
          description={`私たちは、人と組織の可能性を最大限に引き出し、経営戦略と連動した人材・組織づくりを通じて、企業の持続的成長を支えることを使命としています。

単なるコンサルタントではなく、共に歩む“パートナー”として、企業の未来を共創します。`}
          buttonHref="/coming-soon"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
