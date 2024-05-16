import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ex1Request } from "../requests/exampleRequest";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goPage1 = useCallback(() => {
    console.log("go page 1");
    navigate("/page1");
  }, [navigate]);

  useEffect(() => {
    ex1Request().then((resp) => {
      console.log("resp: ", resp);
    });
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-bold underline cursor-pointer'>Home Page</h2>
      <FontAwesomeIcon icon={faUser} size='2xl' />
      <ul>
        <li>
          <Button onClick={goPage1}>{t("DESC_PAGE_1")}</Button>
        </li>
        <li>page2</li>
      </ul>
      <div className='flex items-center w-full flex-wrap [&>*:nth-child(2n)]:lg:ml-[10px]'>
        {Array.from([1, 2, 3, 4, 5]).map((v) => (
          <span
            className='w-full bg-blue-300 px-[4px] py-[12px] mt-[8px] lg:w-[calc(50%_-_5px)]'
            key={v}
          >
            {v}
          </span>
        ))}
        <span></span>
      </div>
    </div>
  );
};

export default HomePage;
