import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGrinTongueWinkAlt: React.FC<Props> = ({
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
          d="M12,2C6.47717,2,2,6.47717,2,12s4.47717,10,10,10s10-4.47717,10-10S17.52283,2,12,2z M15,14v1c-0.00183,1.65613-1.34387,2.99817-3,3c-1.65613-0.00183-2.99817-1.34387-3-3v-1c-0.00031-0.55194,0.4469-0.99969,0.99884-1C9.99927,13,9.99963,13,10,13h4c0.55194-0.00031,0.99969,0.4469,1,0.99884C15,13.99927,15,13.99963,15,14z"
        ></path>
        <path
          className="uim-primary"
          d="M9.91406,10.83594c-0.26527,0.0003-0.51971-0.10515-0.707-0.293c-0.39754-0.37305-1.01652-0.37305-1.41406,0c-0.39047,0.39049-1.02357,0.3905-1.41406,0.00003C5.98845,10.1525,5.98844,9.5194,6.37891,9.12891c1.18718-1.13282,3.055-1.13282,4.24218,0c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L9.91406,10.83594z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <path
          className="uim-secondary"
          d="M12,18c-1.65611-0.00181-2.99819-1.34389-3-3v-1c-0.00031-0.55197,0.44689-0.99969,0.99886-1C9.99924,13,9.99962,13,10,13h4c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v1C14.99819,16.65611,13.65611,17.99819,12,18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
