import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWheelBarrow: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M15.83008,8H6.16992a1.00014,1.00014,0,0,1-.70605-1.708L8.88379,2.88281a3.05059,3.05059,0,0,1,4.23828.00489L16.53613,6.292A1.00014,1.00014,0,0,1,15.83008,8Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.96191 22.00488a2.94428 2.94428 0 0 1-2.46386-1.34961L9.22754 14.24512a1 1 0 1 1 1.66406-1.10938l4.27051 6.41016a1.00126 1.00126 0 0 0 1.82129-.72363l-.96-5.70606a1.0479 1.0479 0 0 1-.01367-.166 1.00031 1.00031 0 0 1 1.99414-.11817l.95214 5.66211a2.953 2.953 0 0 1-1.86132 3.292A3.09077 3.09077 0 0 1 15.96191 22.00488zM5.88867 18.21a.9999.9999 0 0 1-.89258-1.44922L6.63672 13.501a1.00012 1.00012 0 0 1 1.78711.89843L6.7832 17.65918A.99965.99965 0 0 1 5.88867 18.21z"
        ></path>
        <path
          className="uim-tertiary"
          d="M17.001,14a.97225.97225,0,0,1-.19727-.01953,1,1,0,0,1-.78418-1.17676l2-10A1.00066,1.00066,0,0,1,19,2h2a1,1,0,0,1,0,2H19.81934l-1.83887,9.19629A.99958.99958,0,0,1,17.001,14Z"
        ></path>
        <path
          className="uim-primary"
          d="M7 15a.99966.99966 0 0 1-.86816-.50391l-4-7A.99961.99961 0 0 1 3 6H18.2002a1 1 0 0 1 .98046 1.19629l-1.20019 6a1.001 1.001 0 0 1-.88184.79883l-9.998 1C7.06738 14.99805 7.0332 15 7 15zm10-2h0zM5 22a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 5 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
