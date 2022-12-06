import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSignAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M12,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C12.00076,22,12.00038,22,12,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21.78101 11.87543l-2-2.5c-.18964-.23706-.47675-.375-.78027-.375H13v7h5.99969c.3042 0 .59192-.13824.78192-.37579l1.99939-2.49921C22.0733 12.76001 22.0733 12.24084 21.78101 11.87543zM11 4.00043H4.99896c-.30353 0-.59064.138-.78027.375l-2 2.5c-.2923.36542-.2923.88458 0 1.25l1.99939 2.49921C4.40808 10.86218 4.6958 11.00043 5 11.00043h6V4.00043z"
        ></path>
        <path
          className="uim-primary"
          d="M15,22H9c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h6c0.55229,0,1,0.44772,1,1S15.55229,22,15,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
