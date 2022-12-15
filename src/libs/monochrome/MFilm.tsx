import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFilm: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M6,6.99923H4v-3h2V6.99923z M6,10.99923H4v-2h2V10.99923z M4,17.99923h2v2H4V17.99923z M4,12.99923h2v3H4V12.99923z M20,6.99923h-2v-3h2V6.99923z M20,10.99923h-2v-2h2V10.99923z M18,17.99923h2v2h-2V17.99923z M18,12.99923h2v3h-2V12.99923z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20,1.99921H4c-1.10455,0-2,0.89545-2,2v16c0,1.10461,0.89545,2,2,2h16c1.10455,0,2-0.89539,2-2v-16C22,2.89465,21.10455,1.99921,20,1.99921z M6,19.99921H4v-2h2V19.99921z M6,15.99921H4v-3h2V15.99921z M6,10.99921H4v-2h2V10.99921z M6,6.99921H4v-3h2V6.99921z M16,18.99921c0,0.55231-0.44769,1-1,1H9c-0.55231,0-1-0.44769-1-1v-6h8V18.99921z M16,10.99921H8v-6c0-0.55225,0.44769-1,1-1h6c0.55231,0,1,0.44775,1,1V10.99921z M20,19.99921h-2v-2h2V19.99921z M20,15.99921h-2v-3h2V15.99921z M20,10.99921h-2v-2h2V10.99921z M20,6.99921h-2v-3h2V6.99921z"
      ></path>
      <path
        className="uim-quaternary"
        d="M15 3.99921H9c-.55231 0-1 .44775-1 1v6h8v-6C16 4.44696 15.55231 3.99921 15 3.99921zM8 18.99921c0 .55231.44769 1 1 1h6c.55231 0 1-.44769 1-1v-6H8V18.99921z"
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

export default MFilm;
