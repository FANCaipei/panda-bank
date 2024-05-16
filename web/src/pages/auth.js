import { Button, Input, Spacer } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const auth = useCallback(() => {
    // TODO: login or register
    navigate("/home");
  }, []);

  return (
    <div className='bg-emerald-600 flex flex-col h-full items-stretch'>
      {/* <div
        className='h-[180px] w-full bg-cover'
        style={{
          backgroundImage: `url(${window.location.origin}/assets/images/example.png)`,
          clipPath: "ellipse(250px 120px at center 60px)",
        }}
      >
        top image
      </div> */}
      <div className='grow text-4xl font-semibold flex justify-center items-center'>
        {t("auth:AUTH_PAGE_TITLE")}
      </div>
      <div className='bg-white rounded-tl-3xl rounded-tr-3xl px-3 pt-10 pb-8'>
        <Input
          type='text'
          size='lg'
          label={t("auth:LABEL_PHONE")}
          value={phone}
          onValueChange={onPhoneInputValChange}
          isInvalid={phoneInputErrorMsg?.length ? true : false}
          errorMessage={phoneInputErrorMsg}
        />
        <Spacer y={8} />
        <Input
          type='text'
          size='lg'
          label={t("auth:LABEL_SMSCODE")}
          value={verifyCode}
          onValueChange={onCodeInputValChange}
          isInvalid={verifyCodeInputErrorMsg?.length ? true : false}
          errorMessage={verifyCodeInputErrorMsg}
        />
        <Spacer y={24} />
        <Button
          color='primary'
          isDisabled={!isFormValid()}
          size='lg'
          fullWidth={true}
          radius='full'
          onClick={auth}
        >
          {t("auth:LOGIN_BTN")}
        </Button>
        <Spacer y={4} />
        <div className='text-xs text-gray-700 text-center w-full'>
          {t("auth:COPY_RIGHT")}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
