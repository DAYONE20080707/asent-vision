// components/service/Service_02.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_02"
import { serviceData } from "@/components/data/top/ServiceData"
import Image from "next/image"
import MoreButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

const Service_02 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <SectionContent id="service">
        <section className="md:max-w-[1200px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/top/service/service_img.png"
                alt="Service Image"
                width={580}
                height={853}
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className="flex-1 max-w-[540px]">
              <ContentHeadline
                enTitle="Service"
                mainTitle="事業紹介"
                enTitleClassName=""
                titleClassName=""
              />
              <h3 className=" text-2xl md:text-[42px] tracking-[0.05em] leading-[160%] pb-6 border-b border-borderGray">
              人と組織の成長を支援し、
                <br />
                企業の未来と世界を <br />つなぐ存在。
              </h3>
              <div className="mt-6 space-y-6">
                {servicesToDisplay.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image} // 画像パスを渡す
                    href={service.href} // リンク先を渡す
                    className=" md:flex justify-between"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <MoreButton href="/service" variant="orange" />
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Service_02
