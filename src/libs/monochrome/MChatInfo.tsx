import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MChatInfo: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11.99978,22h-8a.99991.99991,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,11.99978,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 11a.99943.99943 0 0 1-1-1V6a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 20 11zM20 4a.99018.99018 0 0 1-.71-.29 1.16044 1.16044 0 0 1-.21-.33008A.9994.9994 0 0 1 19 3a1.02776 1.02776 0 0 1 .29-.71 1.03453 1.03453 0 0 1 1.08984-.21.73594.73594 0 0 1 .17969.08984A1.61848 1.61848 0 0 1 20.71 2.29 1.0321 1.0321 0 0 1 21 3a.9994.9994 0 0 1-.08008.37988 1.16044 1.16044 0 0 1-.21.33008A.99349.99349 0 0 1 20 4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
