// components/profile/Profile_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard"
import SectionContent from "@/components/ui/frame/SectionContent"

const Profile_01 = () => {
  return (
    <>
      <SectionContent variant="dot">
        <section className="md:max-w-[1200px] mx-auto text-white">
          <ContentHeadline
            enTitle="Profile"
            mainTitle="会社概要"
            enTitleClassName="text-white"
            titleClassName=""
          />
          <div className="mt-16">
            <ProfileCard
              label="社名"
              value="株式会社アセントビジョン"
              isFirst={true}
            />
            <ProfileCard
              label="本社所在地"
              value={`125-0062 東京都葛飾区青戸7-30-1\n電話番号　000-000-0000／FAX　000-000-0000`}
            />
            <ProfileCard
              label="事業内容"
              value="人事コンサルティング、経営コンサルティング、人材採用支援、教育研修"
            />
          </div>
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6475.647371763422!2d139.84992484447267!3d35.755138140253614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018858099416b39%3A0xadb61ca90d24bed1!2z44CSMTI1LTAwNjIg5p2x5Lqs6YO96JGb6aO-5Yy66Z2S5oi477yX5LiB55uu!5e0!3m2!1sja!2sjp!4v1756080140704!5m2!1sja!2sjp"
              width="1200"
              height="523"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-[600px] md:max-w-[1200px] rounded-[20px]"
            ></iframe>
            <p className="mt-4 font-light">
              125-0062
              <br />
              東京都葛飾区青戸7-30-1
            </p>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Profile_01
