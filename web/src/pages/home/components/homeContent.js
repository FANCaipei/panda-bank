import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='px-4 py-3'>
      <Card>
        <CardHeader
          onClick={() =>
            navigate("/statement", { state: { cardType: "bank" } })
          }
        >
          {t("home:HOME_PAGE_BANK_CARD_TITLE")}
        </CardHeader>
        <CardBody></CardBody>
      </Card>
      <Card className='mt-6'>
        <CardHeader
          onClick={() =>
            navigate("/statement", { state: { cardType: "credit" } })
          }
        >
          {t("home:HOME_PAGE_CREDIT_CARD_TITLE")}
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </div>
  );
};

export default HomeContent;
