import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBasketballHoop: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M20,2H4C2.34314,2,1,3.34314,1,5v8c0,1.65686,1.34314,3,3,3h3v-4H6c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h2c0.55194-0.00031,0.99969,0.4469,1,0.99884C9,10.99927,9,10.99963,9,11v3h2v-3c0-0.55231,0.44769-1,1-1s1,0.44769,1,1v3h2v-3c-0.00031-0.55194,0.4469-0.99969,0.99884-1c0.00043,0,0.00079,0,0.00116,0h2c0.55231,0,1,0.44769,1,1s-0.44769,1-1,1h-1v4h3c1.65686,0,3-1.34314,3-3V5C23,3.34314,21.65686,2,20,2z"
      ></path>
      <path
        className="uim-primary"
        d="M14,8h-4C9.44771,8,9,7.55228,9,7s0.44771-1,1-1h4c0.55229,0,1,0.44772,1,1S14.55229,8,14,8z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18,10h-2c-0.00037,0-0.00073,0-0.00116,0C15.4469,10.00031,14.99969,10.44806,15,11v3h-2v-3c0-0.55231-0.44769-1-1-1s-1,0.44769-1,1v3H9v-3c0-0.00037,0-0.00073,0-0.00116C8.99969,10.4469,8.55194,9.99969,8,10H6c-0.55231,0-1,0.44769-1,1s0.44769,1,1,1h1v9c0,0.00037,0,0.00073,0,0.00116C7.00031,21.5531,7.44806,22.00031,8,22c0.00037,0,0.00073,0,0.00116,0C8.5531,21.99969,9.00031,21.55194,9,21v-1h2v1c0,0.00037,0,0.00073,0,0.00116C11.00031,21.5531,11.44806,22.00031,12,22c0.00037,0,0.00073,0,0.00116,0C12.5531,21.99969,13.00031,21.55194,13,21v-1h2v1c0,0.00037,0,0.00073,0,0.00116C15.00031,21.5531,15.44806,22.00031,16,22c0.00037,0,0.00073,0,0.00116,0C16.5531,21.99969,17.00031,21.55194,17,21v-9h1c0.55231,0,1-0.44769,1-1S18.55231,10,18,10z M9,18v-2h2v2H9z M13,18v-2h2v2H13z"
      ></path>
      <path
        className="uim-primary"
        d="M18,12H6c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h12c0.55228,0,1,0.44771,1,1S18.55228,12,18,12z"
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

export default MBasketballHoop;
