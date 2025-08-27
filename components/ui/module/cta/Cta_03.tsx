// components/module/cta/Cta_03.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"
import SectionContent from "../../frame/SectionContent"
import MoreLinkButton from "../../button/MoreButton"

interface Cta_03Props {
  variant?: "dot" | "default" // 全体のvariant
}

const Cta_03 = ({ variant = "dot" }: Cta_03Props) => {
  return (
    <>
      <SectionContent className="!py-0 !px-0" variant={variant}>
        <section className="mx-auto grid md:grid-cols-2 rounded-t-[40px] overflow-hidden">
          <div className="text-white text-center bg-accentColor py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1">事業紹介</p>
            <h4 className="text-3xl md:text-[40px] font-en leading-[120%]">
              Our Service
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%]">
              人事・経営コンサルティングや就職支援、貿易事業など
              <br />
              様々なサービスを提供しております。
            </p>
            <div className="flex justify-center">
              <MoreLinkButton href="coming-soon" className="md:!w-[350px]" />
            </div>
          </div>
          <div
            className={`text-center py-10 md:py-16 px-5 ${
              variant === "default" ? "text-white" : "text-baseColor"
            }`}
            style={
              variant === "default"
                ? {
                    backgroundColor: "#1b1b1b",
                    backgroundImage:
                      "radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px), radial-gradient(circle, #ffffff0d 1.5px, transparent 1.5px)",
                    backgroundPosition: "0 0, 5px 10px",
                    backgroundSize: "10px 20px",
                  }
                : {
                    backgroundColor: "#ffffff",
                  }
            }
          >
            <p className="md:text-lg font-semibold mb-1">お問い合わせ</p>
            <h4 className="text-3xl md:text-[40px] font-en leading-[120%]">
              Contact us
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%]">
              人事・経営に関することや、就職支援については
              <br />
              お気軽にご相談ください。
            </p>
            <div className="flex justify-center">
              <MoreLinkButton
                href="/coming-soon"
                variant={variant === "default" ? "white" : "black"}
                className="md:!w-[350px]"
              >
                Contact us
              </MoreLinkButton>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Cta_03
