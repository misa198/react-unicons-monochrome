import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MVolume: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,20a1.00061,1.00061,0,0,1-.625-.21875L6.64941,16H3a.99943.99943,0,0,1-1-1V9A.99943.99943,0,0,1,3,8H6.64941L11.375,4.21875A1.00025,1.00025,0,0,1,13,5V19a.9993.9993,0,0,1-1,1Z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18.501,18.3623a.99995.99995,0,0,1-.64356-1.76562,6.00231,6.00231,0,0,0,.38574-8.83984.9999.9999,0,0,1,1.41407-1.41407,8.00064,8.00064,0,0,1-.51465,11.78516A.99536.99536,0,0,1,18.501,18.3623Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15.92969,15.29785a1,1,0,0,1-.64356-1.7666A1.99114,1.99114,0,0,0,16,12a2.01438,2.01438,0,0,0-.58594-1.41406.99989.99989,0,0,1,1.41406-1.41406,3.99974,3.99974,0,0,1-.25683,5.89257A.99968.99968,0,0,1,15.92969,15.29785Z"
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

export default MVolume;
