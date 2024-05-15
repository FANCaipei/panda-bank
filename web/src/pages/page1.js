import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LineChart from "../components/lineChart";

const Page1 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <h2>Page1</h2>
      <button onClick={goBack}>{t("TITLE_BACK")}</button>
      <ul>
        <li>xxx</li>
        <li>jjj</li>
      </ul>

      <LineChart />
    </div>
  );
};

export default Page1;
