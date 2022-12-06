import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSuitcaseAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M22,13H2V9c0-1.65685,1.34315-3,3-3h14c1.65685,0,3,1.34315,3,3V13z"
        ></path>
        <path
          className="uim-quaternary"
          d="M2,18c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-5H2V18z"
        ></path>
        <path
          className="uim-primary"
          d="M10 6V5h4v1h2V5c-.0014-1.104-.896-1.9986-2-2h-4C8.896 3.0014 8.0014 3.896 8 5v1H10zM9 15c-.55197.00031-.99969-.44689-1-.99886C8 14.00076 8 14.00038 8 14v-2c0-.55229.44771-1 1-1s1 .44771 1 1v2c.00031.55197-.44689.99969-.99886 1C9.00076 15 9.00038 15 9 15zM15 15c-.55197.00031-.99969-.44689-1-.99886 0-.00038 0-.00076 0-.00114v-2c0-.55229.44771-1 1-1s1 .44771 1 1v2c.00031.55197-.44689.99969-.99886 1C15.00076 15 15.00038 15 15 15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
