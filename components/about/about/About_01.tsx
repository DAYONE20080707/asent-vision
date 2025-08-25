// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/LowerAboutSection_01";

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent className="pt-14 md:pt-24" variant="dot">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1200px] mx-auto">
          {/* <ContentHeadline entitle="Who we are" maintitle="私たちについて" /> */}
      
        </section>
        <AboutSection
            title="人と組織の成長を\n支援し、\n企業の未来と世界をつなぐ存在。"
            description={`私たちは、人と組織の成長を支援し、企業の未来と世界をつなぐ存在であり続けます。
人材・組織の課題解決を通じて、企業の持続的な成長を後押しするとともに、ビジネス展開をサポートしています。
人事・経営コンサルティング、就職支援、そして貿易事業を通じて、「人」「企業」「世界」の成長の架け橋となることを目指しています。
中小企業・スタートアップ企業・成長期の企業・大手企業の一部門/子会社・新規事業や海外進出を考えている企業・日本進出を考えている企業などが私たちの支援領域になります。
変化の時代においても、確かな価値を提供し続けるパートナーとして、ともに未来を創っていきます。`}
      
            // 以下は任意
            // imageUrl="/path/to/image.jpg"
            // position="代表取締役"
            // name="山田太郎"
          />
      </SectionContent>

    </>
  );
};

export default About_01;
