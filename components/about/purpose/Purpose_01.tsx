// components/message/Purpose_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import PurposeCard from "@/components/ui/ItemCard/PurposeCard"

const Purpose_01 = () => {
  const purposeData = {
    vision: {
      title: "Vision",
      headline:
        "人と組織の可能性を引き出し、企業の持続的成長を支援するパートナーとなる",
      // description: [
      //   "メッセージ1はいります。メッセージ1はいります。",
      //   "メッセージ2はいります。メッセージ2はいります。",
      //   "メッセージ3はいります。メッセージ3はいります。",
      // ],
    },
    mission: {
      title: "Mission",
      subtitle:
        "私たちは、人と組織の可能性を最大限に引き出し、経営戦略と連動した人材・組織づくりを通じて、企業の持続的成長を支えることを使命としています。\n単なるコンサルタントではなく、共に歩む“パートナー”として、企業の未来を共創します。",
      description: [
        "人材の潜在能力を最大化します！",
        "組織の生産性と活力を高めます！",
        "経営戦略と人事戦略を統合します！",
        "持続的な競争力を生み出します！",
        "パートナーとして伴走します！",
      ],
    },
  }

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto">
        {/* <ContentHeadline
          enTitle="Purpose"
          mainTitle="私たちの想い"
          enTitleClassName="text-center"
          titleClassName="text-center"
        /> */}
        <ul className="space-y-16">
          <PurposeCard {...purposeData.vision} />
          <PurposeCard {...purposeData.mission} />
        </ul>
        <div className="w-full h-[300px] md:h-[523px] relative">
          <Image
            src="/about/purpose.jpg"
            alt="message"
            layout="fill"
            objectFit="cover"
            className="block rounded-[20px]"
          />
        </div>
      </section>
    </SectionContent>
  )
}

export default Purpose_01
