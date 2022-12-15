import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHardHat: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,10c0.00281-2.70343-1.55548-5.16547-4-6.32001c-0.62964-0.30737-1.30518-0.51001-2-0.59998C12.60034,3.01294,12.19501,2.98615,11.78998,3C11.52502,3.00635,11.26086,3.03308,11,3.08002c-0.69641,0.10016-1.37189,0.31293-2,0.63C6.534,4.9751,4.98792,7.51843,5,10.28998V11h14V10z"
      ></path>
      <path
        className="uim-primary"
        d="M11,3.08V7c0,0.55228-0.44771,1-1,1S9,7.55228,9,7V3.71C9.62811,3.39297,10.30359,3.1802,11,3.08z M15,3.68V7c0,0.55228-0.44771,1-1,1s-1-0.44772-1-1V3.08C13.69485,3.16996,14.37038,3.37262,15,3.68z"
      ></path>
      <path
        className="uim-secondary"
        d="M5,11h14c1.10457,0,2,0.89543,2,2l0,0c0,1.10457-0.89543,2-2,2H5c-1.10457,0-2-0.89543-2-2l0,0C3,11.89543,3.89543,11,5,11z"
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

export default MHardHat;
