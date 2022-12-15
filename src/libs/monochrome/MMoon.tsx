import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoon: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12.144,21.72852A10.13672,10.13672,0,0,1,7.94727,2.36133,1.00016,1.00016,0,0,1,9.332,3.51367a8.112,8.112,0,0,0,7.8916,10.11817,8.07678,8.07678,0,0,0,3.3628-.73243.99977.99977,0,0,1,1.38378,1.15332A10.119,10.119,0,0,1,12.144,21.72852Z"
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

export default MMoon;
