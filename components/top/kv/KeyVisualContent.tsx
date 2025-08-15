// components/ui/frame/KeyVisualContent.tsx
import classNames from "classnames"
import Image from "next/image"

interface KeyVisualContentProps {
  className?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={classNames("relative w-full", className)}>
      <Image
        src="/top/kv/kv_img1.jpg"
        alt="Key Visual"
        layout="fill"
        objectFit="cover"
        priority
        className="object-center"
      />
    </div>
  )
}

export default KeyVisualContent
