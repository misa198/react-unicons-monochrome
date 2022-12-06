import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBusAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M18.5,2h-12c-1.65613,0.00183-2.99817,1.34387-3,3v12c0.00183,1.65613,1.34387,2.99817,3,3h12c1.65613-0.00183,2.99817-1.34387,3-3V5C21.49817,3.34387,20.15613,2.00183,18.5,2z M11.5,13h-5c-0.55231,0-1-0.44769-1-1V8c0-0.55231,0.44769-1,1-1h5V13z M19.5,12c0,0.55231-0.44769,1-1,1h-5V7h5c0.55231,0,1,0.44769,1,1V12z"
        ></path>
        <path
          className="uim-primary"
          d="M18.5 20h-1v1c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1.18463C19.18579 19.92731 18.85254 19.99963 18.5 20zM6.5 20c-.35254-.00037-.68579-.07269-1-.18463V21c0 .00018 0 .00037 0 .00055C5.50012 21.55267 5.94788 22.00012 6.5 22c.00018 0 .00037 0 .00055 0C7.05267 21.99988 7.50012 21.55212 7.5 21v-1H6.5zM8.5 17c-.26638-.00507-.5206-.11242-.71-.2998C7.60052 16.51704 7.49551 16.26349 7.5 16c.00158-.06714.00827-.13407.02-.2002.01072-.06254.0308-.12312.05957-.17968.02196-.06396.05234-.12472.09033-.18067C7.70678 15.38718 7.74689 15.33726 7.79 15.29c.2393-.23595.58032-.33737.90967-.27051.0628.01084.12357.03127.18017.06055.06388.02158.1245.05181.18018.08984C9.11226 15.20703 9.16234 15.24714 9.21 15.29c.04296.04725.08292.09715.11963.14941.03799.05595.06837.1167.09033.18067.0287.05664.04893.1172.06004.17972C9.49149 15.86596 9.49818 15.93287 9.5 16 9.49622 16.55071 9.05071 16.99622 8.5 17zM16.5 17c-.26638-.00507-.5206-.11242-.71-.2998C15.60052 16.51704 15.49551 16.26349 15.5 16c.00158-.06714.00827-.13407.02-.2002.01072-.06254.0308-.12312.05957-.17968.02196-.06396.05234-.12472.09033-.18067.03688-.05227.07699-.10219.1201-.14945.2393-.23595.58032-.33737.90967-.27051.0628.01084.12357.03127.18017.06055.06388.02158.1245.05181.18018.08984.05224.03715.10231.07726.14998.12012.04296.04725.08292.09715.11963.14941.03799.05595.06837.1167.09033.18067.02871.05663.04894.11717.06006.17968C17.49151 15.86594 17.49819 15.93286 17.5 16 17.49622 16.55071 17.05071 16.99622 16.5 17z"
        ></path>
        <g>
          <path
            className="uim-quaternary"
            d="M11.5 7h-5c-.55231 0-1 .44769-1 1v4c0 .55231.44769 1 1 1h5V7zM18.5 7h-5v6h5c.55231 0 1-.44769 1-1V8C19.5 7.44769 19.05231 7 18.5 7z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};