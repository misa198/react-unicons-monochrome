import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHorizontalDistributionCenter: React.FC<Props> = ({
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
          d="M11,20H5c-0.55197,0.00031-0.99969-0.44689-1-0.99886C4,19.00076,4,19.00038,4,19V5C3.99969,4.44803,4.44689,4.00031,4.99886,4C4.99924,4,4.99962,4,5,4h6c0.55197-0.00031,0.99969,0.44689,1,0.99886C12,4.99924,12,4.99962,12,5v14c0.00031,0.55197-0.44689,0.99969-0.99886,1C11.00076,20,11.00038,20,11,20z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,19h-4c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V6c-0.00031-0.55197,0.44689-0.99969,0.99886-1C14.99924,5,14.99962,5,15,5h4c0.55197-0.00031,0.99969,0.44689,1,0.99886C20,5.99924,20,5.99962,20,6v12c0.00031,0.55197-0.44689,0.99969-0.99886,1C19.00076,19,19.00038,19,19,19z"
        ></path>
        <path
          className="uim-primary"
          d="M18 5V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H18zM9 4V3c0-.55231-.44769-1-1-1S7 2.44769 7 3v1H9zM7 20v1c0 .00037 0 .00073 0 .00116C7.00031 21.5531 7.44806 22.00031 8 22c.00037 0 .00073 0 .00116 0C8.5531 21.99969 9.00031 21.55194 9 21v-1H7zM16 19v2c0 .00037 0 .00073 0 .00116C16.00031 21.5531 16.44806 22.00031 17 22c.00037 0 .00073 0 .00116 0C17.5531 21.99969 18.00031 21.55194 18 21v-2H16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
