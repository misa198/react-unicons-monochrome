import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShop: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M20,4H4.30273c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1H20c0.55228,0,1,0.44772,1,1S20.55228,4,20,4z M15,19v3H9v-3c0-1.65685,1.34315-3,3-3l0,0C13.65685,16,15,17.34315,15,19z M4,12L4,12c-1.10457,0-2-0.89543-2-2V7c0-0.55228,0.44772-1,1-1h3v4C6,11.10457,5.10457,12,4,12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8,12L8,12c-1.10457,0-2-0.89543-2-2V6h4v4C10,11.10457,9.10457,12,8,12z"
      ></path>
      <path
        className="uim-primary"
        d="M12,12L12,12c-1.10457,0-2-0.89543-2-2V6h4v4C14,11.10457,13.10457,12,12,12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16,12L16,12c-1.10457,0-2-0.89543-2-2V6h4v4C18,11.10457,17.10457,12,16,12z"
      ></path>
      <path
        className="uim-primary"
        d="M20,12L20,12c-1.10457,0-2-0.89543-2-2V6h3c0.55228,0,1,0.44772,1,1v3C22,11.10457,21.10457,12,20,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,10c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2v9c0,0.55231,0.44769,1,1,1h4v-3c0-1.65686,1.34314-3,3-3s3,1.34314,3,3v3h4c0.55231,0,1-0.44769,1-1v-9C18.89545,12,18,11.10455,18,10z"
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

export default MShop;
