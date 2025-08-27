// components/message/Message_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_02"

// メッセージ
const Message_01 = () => {
  return (
    <>
      <SectionContent className="pt-14 md:pt-24" variant="dot">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle="Message"
            mainTitle="代表挨拶"
            enTitleClassName=""
            titleClassName=""
          />
        </section>
        <AboutSection
          title="日本を代表する\n
人事・組織の変革支援\n
パートナーとして、\n
あらゆる企業の\n
人的資本経営を後押しする"
          description={`私たちのビジョンは、「人と組織の可能性を最大限に引き出すこと」です。
世の中が急激に変化する中で、企業が持続的に成長していくためには、「人」そして「組織」がどう進化していくかが何よりも大切だと考えています。
しかし現実には、人材不足、組織の硬直化、リーダー層の育成など、多くの課題が日々押し寄せています。私たちは、こういう悩みを一緒に解きほぐし、前に進む伴走者でありたいと考えています。
人事・経営の仕組みをゼロから一緒につくる。
優秀な仲間を見つけ、惹きつけ、育てていく。
「人」と「組織」を軸に、企業がもっと自由に、しなやかに、そして大胆にチャレンジできる環境をデザインしていく。
それが、この事業にかける想いです。
お客様と同じ目線で悩み、考え、動くことにかけては、どこにも負けない自信があります。
これからも、一社一社、一人ひとりと真剣に向き合いながら、「一緒に創る未来」をご一緒できればと思っています。
今後とも、どうぞよろしくお願いいたします。`}
          // position="役職役職"
          name="株式会社アセントビジョン"
          // 以下は任意
          // buttonHref="/coming-soon"
          imageUrl="/about/message.jpg"
        />
      </SectionContent>
    </>
  )
}

export default Message_01
