import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTwitterAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M20.47513,7.80461c.01029.18508.01029.37017.01029.545a11.885,11.885,0,0,1-.49361,3.36242A11.72882,11.72882,0,0,1,8.48538,20.3599a11.90085,11.90085,0,0,1-6.46784-1.90235,8.15161,8.15161,0,0,0,1.0077.06169,8.45,8.45,0,0,0,5.234-1.80978,4.22346,4.22346,0,0,1-3.93832-2.92027,5.0398,5.0398,0,0,0,.7918.072,4.03986,4.03986,0,0,0,1.12078-.15427A4.19949,4.19949,0,0,1,2.86074,9.892a1.65939,1.65939,0,0,1-.02059-.31876V9.52182a4.16674,4.16674,0,0,0,1.91258.52443,4.20207,4.20207,0,0,1-1.87141-3.5064,4.27253,4.27253,0,0,1,.56554-2.12854A11.96764,11.96764,0,0,0,12.14605,8.8226a4.21852,4.21852,0,0,1,7.18771-3.84575,8.4426,8.4426,0,0,0,2.68378-1.02828A4.978,4.978,0,0,1,20.47513,7.80461Z"
        data-name="Brand Logos"
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

export default MTwitterAlt;
