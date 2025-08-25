// components/ui/module/BusinessSection.tsx

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import ServiceSection_03 from "@/components/ui/module/ServiceSection_03"

// 事業セクションの共通コンポーネント
interface BusinessSectionProps {
  enTitle: string
  mainTitle: string
  enTitleClassName?: string
  titleClassName?: string
  enTitle2: string
  jaTitle: string
  description: string
  imageUrl: string
  cards: Array<{
    id: string
    image: string
    title: string
    description: string
  }>
  variant?: "white" | "black" // 背景色のバリアント
}

const BusinessSection = ({
  enTitle,
  mainTitle,
  enTitleClassName,
  titleClassName,
  enTitle2,
  jaTitle,
  description,
  imageUrl,
  cards,
  variant = "black",
}: BusinessSectionProps) => {
  const isWhiteVariant = variant === "white"

  return (
    <SectionContent
      className="!p-0"
      variant={isWhiteVariant ? "dot" : "default"}
    >
      <SectionContent
        className={`rounded-t-[40px] ${
          isWhiteVariant ? "text-baseColor" : "text-white"
        }`}
        variant={isWhiteVariant ? "default" : "dot"}
      >
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle={enTitle}
            mainTitle={mainTitle}
            enTitleClassName={enTitleClassName}
            titleClassName={titleClassName}
          />
          <ServiceSection_03
            enTitle={enTitle2}
            jaTitle={jaTitle}
            description={description}
            imageUrl={imageUrl}
          />

          {/* サービスカードレイアウト */}
          <div className="mt-20 px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-6 md:gap-y-16">
              {cards.map((card) => (
                <div key={card.id} className="overflow-hidden">
                  <div className="relative h-48 md:h-[250px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full rounded-[10px]"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="text-xl font-en mb-1">Detail {card.id}</div>
                    <h3
                      className={`text-lg md:text-[22px] mb-4 leading-tight pb-4 font-semibold border-b ${
                        isWhiteVariant ? "border-black" : "border-white"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-[17px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionContent>
    </SectionContent>
  )
}

export default BusinessSection
