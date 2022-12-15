import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoneyBill: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,5.00018H4c-1.65613,0.00183-2.99817,1.34393-3,3v8c0.00183,1.65613,1.34387,2.99823,3,3h16c1.65613-0.00177,2.99817-1.34387,3-3v-8C22.99817,6.34412,21.65613,5.00201,20,5.00018z M11.99976,15.00214c-1.65808,0-3.0022-1.34418-3.0022-3.0022c0-1.65808,1.34412-3.00226,3.0022-3.00226s3.0022,1.34418,3.0022,3.00226C15.00195,13.65796,13.65784,15.00214,11.99976,15.00214z"
      ></path>
      <circle cx="6" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="12" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="12" r="3.002" className="uim-quaternary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MMoneyBill;
