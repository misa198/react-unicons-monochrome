import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBuilding: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M13,21H9v-6c-0.00031-0.55197,0.44689-0.99969,0.99886-1C9.99924,14,9.99962,14,10,14h4c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6H13z M10,12H9c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1S10.55229,12,10,12z M10,8H9C8.44771,8,8,7.55228,8,7s0.44771-1,1-1h1c0.55229,0,1,0.44772,1,1S10.55229,8,10,8z M15,8h-1c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h1c0.55229,0,1,0.44772,1,1S15.55229,8,15,8z M15,12h-1c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1S15.55229,12,15,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,2H5C4.99963,2,4.99927,2,4.99884,2C4.4469,2.00031,3.99969,2.44806,4,3v18c0,0.00037,0,0.00073,0,0.00116C4.00031,21.5531,4.44806,22.00031,5,22h14c0.00037,0,0.00073,0,0.00116,0C19.5531,21.99969,20.00031,21.55194,20,21V3c0-0.00037,0-0.00073,0-0.00116C19.99969,2.4469,19.55194,1.99969,19,2z M9,6h1c0.55231,0,1,0.44769,1,1s-0.44769,1-1,1H9C8.44769,8,8,7.55231,8,7S8.44769,6,9,6z M8,11c0-0.55231,0.44769-1,1-1h1c0.55231,0,1,0.44769,1,1s-0.44769,1-1,1H9C8.44769,12,8,11.55231,8,11z M15,15v6h-2H9v-6c-0.00031-0.55194,0.4469-0.99969,0.99884-1C9.99927,14,9.99963,14,10,14h4c0.55194-0.00031,0.99969,0.4469,1,0.99884C15,14.99927,15,14.99963,15,15z M15,12h-1c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h1c0.55231,0,1,0.44769,1,1S15.55231,12,15,12z M15,8h-1c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h1c0.55231,0,1,0.44769,1,1S15.55231,8,15,8z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22H3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,22,21,22z"
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

export default MBuilding;
