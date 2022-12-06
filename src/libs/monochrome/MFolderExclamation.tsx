import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFolderExclamation: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859a2.99737,2.99737,0,0,1,2.8462,2.05078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12 14.5a.99943.99943 0 0 1-1-1v-2a1 1 0 0 1 2 0v2A.99943.99943 0 0 1 12 14.5zM12 17.5a.99018.99018 0 0 1-.71-.29 1.16044 1.16044 0 0 1-.21-.33008A.9994.9994 0 0 1 11 16.5a1.39038 1.39038 0 0 1 .01953-.2002.65026.65026 0 0 1 .06055-.17968.74157.74157 0 0 1 .08984-.18067L11.29 15.79a.99819.99819 0 0 1 .89941-.27051.59545.59545 0 0 1 .19043.06055.73594.73594 0 0 1 .17969.08984c.04981.04.10059.08008.15039.12012a1.61105 1.61105 0 0 1 .12012.14941.77852.77852 0 0 1 .08984.18067.6165.6165 0 0 1 .05957.17968A1.26569 1.26569 0 0 1 13 16.5a.98989.98989 0 0 1-.07031.37988A1.4616 1.4616 0 0 1 12.71 17.21a1.4616 1.4616 0 0 1-.33008.21973A.98989.98989 0 0 1 12 17.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
