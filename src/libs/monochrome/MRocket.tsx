import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRocket: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17.73657 14.62189l-2.426 2.23065a11.60327 11.60327 0 0 1-4.29847 2.36987l.64368 3.00318a1.0003 1.0003 0 0 0 1.46924.66162l3.90527-2.20264a3.03526 3.03526 0 0 0 1.375-3.30371zM7.26562 8.77588L9.35431 6.296l-2.6048-.62848A2.77711 2.77711 0 0 0 3.36279 7.0249L1.1626 10.9248A.99989.99989 0 0 0 1.82422 12.394l3.07275.65869A12.88652 12.88652 0 0 1 7.26562 8.77588zM16.73373 8.81626a1.5 1.5 0 1 0-1.5-1.5A1.50055 1.50055 0 0 0 16.73373 8.81626z"
      ></path>
      <path
        className="uim-tertiary"
        d="M22.60107,2.062a1.00088,1.00088,0,0,0-.71289-.71289A11.24875,11.24875,0,0,0,10.46924,4.97217L7.26562,8.77588A12.93634,12.93634,0,0,0,4.3418,15.48682a1.00031,1.00031,0,0,0,.28466.83642l3.1001,3.1001a.99941.99941,0,0,0,.707.293c.02881,0,.05762-.00147.08692-.00391a11.84707,11.84707,0,0,0,6.79-2.85986l3.66308-3.36816A11.20387,11.20387,0,0,0,22.60107,2.062ZM16.7337,8.81622a1.5,1.5,0,1,1,1.5-1.5A1.50054,1.50054,0,0,1,16.7337,8.81622Z"
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

export default MRocket;
