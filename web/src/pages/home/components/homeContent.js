import { Card, CardHeader } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='px-4 py-3'>
      <Card>
        <CardHeader onClick={() => navigate("/statement")}>
          {t("home:HOME_PAGE_BANK_CARD_TITLE")}
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomeContent;
