import cn from "classnames";

const HEADER_HEIGHT = "h-16";
const CONTENT_PADDING_TOP = "pt-16";
const FOOTER_HEIGHT = "h-12";
const CONTENT_PADDING_BOTTOM = "pb-12";

const ContentPage = ({ header, footer, content }) => {
  return (
    <div className='h-screen relative w-full'>
      <div
        className={cn(
          "w-full",
          "absolute",
          "top-0",
          header != null ? HEADER_HEIGHT : "h-0"
        )}
      >
        {header}
      </div>
      <div
        className={cn(
          "w-full",
          header != null ? CONTENT_PADDING_TOP : "pt-0",
          footer != null ? CONTENT_PADDING_BOTTOM : "pb-0"
        )}
      >
        {content}
      </div>
      <div
        className={cn(
          "w-full",
          "absolute",
          "bottom-0",
          footer != null ? FOOTER_HEIGHT : "h-0"
        )}
      >
        {footer}
      </div>
    </div>
  );
};

export default ContentPage;
