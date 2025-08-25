// components/ui/frame/KeyVisualContent.tsx
import classNames from "classnames"

interface KeyVisualContentProps {
  className?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={classNames("relative w-full", className)}>
      <video
        src="/top/kv/kv.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover object-center"
      />
    </div>
  )
}

export default KeyVisualContent
