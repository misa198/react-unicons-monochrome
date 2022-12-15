import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentImage: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M22,12c-0.00355,5.52138-4.47862,9.99645-10,10H3c-0.40478,0.00149-0.76945-0.24426-0.92-0.62c-0.15598-0.37246-0.0732-0.80215,0.21-1.09l1.97-1.97C2.79994,16.53724,2.00146,14.30434,2,12C2,6.47715,6.47715,2,12,2S22,6.47715,22,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M10.53,13.46l-0.71-0.7l-0.88-0.87c-1.17872-1.1478-3.05588-1.15223-4.24-0.01L2.27,14.3c0.34376,1.47578,1.02492,2.85179,1.99,4.02l-1.97,1.97c-0.2832,0.28785-0.36598,0.71754-0.21,1.09C2.23055,21.75574,2.59523,22.0015,3,22h0.41l7.12-7.12c0.18653-0.18919,0.29076-0.4444,0.29-0.71008C10.81806,13.90483,10.71422,13.65064,10.53,13.46z"
      ></path>
      <path
        className="uim-primary"
        d="M16.94,9.89c-1.17872-1.1478-3.05587-1.15223-4.24-0.01l-8.44,8.44007L2.29,20.29c-0.2832,0.28785-0.36598,0.71754-0.21,1.09C2.23055,21.75574,2.59523,22.0015,3,22h9c4.5257-0.00939,8.48393-3.04977,9.66-7.42L16.94,9.89z"
      ></path>
      <path
        className="uim-tertiary"
        d="M4.70001,11.88c1.18408-1.14221,3.06128-1.13782,4.23999,0.01001l0.88,0.87l2.88-2.88c1.18414-1.14221,3.06128-1.13782,4.23999,0.01001l4.71344,4.68353c0.79639-2.99738,0.2016-6.31927-1.91138-8.90387c-3.49579-4.27606-9.79614-4.90863-14.0722-1.41284c-3.05878,2.50061-4.2417,6.43439-3.39435,10.03766L4.70001,11.88z"
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

export default MCommentImage;
