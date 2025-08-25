import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import About_01 from "@/components/about/about/About_01"
import About_02 from "@/components/about/about/About_02"
import About_03 from "@/components/about/about/About_03"
import About_04 from "@/components/about/about/About_04"
import Purpose_01 from "@/components/about/purpose/Purpose_01"
import History_01 from "@/components/about/history/History_01"
import Message_01 from "@/components/about/message/Message_01"
import Message_02 from "@/components/about/message/Message_02"
import Message_03 from "@/components/about/message/Message_03"
import Message_04 from "@/components/about/message/Message_04"
import Profile_01 from "@/components/top/profile/Profile_01"
import Profile_02 from "@/components/top/profile/Profile_02"
import Profile_03 from "@/components/top/profile/profile_03"
import Profile_04 from "@/components/top/profile/profile_04"
import Service_03 from "@/components/service/service1/Service_03"
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <Lowerkv_02
        backgroundImage="/about/kv_about.jpg"
        title="私たちについて"
        subtitle="Who we are"
      />
      <Message_01 />
      {/* <About_01 /> */}
      <Purpose_01 />
      {/* <History_01 /> */}
      {/* <Service_03/> */}

      <Profile_01 />
      <Cta_03 />
    </div>
  )
}

export default AboutPage
