import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShoppingBasket: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,12H5c-0.32349,0-0.62915-0.06445-0.92102-0.15918l0.74573,7.45801C4.97424,20.83441,6.26721,22.00427,7.81006,22h8.37988c1.54285,0.00427,2.83582-1.16559,2.98535-2.70117l0.74573-7.45801C19.62915,11.93555,19.32349,12,19,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,12H5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3h14c1.65685,0,3,1.34315,3,3S20.65685,12,19,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,12H5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3h14c1.65685,0,3,1.34315,3,3S20.65685,12,19,12z"
      ></path>
      <path
        className="uim-primary"
        d="M15.38184 6h2.23633l-1.72363-3.44727c-.24738-.4917-.84558-.6911-1.3385-.44617-.49463.24579-.69635.84607-.45056 1.3407L15.38184 6zM8.61816 6l1.27637-2.55273C9.89526 3.4458 9.896 3.44434 9.89673 3.44287c.24579-.49463.04407-1.09485-.45056-1.3407-.49463-.24579-1.09491-.04407-1.3407.45056L6.38184 6H8.61816zM10 14c-.55231 0-1 .44769-1 1v2c0 .00018 0 .00037 0 .00055C9.00012 17.55267 9.44788 18.00012 10 18c.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2C11 14.44769 10.55231 14 10 14zM14 14c-.55231 0-1 .44769-1 1v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2C15 14.44769 14.55231 14 14 14z"
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

export default MShoppingBasket;
