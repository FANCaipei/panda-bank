import ContentPage from "../contentPage";
import StatementContent from "./component/stateMentContent";
import SubpageHeader from "../../components/subpageHeader";
import { useTranslation } from "react-i18next";

const StateMentPage = () => {
  const { t } = useTranslation();

  return (
    <ContentPage
      header={<SubpageHeader title={t("main:TITLE_BANK_STATEMENT")} />}
      content={<StatementContent />}
    />
  );
};

export default StateMentPage;
