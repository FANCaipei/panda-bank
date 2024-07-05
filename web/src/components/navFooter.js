import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

const NavFooter = () => {
  const [menuItems] = useState([
    {
      icon: faChildReaching,
      path: "/home",
      code: "home",
    },
    {
      icon: faBuildingColumns,
      path: "/bank-setting",
      code: "bank-setting",
    },
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClick = useCallback(
    (targetPath) => {
      navigate(targetPath);
    },
    [navigate]
  );

  return (
    <div className='pb-4 px-5'>
      <div className='flex justify-around py-3 rounded-full backdrop-blur-md bg-stone-50/[0.8] shadow-md'>
        {menuItems.map((item) => {
          return (
            <div
              key={item.code}
              className={cn(
                "flex justify-center items-center p-3 rounded-full w-11 h-11",
                { "bg-white": location.pathname === item.path }
              )}
              onClick={() => onMenuClick(item.path)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                size='lg'
                className={cn(
                  location.pathname === item.path
                    ? "text-sky-400"
                    : "text-sky-950"
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavFooter;
