import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, hasBackIcon = true }) => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className='flex items-center w-full px-6 py-3'>
      {hasBackIcon ? (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className='cursor-pointer'
          onClick={back}
          size='lg'
        />
      ) : null}

      <div className='w-full text-center text-2xl font-medium'>{title}</div>
    </div>
  );
};

export default PageHeader;
