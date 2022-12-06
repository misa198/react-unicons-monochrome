import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeUpload: React.FC<Props> = ({
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
          d="M21.2,7.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,15.29398,9.38198,15.29199,9.38,15.29L1.8,7.71C2.29464,6.66676,3.34544,6.00126,4.5,6h14C19.65456,6.00126,20.70536,6.66676,21.2,7.71z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.20001,7.71002L13.62,15.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,15.29401,9.38196,15.29199,9.38,15.28998L1.79999,7.71002C1.60345,8.11169,1.50085,8.5528,1.5,9v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V9C21.49915,8.5528,21.39655,8.11169,21.20001,7.71002z"
        ></path>
        <path
          className="uim-primary"
          d="M18.5,12c-0.55228,0-1-0.44771-1-1V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v8C19.5,11.55229,19.05228,12,18.5,12z"
        ></path>
        <path
          className="uim-primary"
          d="M21.5,7c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L18.5,4.41406L16.207,6.707c-0.394,0.38693-1.02707,0.3812-1.414-0.01281c-0.38198-0.38896-0.38198-1.01223,0-1.40119l3-3c0.39027-0.39048,1.02319-0.39065,1.41368-0.00038c0.00013,0.00013,0.00026,0.00026,0.00039,0.00038l3,3c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C22.01936,6.89465,21.76511,6.99996,21.5,7z"
        ></path>
      </svg>
    </Wrapper>
  );
};
