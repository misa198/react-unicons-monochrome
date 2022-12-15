import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20.5,13h-16c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V5c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v7c0.00014,0.55214-0.44734,0.99986-0.99948,1C20.50035,13,20.50017,13,20.5,13z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20.50055,13c-0.00018,0-0.00037,0-0.00055,0h-16c-0.55212,0.00012-0.99988-0.44733-1-0.99945V17c0.00183,1.65613,1.34387,2.99817,3,3h12c1.65613-0.00183,2.99817-1.34387,3-3v-5C21.50012,12.55212,21.05267,12.99988,20.50055,13z"
      ></path>
      <path
        className="uim-primary"
        d="M6.5 20c-.35254-.00037-.68579-.07269-1-.18463V21c0 .00018 0 .00037 0 .00055C5.50012 21.55267 5.94788 22.00012 6.5 22c.00018 0 .00037 0 .00055 0C7.05267 21.99988 7.50012 21.55212 7.5 21v-1H6.5zM18.5 20h-1v1c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1.18463C19.18579 19.92731 18.85254 19.99963 18.5 20zM8.5 17c-.26809.00332-.52542-.10534-.71-.2998C7.60052 16.51704 7.49551 16.26349 7.5 16c.00158-.06714.00827-.13407.02-.2002.01072-.06254.0308-.12312.05957-.17968.02196-.06396.05234-.12472.09033-.18067L7.79 15.29c.04744-.04309.0975-.08321.1499-.12012.05556-.03793.11601-.06815.17969-.08984.0566-.02928.11737-.0497.18017-.06055.19495-.04076.39775-.01959.58008.06055.12239.04836.23442.11964.33008.21.04.0498.08008.09961.11963.14941.03799.05595.06837.1167.09033.18067C9.44861 15.67675 9.46886 15.73729 9.48 15.7998 9.49149 15.86596 9.49818 15.93287 9.5 16 9.49622 16.55071 9.05071 16.99622 8.5 17zM16.5 17c-.26809.00332-.52542-.10534-.71-.2998C15.60452 16.51435 15.50024 16.26257 15.5 16c.00158-.06714.00827-.13407.02-.2002.01072-.06254.0308-.12312.05957-.17968.02196-.06396.05234-.12472.09033-.18067L15.79 15.29c.0971-.08827.20856-.15929.32959-.21.24343-.10059.51682-.10059.76025 0 .12118.0507.23281.12172.33008.21.04.0498.08008.09961.11963.14941.03799.05595.06837.1167.09033.18067.02871.05663.04894.11717.06006.17968C17.49146 15.86593 17.49816 15.93286 17.5 16 17.49622 16.55071 17.05071 16.99622 16.5 17zM13.5 7h-2c-.55229 0-1-.44772-1-1s.44771-1 1-1h2c.55229 0 1 .44772 1 1S14.05229 7 13.5 7z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MBus;
