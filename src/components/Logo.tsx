import { JSX } from "react";

type LogoProps = {
  height?: string;
  width?: string;
  url?: string;
};

const Logo = (props: LogoProps): JSX.Element => {
  return (
    <>
      <img
        src={`${props.url || "/images/hmsclientlogo.svg"}`}
        alt="logo"
        style={{
          height: props?.height || "70px",
          width: props?.width || "280px",
        }}
      />
    </>
  );
};

export default Logo;
