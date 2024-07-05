import { useTranslation } from "react-i18next";
import PageHeader from "../../components/pageHeader";
import ContentPage from "../contentPage";
import NavFooter from "../../components/navFooter";

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
      footer={<NavFooter />}
    />
  );
};

export default BankSettingPage;
