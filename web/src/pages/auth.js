import { Button, Input, Spacer } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-emerald-600 flex flex-col h-full items-stretch'>
      <div
        className='h-[130px] w-full'
        style={{
          backgroundImage: `url(${window.location.origin}/assets/images/example.png)`,
          clipPath: "ellipse(200px 90px at center 20px)",
        }}
      >
        {/* top image */}
      </div>
      <div className='py-5 text-2xl text-center font-semibold'>
        {t("auth:AUTH_PAGE_TITLE")}
      </div>
      <div className='pb-10 text-xs text-center'>
        {t("auth:AUTH_PAGE_SUB_TITLE")}
      </div>
      <div className='px-4'>
        {/* form block */}
        <Input type='text' label={t("auth:LABEL_PHONE")} />
        <Spacer y={4} />
        <Input type='text' label={t("auth:LABEL_SMSCODE")} />
      </div>
      <div className='grow'>{/* spacer */}</div>
      <div className='pb-10 flex flex-col px-4'>
        {/* buttons block*/}
        <Button color='primary'>{t("auth:LOGIN_BTN")}</Button>
        <Spacer y={3} />
        <Button className='bg-gray-400'>{t("auth:SIGNUP_BTN")}</Button>
      </div>
    </div>
  );
};

export default AuthPage;
