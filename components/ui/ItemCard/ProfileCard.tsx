// components/ui/itemCard/ProfileCard_01.tsx

import React from "react"

interface ProfileCardProps {
  label: string
  value: string
  isFirst?: boolean // 最初のアイテムかどうかを判定するプロパティ
}

const formatText = (text: string) => {
  return text.split(/\n|<br\s*\/?>/g).map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== text.split(/\n|<br\s*\/?>/g).length - 1 && <br />}
    </React.Fragment>
  ))
}

const ProfileCard = ({ label, value, isFirst = false }: ProfileCardProps) => {
  return (
    <dl className="grid md:grid-cols-[150px_auto] gap-x-2">
      <dt
        className={`text-lg font-semibold flex items-baseline py-2 md:py-4 md:border-b-2 md:border-[#828282] text-[#828282] ${
          isFirst ? "border-t border-[#828282]" : ""
        }`}
      >
        {formatText(label)}
      </dt>
      <dd
        className={`font-light flex items-center pb-4 md:py-4 border-b border-[#828282] text-white ${
          isFirst ? "border-t border-[#828282]" : ""
        }`}
      >
        {formatText(value)}
      </dd>
    </dl>
  )
}

export default ProfileCard
