import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoneyStack: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M20,15.00018H4c-1.65613-0.00177-2.99817-1.34387-3-3v4c0.00183,1.65613,1.34387,2.99823,3,3h16c1.65613-0.00177,2.99817-1.34387,3-3v-4C22.99817,13.65631,21.65613,14.99841,20,15.00018z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20,19.00018H4c-1.65613-0.00177-2.99817-1.34387-3-3v4c0.00183,1.65613,1.34387,2.99823,3,3h16c1.65613-0.00177,2.99817-1.34387,3-3v-4C22.99817,17.65631,21.65613,18.99841,20,19.00018z"
      ></path>
      <circle cx="12" cy="8" r="2" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M20,1.00018H4c-1.65613,0.00183-2.99817,1.34393-3,3v8c0.00183,1.65613,1.34387,2.99823,3,3h16c1.65613-0.00177,2.99817-1.34387,3-3v-8C22.99817,2.34412,21.65613,1.00201,20,1.00018z M12,10c-1.10455,0-2-0.89545-2-2s0.89545-2,2-2s2,0.89545,2,2S13.10455,10,12,10z"
      ></path>
      <circle cx="6" cy="8" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="8" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MMoneyStack;
