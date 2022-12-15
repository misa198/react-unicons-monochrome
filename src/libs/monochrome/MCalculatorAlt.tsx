import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCalculatorAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,12.0001H2v-7c0-1.65685,1.34315-3,3-3h7V12.0001z"
      ></path>
      <path
        className="uim-quaternary"
        d="M22,12.0001H12v-10h7c1.65685,0,3,1.34315,3,3V12.0001z M12,22.0001H5c-1.65685,0-3-1.34315-3-3v-7h10V22.0001z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,22.0001h-7v-10h10v7C22,20.65695,20.65685,22.0001,19,22.0001z"
      ></path>
      <path
        className="uim-primary"
        d="M8.5,6.0001H8v-0.5c0-0.55228-0.44772-1-1-1s-1,0.44772-1,1v0.5H5.5c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1H6v0.5c0,0.55229,0.44772,1,1,1s1-0.44771,1-1v-0.5h0.5c0.55229,0,1-0.44772,1-1S9.05229,6.0001,8.5,6.0001z M18.5,8.0001h-3c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h3c0.55228,0,1,0.44772,1,1S19.05228,8.0001,18.5,8.0001z M18.5,16.5001h-3c-0.55229,0-1-0.44772-1-1c0-0.55229,0.44771-1,1-1h3c0.55228,0,1,0.44771,1,1C19.5,16.05238,19.05228,16.5001,18.5,16.5001z M18.5,19.5001h-3c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h3c0.55228,0,1,0.44772,1,1S19.05228,19.5001,18.5,19.5001z M8.41425,17.0001l0.7069-0.707c0.39049-0.39051,0.39048-1.02363-0.00003-1.41412S8.09749,14.48849,7.707,14.879l-0.70691,0.707l-0.707-0.707c-0.39048-0.39052-1.02361-0.39054-1.41412-0.00006c-0.39051,0.39048-0.39054,1.0236-0.00006,1.41412l0.707,0.707l-0.707,0.707c-0.3905,0.39051-0.39049,1.02365,0.00002,1.41416c0.39051,0.3905,1.02366,0.39049,1.41416-0.00002l0.707-0.707l0.70691,0.707c0.39138,0.38962,1.0245,0.3882,1.41413-0.00318c0.38836-0.39011,0.38838-1.02074,0.00005-1.41089L8.41425,17.0001z"
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

export default MCalculatorAlt;
