import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMissedCall: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.48145,21.51172a2.58744,2.58744,0,0,1-1.541-.501c-.1543-.11426-.3125-.22168-.47363-.32519a8.33313,8.33313,0,0,0-.99707-.542,1.84264,1.84264,0,0,1-.94532-2.2998l.08887-.24414a10.4798,10.4798,0,0,0-5.22656,0l.08887.24512a1.84128,1.84128,0,0,1-.94336,2.29785,8.43691,8.43691,0,0,0-1.00293.54492c-.15723.10156-.31543.209-.46973.32324a2.67709,2.67709,0,0,1-3.459-.293L1.78711,18.9043A2.68873,2.68873,0,0,1,1.00586,16.833a2.72659,2.72659,0,0,1,1.05469-1.9834,16.24759,16.24759,0,0,1,19.87793,0,2.72436,2.72436,0,0,1,1.05566,1.9834,2.68873,2.68873,0,0,1-.78125,2.07129l-1.81348,1.81347A2.71443,2.71443,0,0,1,18.48145,21.51172Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,9.6543a2.99106,2.99106,0,0,1-2.12109-.875L5.293,4.19238A.99989.99989,0,0,1,6.707,2.77832L11.293,7.36426a1.0014,1.0014,0,0,0,1.41406-.001l4.58594-4.585A.99989.99989,0,1,1,18.707,4.19238L14.12109,8.77832A2.99374,2.99374,0,0,1,12,9.6543Z"
      ></path>
      <path
        className="uim-primary"
        d="M6,7.48535a.99942.99942,0,0,1-1-1v-3a.99943.99943,0,0,1,1-1H9a1,1,0,0,1,0,2H7v2A.99942.99942,0,0,1,6,7.48535Z"
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

export default MMissedCall;
