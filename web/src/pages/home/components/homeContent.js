import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='px-4 py-3'>
      {/* overview */}
      <div className='w-full'>
        <div className='text-sm text-gray-400'>{t("home:TITLE_OVERVIEW")}</div>
        <div className='mt-2 text-3xl font-semibold text-gray-900'>¥35,600</div>
      </div>
      {/* bank card & credit card */}
      <div className='mt-5 grid grid-cols-2 gap-3'>
        {/* bank card */}
        <Card className='shadow-none border-none'>
          <CardHeader
            className='pb-1'
            onClick={() =>
              navigate("/statement", { state: { cardType: "bank" } })
            }
          >
            {t("home:BANK_CARD_TITLE")}
          </CardHeader>
          <CardBody className='pt-0'>
            <div className='text-xs text-gray-400'>
              {t("home:TITLE_BANK_BALANCE")}
            </div>
            <div className='text-lg font-semibold text-gray-900'>¥200</div>

            <Button
              variant='bordered'
              color='danger'
              size='md'
              className='mt-3'
            >
              {t("home:ACTION_WITHDRAW")}
            </Button>
            <Button color='primary' size='md' className='mt-2'>
              {t("home:ACTION_DEPOSIT")}
            </Button>
          </CardBody>
        </Card>
        {/* credit card */}
        <Card className='shadow-none border-none'>
          <CardHeader
            className='pb-1'
            onClick={() =>
              navigate("/statement", { state: { cardType: "credit" } })
            }
          >
            {t("home:CREDIT_CARD_TITLE")}
          </CardHeader>
          <CardBody className='pt-0'>
            <div className='w-full flex items-center'>
              <div className='text-xs text-gray-400'>
                {t("home:TITLE_CREDIT_BALANCE")}
              </div>
              {/* <span color='success' className='ml-2 text-xs text-green-600'>
                {t("home:TEXT_REPAID")}
              </span> */}
              <span color='success' className='ml-2 text-xs text-rose-500'>
                {t("home:TEXT_TO_BE_REPAID")}
              </span>
            </div>
            <div className='text-lg font-semibold text-pink-700'>¥40</div>
            <Button variant='bordered' size='md' className='mt-3'>
              {t("home:ACTION_PAY")}
            </Button>
            <Button color='primary' size='md' className='mt-2'>
              {t("home:ACTION_CONSUME")}
            </Button>
          </CardBody>
        </Card>
      </div>
      {/* financial products */}
      <Card className='mt-5 shadow-none border-none'>
        <CardBody>
          <div className='flex justify-between'>
            <h5 className='text-base'>xxx</h5>
            <span className='text-base text-blue-600'>
              {t("home:TEXT_MORE")}
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeContent;
