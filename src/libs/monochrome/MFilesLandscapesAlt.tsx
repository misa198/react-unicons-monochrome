import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFilesLandscapesAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M23,9.99948l-7-7H8c-1.65685,0-3,1.34315-3,3v8c0,1.65685,1.34314,3,3,3c0,0,0,0,0,0h12c1.65685,0,3-1.34315,3-3V9.99948z"
      ></path>
      <path
        className="uim-quaternary"
        d="M8,16.99945c-1.65686,0-3-1.34314-3-3v-7H4c-1.65466-0.0022-2.9978,1.3374-3,2.992c0,0.00269,0,0.00537,0,0.008v8c-0.0022,1.65466,1.33734,2.9978,2.992,3c0.00269,0.00006,0.00531,0.00006,0.008,0h12c1.65466,0.00226,2.9978-1.33734,3-2.99194c0-0.00269,0-0.00537,0-0.00806v-1H8z"
      ></path>
      <path
        className="uim-primary"
        d="M23,9.99948h-5c-1.10457,0-2-0.89543-2-2v-5L23,9.99948z M14,13h-4c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h4c0.55229,0,1,0.44771,1,1S14.55229,13,14,13z M12,9h-2C9.44771,9,9,8.55229,9,8s0.44771-1,1-1h2c0.55229,0,1,0.44772,1,1S12.55229,9,12,9z"
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

export default MFilesLandscapesAlt;
