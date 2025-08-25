import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import About_01 from "@/components/about/about/About_01"
import About_02 from "@/components/service/about/About_02"
import About_03 from "@/components/service/about/About_03"
import About_04 from "@/components/service/about/About_04"
import Service_03 from "@/components/service/service/Service_03"
import Service2_01 from "@/components/service/service2/Service_01"
import Service2_02 from "@/components/service/service2/Service_02"
import Service2_03 from "@/components/service/service2/Service_03"
import Service3_01 from "@/components/service/service3/Service_01"
import Service3_02 from "@/components/service/service3/Service_02"
import Service3_03 from "@/components/service/service3/Service_03"
import Cta_01 from "@/components/ui/module/cta/Cta_01"
import Cta_02 from "@/components/ui/module/cta/Cta_02"
import Cta_03 from "@/components/ui/module/cta/Cta_03"

// 事業内容
const ServicePage = () => {
  return (
    <div>
      <Lowerkv_02
        backgroundImage="/service/kv_service.jpg"
        title="事業内容"
        subtitle="Service"
      />
      <About_01 />
      {/* <Cta_01 /> */}
      <Service_03 />
      {/* <Service2_01 />
      <Service3_01 /> */}
      <Cta_03 variant="default"/>
    </div>
  )
}

export default ServicePage
