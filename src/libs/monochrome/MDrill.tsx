import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDrill: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19 12h-5v7c0 .00037 0 .00073 0 .00116C14.00031 19.5531 14.44806 20.00031 15 20h2c1.65613-.00183 2.99817-1.34387 3-3v-5.18463C19.68579 11.92731 19.35254 11.99963 19 12zM9 12c-.55194.00031-.99969-.4469-1-.99884V13c0 .00037 0 .00073 0 .00116C8.00031 13.5531 8.44806 14.00031 9 14c.00037 0 .00073 0 .00116 0C9.5531 13.99969 10.00031 13.55194 10 13v-1H9z"
      ></path>
      <path
        className="uim-primary"
        d="M8,7H3C2.44769,7,2,7.44769,2,8s0.44769,1,1,1h5V7z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16,4v3c0,0.55228,0.44772,1,1,1s1-0.44772,1-1V4H16z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,4h-1v3c0,0.55231-0.44769,1-1,1s-1-0.44769-1-1V4H9C8.99963,4,8.99927,4,8.99884,4C8.4469,4.00031,7.99969,4.44806,8,5v6c0,0.00037,0,0.00073,0,0.00116C8.00031,11.5531,8.44806,12.00031,9,12h10c1.65613-0.00183,2.99817-1.34387,3-3V7C21.99817,5.34387,20.65613,4.00183,19,4z"
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

export default MDrill;
