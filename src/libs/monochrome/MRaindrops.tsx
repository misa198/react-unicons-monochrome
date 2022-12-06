import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRaindrops: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12.5 22a4.004 4.004 0 0 1-4-4c0-3.44922 3.29688-5.73145 3.43749-5.82715a1.00471 1.00471 0 0 1 1.11817-.00488C13.19629 12.2627 16.5 14.50879 16.5 18A4.004 4.004 0 0 1 12.5 22zM6.5 12a4.004 4.004 0 0 1-4-4c0-3.44922 3.29688-5.73145 3.43749-5.82715A1.00473 1.00473 0 0 1 7.05566 2.168C7.19629 2.2627 10.5 4.50879 10.5 8A4.004 4.004 0 0 1 6.5 12zM17.5 12a4.004 4.004 0 0 1-4-4c0-3.44922 3.29688-5.73145 3.43749-5.82715A1.00473 1.00473 0 0 1 18.05566 2.168C18.19629 2.2627 21.5 4.50879 21.5 8A4.004 4.004 0 0 1 17.5 12z"
        ></path>
      </svg>
    </Wrapper>
  );
};
