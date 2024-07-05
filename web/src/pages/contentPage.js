import cn from "classnames";
import { useEffect, useRef, useState } from "react";

const ContentPage = ({ header, footer, content }) => {
  const footerRef = useRef();
  const headerRef = useRef();
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className='h-screen relative w-full bg-gray-100'>
      <div className={cn("w-full", "absolute", "top-0")} ref={headerRef}>
        {header}
      </div>
      <div
        className={cn("w-full", "h-screen")}
        style={{
          paddingTop: `${headerHeight}px`,
          paddingBottom: `${footerHeight}px`,
        }}
      >
        {content}
      </div>
      <div className={cn("w-full", "absolute", "bottom-0")} ref={footerRef}>
        {footer}
      </div>
    </div>
  );
};

export default ContentPage;
