import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFolderNetwork: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="19" r="2" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M10 19c0-.36615.10559-.70483.2774-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h7.2774C10.10559 19.70483 10 19.36615 10 19zM21 18h-7.2774C13.89441 18.29517 14 18.63385 14 19s-.10559.70483-.2774 1H21c.55231 0 1-.44769 1-1S21.55231 18 21 18z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16.66691,14.00043h-9.334c-1.28813-0.00178-2.33177-1.04587-2.333-2.334v-7.333c0.00165-1.2878,1.04521-2.33135,2.333-2.333H10.372c1.00452-0.00108,1.8967,0.6416,2.21386,1.59473l0.13477,0.40527h3.94629c1.28779,0.00165,2.33135,1.0452,2.333,2.333v5.333C18.99869,12.95456,17.95504,13.99865,16.66691,14.00043z"
      ></path>
      <path
        className="uim-primary"
        d="M12,17c0.36615,0,0.70483,0.10559,1,0.2774v-3.27698h-2v3.27698C11.29517,17.10559,11.63385,17,12,17z"
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

export default MFolderNetwork;
