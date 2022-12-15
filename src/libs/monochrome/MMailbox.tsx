import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMailbox: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12 6V4h1c.55231 0 1-.44769 1-1s-.44769-1-1-1h-2c-.55231 0-1 .44769-1 1v3H12zM10 17v4c0 .55231.44769 1 1 1s1-.44769 1-1v-4H10z"
      ></path>
      <path
        className="uim-tertiary"
        d="M8,12H6c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S8.55229,12,8,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M17,6H7c-2.20807,0.0025-3.9975,1.79193-4,4v6c0,0.55231,0.44769,1,1,1h10c-0.55231,0-1-0.44769-1-1v-6C13,7.79083,14.79083,6,17,6z M8,12H6c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h2c0.55231,0,1,0.44769,1,1S8.55231,12,8,12z"
      ></path>
      <path
        className="uim-primary"
        d="M37,7L37,7c1.65685,0,3,1.34315,3,3v6l0,0h-6l0,0v-6C34,8.34315,35.34315,7,37,7z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20,17h-6c-0.55229,0-1-0.44772-1-1v-6c0-2.20914,1.79086-4,4-4s4,1.79086,4,4v6C21,16.55228,20.55228,17,20,17z"
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

export default MMailbox;
