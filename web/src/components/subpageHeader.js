import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SubpageHeader = ({ title }) => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className='flex items-center w-full px-6 py-3'>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className='cursor-pointer'
        onClick={back}
        size='lg'
      />
      <div className='w-full text-center text-xl'>{title}</div>
    </div>
  );
};

export default SubpageHeader;
