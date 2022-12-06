import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMonitorHeartRate: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M20,5c-0.00073-0.552-0.448-0.99927-1-1H5C4.448,4.00073,4.00073,4.448,4,5v10h16V5z"
        ></path>
        <path
          className="uim-primary"
          d="M20,8h-4.5c-0.2652,0.00006-0.51947,0.10547-0.70697,0.29303l-1.24414,1.24408l-2.79645-3.19574c-0.18225-0.20819-0.44263-0.3316-0.71924-0.34082C9.75598,5.98737,9.48639,6.09387,9.29303,6.29303L7.58594,8H4v2h4c0.2652-0.00006,0.51947-0.10547,0.70697-0.29303l1.2442-1.24408l2.79639,3.1958c0.18231,0.20819,0.44269,0.3316,0.71924,0.34082L13.5,12c0.2652,0,0.51959-0.10541,0.70703-0.29303L15.91406,10H20V8z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,2H5C3.34387,2.00183,2.00183,3.34387,2,5v11v3c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-3V5C21.99817,3.34387,20.65613,2.00183,19,2z M4,5c0.00073-0.552,0.448-0.99927,1-1h14c0.552,0.00073,0.99927,0.448,1,1v10H4V5z"
        ></path>
        <circle cx="5" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="18" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
