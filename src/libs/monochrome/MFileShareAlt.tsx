import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileShareAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M18.5,8.5l-7-7h-6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h10a3,3,0,0,0,3-3Z"
        ></path>
        <path className="uim-primary" d="M18.5,8.5h-5a2,2,0,0,1-2-2v-5Z"></path>
        <circle cx="18.5" cy="14.5" r="2" className="uim-primary"></circle>
        <circle cx="13.5" cy="17" r="2" className="uim-primary"></circle>
        <circle cx="18.5" cy="19.5" r="2" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M13.18066,18.09082a.99992.99992,0,0,1-.41894-1.9082l4.50683-2.07324a.99976.99976,0,1,1,.83594,1.8164L13.59766,17.999A.99347.99347,0,0,1,13.18066,18.09082Z"
        ></path>
        <path
          className="uim-primary"
          d="M17.68555 20.16406a.99346.99346 0 0 1-.417-.09179L12.76172 17.999a.99976.99976 0 1 1 .83594-1.8164l4.50683 2.07324a.99992.99992 0 0 1-.41894 1.9082zM8.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM12.5 13.5h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM8.5 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
