import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHorizontalDistributionLeft: React.FC<Props> = ({
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
          className="uim-primary"
          d="M15,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C15.00076,22,15.00038,22,15,22z M5,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886C4,21.00076,4,21.00038,4,21V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C5.00076,22,5.00038,22,5,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M11,4H6v16h5c0.00037,0,0.00073,0,0.00116,0C11.5531,19.99969,12.00031,19.55194,12,19V5c0-0.00037,0-0.00073,0-0.00116C11.99969,4.4469,11.55194,3.99969,11,4z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,5h-3v14h3c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18V6c0-0.00037,0-0.00073,0-0.00116C19.99969,5.4469,19.55194,4.99969,19,5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
