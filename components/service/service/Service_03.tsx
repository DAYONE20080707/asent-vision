// components/message/Service_03.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import ServiceSection_03 from "@/components/ui/module/ServiceSection_03"
import BusinessSection from "@/components/ui/module/BusinessSection"

// コンサルティング事業のカードデータ
const consultingCards = [
  {
    id: "01",
    image: "/service/detail1_1.jpg",
    title: "人材採用支援",
    description:
      "中途・新卒・グローバル・専門職採用など、企業の成長に直結する人材の獲得を支援します。",
  },
  {
    id: "02",
    image: "/service/detail1_2.jpg",
    title: "組織・人材戦略構築",
    description:
      "企業の経営戦略を達成するために、組織のあり方と人材活用方法の計画と実行を支援します。",
  },
  {
    id: "03",
    image: "/service/detail1_3.jpg",
    title: "人事制度構築",
    description:
      "企業の成長や従業員のモチベーション向上を目的として、等級制度、評価制度、報酬制度などの人事制度を設計・導入・運用を支援します。",
  },
  {
    id: "04",
    image: "/service/detail1_4.jpg",
    title: "教育研修・人材育成",
    description:
      "長期的な視点で組織全体の成長を促す、特定のスキルや知識を習得させます。",
  },
  {
    id: "05",
    image: "/service/detail1_5.jpg",
    title: "従業員モチベーション向上",
    description:
      "明確な目標設定、公正な評価制度、適切なフィードバック、キャリアアップの機会提供、働きがいのある環境つくりを支援します。",
  },
]

// 就職支援事業のカードデータ
const jobSupportCards = [
  {
    id: "01",
    image: "/service/detail2_1.jpg",
    title: "個人向けサービス",
    description:
      "履歴書や面接対策といった就活ノウハウだけでなく、ビジネスマナーや仕事に対する考え方など、就職してから困らない社会人の基礎が学べます。",
  },
  {
    id: "02",
    image: "/service/detail2_2.jpg",
    title: "企業および組織向けサービス",
    description:
      "採用支援・教育研修を二軸に、組織の人に関する困りごとの解決策をご提示します。",
  },
  {
    id: "03",
    image: "/service/detail2_3.jpg",
    title: "大学および教育機関向けサービス",
    description:
      "入社を控えた4年生向けの入社前研修、3年生向けの就職ガイダンスやインターンシップ、1・2年生のキャリア教育など幅広く支援します。",
  },
]

// 貿易事業のカードデータ
const tradeCards = [
  {
    id: "01",
    image: "/service/detail3_1.jpg",
    title: "輸出事業",
    description:
      "商材の選定から輸出手続き、現地パートナーとの連携、物流・貿易管理まで、輸出に関わるあらゆるプロセスをサポートします。信頼される貿易パートナーを目指しています。",
  },
  {
    id: "02",
    image: "/service/detail3_2.jpg",
    title: "輸入事業",
    description:
      "海外メーカー・サプライヤーとの信頼関係を築きながら、商談、輸入手続き、通関などサポートします。日本と世界を結ぶビジネスパートナーとして、信頼と品質を大切にした輸入事業を推進しています。",
  },
  {
    id: "03",
    image: "/service/detail3_3.jpg",
    title: "商材例",
    description:
      "天然繊維、化学繊維、繊維原料ならびに糸、織物などの繊維製品、衣料用繊維製品、医療品、玩具、家庭用電気製品、日用品雑貨、食品、アクセサリー、衣料品、化粧品、スポーツ・アウトドア用品など",
  },
]

// メッセージ
const Service_03 = () => {
  return (
    <>
      {/* コンサルティング事業 */}
      <BusinessSection
        enTitle="Consulting"
        mainTitle="コンサルティング事業"
        enTitle2="Feature"
        jaTitle="｢人と組織｣に関する課題を解決して企業成長を目指す"
        description={`地域に密着した中小企業から、大手企業、グローバル企業まで、企業の成長戦略を人事面からサポート。
採用戦略から採用計画などワンストップでお任せいただけます。`}
        imageUrl="/service/service1.jpg"
        cards={consultingCards}
        variant="white"
      />

      {/* 就職支援事業案内 */}
      <BusinessSection
        enTitle="Job Support"
        mainTitle="就職支援事業案内"
        enTitle2="Feature"
        jaTitle="ひとりひとりの｢まだ見ぬ可能性｣や｢強み｣を羽ばたかせる"
        description={`就職支援事業は、求職者（学生・既卒者・転職希望者・留学生等）の就労支援を通じて、キャリア形成・社会的自立・人材流動性の促進を目的としています。`}
        imageUrl="/service/service2.jpg"
        cards={jobSupportCards}
        variant="black"
      />

      {/* 貿易事業 */}
      <BusinessSection
        enTitle="Trading"
        mainTitle="貿易事業"
        enTitle2="Feature"
        jaTitle="企業の収益拡大と\n国際競争力の向上"
        description={`日本国内外の商材・製品・サービスの流通をグローバルに展開し、企業の収益拡大と国際競争力の向上を図ります！`}
        imageUrl="/service/service3.jpg"
        cards={tradeCards}
        variant="white"
      />
    </>
  )
}

export default Service_03
