import { useState } from "react";
import { getAvatarImg } from "../../../utils/user";

const HomeHeader = () => {
  const [kidAvatar] = useState(() => {
    return getAvatarImg("giraffe");
  });

  return (
    <div className='px-5 py-5 h-full flex items-center'>
      <img src={kidAvatar} className='w-8 h-8' alt='' />
      <span className='ml-2 text-lg'>Kid1</span>
    </div>
  );
};

export default HomeHeader;
