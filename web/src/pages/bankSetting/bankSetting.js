import { useTranslation } from "react-i18next";
import PageHeader from "../../components/pageHeader";
import ContentPage from "../contentPage";
import NavFooter from "../../components/navFooter";
import BankSettingContent from "./components/bankSettingContent";

const BankSettingPage = () => {
  const { t } = useTranslation();
  return (
    <ContentPage
      header={
        <PageHeader
          hasBackIcon={false}
          title={t("bankSetting:TITLE_BANK_SETTIING_HEADER")}
        />
      }
      content={<BankSettingContent />}
      footer={<NavFooter />}
    />
  );
};

export default BankSettingPage;
