import { useState } from "react";
import { getAvatarImg } from "../../../utils/user";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeHeader = () => {
  const [kidAvatar] = useState(() => {
    return getAvatarImg("giraffe");
  });

  return (
    <div className='px-5 py-5 w-full flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={kidAvatar} className='w-8 h-8' alt='' />
        <span className='ml-2 text-lg'>Kid1</span>
      </div>
      {/* TODO: click to vip page */}
      <FontAwesomeIcon icon={faBars} size='lg' />
    </div>
  );
};

export default HomeHeader;
