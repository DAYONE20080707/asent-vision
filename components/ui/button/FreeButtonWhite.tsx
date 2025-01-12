import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid";


// テキストを自由に設定できるボタン
// 背景ホワイト　テキストブルー
const FreeButtonWhite = ({
  className = "",
  text,
  href,
}: {
  className?: string
  text: string
  href: string
}) => {
  return (
    <Link
      href={href} 
      className={`bg-white text-accentColor cursor-pointer flex items-center justify-center w-[350px] py-4 font-semibold relative group  ${className}`} 
    >
      {text}<ArrowRightIcon className="w-4 h-4 absolute top-1/2 right-[100px] -translate-y-1/2 group-hover:right-[90px]
       duration-300 transform ease-in-out" />
    </Link>
  )
}

export default FreeButtonWhite
