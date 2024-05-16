import { Button, Input, Spacer } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState();
  const [phoneInputErrorMsg, setPhoneInputErrorMsg] = useState();
  const [verifyCode, setVerifyCode] = useState();
  const [verifyCodeInputErrorMsg, setVerifyCodeInputErrorMsg] = useState();

  const onPhoneInputValChange = useCallback(
    (value) => {
      setPhone(value);
      const reg = RegExp("^[0-9]+$");
      setPhoneInputErrorMsg(reg.test(value) ? null : t("auth:PHONE_ERR_MSG"));
    },
    [t]
  );
  const onCodeInputValChange = useCallback(
    (value) => {
      setVerifyCode(value);
      const reg = RegExp("^[0-9]{6}$");
      setVerifyCodeInputErrorMsg(
        reg.test(value) ? null : t("auth:SMSCODE_ERR_MSG")
      );
    },
    [t]
  );

  const isFormValid = useCallback(() => {
    if (!phone || !verifyCode) {
      return false;
    }
    if (phoneInputErrorMsg?.length || verifyCodeInputErrorMsg?.length) {
      return false;
    }
    return true;
  }, [phone, verifyCode, phoneInputErrorMsg, verifyCodeInputErrorMsg]);

  return (
    <div className='bg-emerald-600 flex flex-col h-full items-stretch'>
      <div
        className='h-[180px] w-full bg-cover'
        style={{
          backgroundImage: `url(${window.location.origin}/assets/images/example.png)`,
          clipPath: "ellipse(250px 120px at center 60px)",
        }}
      >
        {/* top image */}
      </div>
      <div className='mt-10 text-4xl text-center font-semibold'>
        {t("auth:AUTH_PAGE_TITLE")}
      </div>
      {/* <div className='pb-10 text-xs text-center'>
          {t("auth:AUTH_PAGE_SUB_TITLE")}
        </div> */}
      <div className='px-4 mt-10'>
        {/* form block */}
        <Input
          type='text'
          label={t("auth:LABEL_PHONE")}
          value={phone}
          onValueChange={onPhoneInputValChange}
          isInvalid={phoneInputErrorMsg?.length ? true : false}
          errorMessage={phoneInputErrorMsg}
        />
        <Spacer y={8} />
        <Input
          type='text'
          label={t("auth:LABEL_SMSCODE")}
          value={verifyCode}
          onValueChange={onCodeInputValChange}
          isInvalid={verifyCodeInputErrorMsg?.length ? true : false}
          errorMessage={verifyCodeInputErrorMsg}
        />
      </div>

      {/* <div className='grow'>spacer</div> */}
      <Spacer y={40} />
      <div className='pb-10 flex flex-col px-4'>
        {/* buttons block*/}
        <Button
          color='primary'
          isDisabled={!isFormValid()}
          size='lg'
          radius='full'
        >
          {t("auth:LOGIN_BTN")}
        </Button>
        {/* <Spacer y={3} />
        <Button className='bg-gray-400' isDisabled={!isFormValid()}>
          {t("auth:SIGNUP_BTN")}
        </Button> */}
      </div>
      <span className='text-xs text-gray-700 absolute bottom-3 left-1/2 translate-x-[-50%]'>
        {t("auth:COPY_RIGHT")}
      </span>
    </div>
  );
};

export default AuthPage;
