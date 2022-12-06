import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSearchPlus: React.FC<Props> = ({
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
          d="M11,18c-3.86599,0-7-3.13401-7-7s3.13401-7,7-7s7,3.13401,7,7C17.99565,14.86419,14.86419,17.99565,11,18z"
        ></path>
        <path
          className="uim-tertiary"
          d="M11,2c-4.97058,0-9,4.02942-9,9s4.02942,9,9,9s9-4.02942,9-9C19.99457,6.03168,15.96832,2.00543,11,2z M11,18c-3.86597,0-7-3.13403-7-7s3.13403-7,7-7s7,3.13403,7,7C17.99567,14.8642,14.8642,17.99567,11,18z"
        ></path>
        <path
          className="uim-primary"
          d="M21.70752 20.29333l-3.67963-3.67963c-.41785.52234-.89185.99634-1.41418 1.41418l3.67963 3.67963c.3905.39056 1.02368.39056 1.41418 0C22.09808 21.31702 22.09808 20.68384 21.70752 20.29333zM14 10h-2V8c0-.55228-.44771-1-1-1s-1 .44772-1 1v2H8c-.55228 0-1 .44771-1 1s.44772 1 1 1h2v2c0 .55229.44771 1 1 1s1-.44771 1-1v-2h2c.55229 0 1-.44771 1-1S14.55229 10 14 10z"
        ></path>
      </svg>
    </Wrapper>
  );
};
