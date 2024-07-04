import ContentPage from "../contentPage";
import StatementContent from "./component/stateMentContent";
import SubpageHeader from "../../components/subpageHeader";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const StateMentPage = () => {
  const { t } = useTranslation();
  const { state } = useLocation();
  const { cardType } = state;

  const [title, setTitle] = useState();

  useEffect(() => {
    switch (cardType) {
      case "bank":
        setTitle(t("main:TITLE_BANK_STATEMENT"));
        break;
      case "credit":
        setTitle(t("main:TITLE_CREDIT_STATEMENT"));
        break;
      default:
        break;
    }
  }, [cardType, t]);

  return (
    <ContentPage
      header={<SubpageHeader title={title} />}
      content={<StatementContent />}
    />
  );
};

export default StateMentPage;
