import MoreButton from "@/components/ui/button/MoreButton"
import Image from "next/image"

interface ServiceSection_03Props {
  enTitle: string // タイトル（英語）
  jaTitle: string // タイトル（日本語）
  headingText?: string // 見出しテキスト
  description: string // 本文
  buttonHref?: string // ボタンリンク先（任意）
  imageUrl?: string // 画像URL（任意）
}

const ServiceSection_03 = ({
  enTitle,
  jaTitle,
  headingText,
  description,
  buttonHref,
  imageUrl,
}: ServiceSection_03Props) => {
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="flex flex-col justify-start gap-10 md:gap-10">
      <div className="relative min-h-[480px] mr-[calc(50%-50vw)]">
        <Image
          src={imageUrl || "/service/service3.jpg"}
          alt={jaTitle || "message"}
          layout="fill"
          objectFit="cover"
          className="block w-full h-full rounded-l-[15px]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-[35%] md:max-w-[400px]">
          <p className="text-accentColor text-lg font-en font-extrabold tracking-[0.03em]">
            {enTitle}
          </p>
          <h2 className="text-accentColor text-[28px] leading-[150%] tracking-[0.05em] mt-2 pb-6">
            {convertNewLines(jaTitle)}
          </h2>
        </div>
        <div className="md:w-[65%] md:max-w-[800px]">
          <h3 className="text-[22px] font-medium leading-[160%] tracking-[0.03em] text-accentColor">
            {headingText ? convertNewLines(headingText) : null}
          </h3>
          <p className="mt-[26px] text-base md:text-xl font-normal ![line-height:250%] tracking-[0.02em] whitespace-pre-line">
            {description}
          </p>
          {buttonHref && (
            <MoreButton
              href={buttonHref}
              className="mt-6 text-accentColor border-accentColor"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection_03
