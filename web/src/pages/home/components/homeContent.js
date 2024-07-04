import { Card, CardHeader } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <div className='px-4 py-3'>
      <Card>
        <CardHeader>{t("home:HOME_PAGE_BANK_CARD_TITLE")}</CardHeader>
      </Card>
    </div>
  );
};

export default HomeContent;
