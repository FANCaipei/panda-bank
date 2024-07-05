import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BlockTitle = ({ title }) => {
  return <div className='text-2xl font-bold'>{title}</div>;
};

const BankSettingContent = () => {
  const { t } = useTranslation();

  const [depositProducts] = useState([
    {
      dur: 2,
      unit: "month",
      id: "xxx",
      interest: 0.3, // percentage
    },
  ]);

  return (
    <div className='px-4 py-3'>
      <BlockTitle title={t("bankSetting:TITLE_DEPOSIT_PRODUCT")} />
      <div className='mt-5'>
        {/* deposit products */}
        <div className='grid grid-cols-2 gap-3'>
          {depositProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className='flex items-center justify-between w-full'>
                  <span className='text-xl'>
                    {product.dur}&nbsp;
                    {t("bankSetting:TEXT_DUR_UNIT_MONTH")}
                  </span>
                  <div className='flex items-center'>
                    {/* <FontAwesomeIcon
                      icon={faPenToSquare}
                      className='text-blue-600'
                    /> */}
                    <Spacer x={2} />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className='text-rose-500'
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody className='pt-0'>
                <div className='flex items-end'>
                  <span className='text-3xl text-orange-500'>
                    {product.interest?.toFixed(2)}
                  </span>
                  <span className='ml-1 text-lg text-gray-400'>%</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Button
          variant='bordered'
          color='primary'
          fullWidth
          startContent={<FontAwesomeIcon icon={faPlus} radius='md' />}
          className='border mt-3'
        >
          {t("bankSetting:ACTION_ADD")}
        </Button>
      </div>
      <Spacer y={8} />
      <BlockTitle
        title={t("bankSetting:TITLE_FINANCIAL_PRODUCT")}
        className='mt-5'
      />
    </div>
  );
};

export default BankSettingContent;
