import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import PageContent from "@/components/ui/frame/PageContent"
import Breadcrumb from "@/components/ui/module/Breadcrumb"
import Thanks from "@/components/contact/thanks/Thanks"

// お問い合わせ完了
const ContactThanksPage = () => {
  return (
    <PageContent className="bg-black">
      <Breadcrumb
        mainTitle="お問い合わせ完了"
        parentDirectoryName="お問い合わせ"
        parentDirectoryLink="/coming-soon"
      />
      {/* <Lowerkv_01 enTitle="CONTACT" mainTitle="お問い合わせ" /> */}
      <Thanks />
    </PageContent>
  )
}

export default ContactThanksPage
