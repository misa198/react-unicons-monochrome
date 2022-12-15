import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MForward: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12.666,18.52051c-1.47167-0.00543-2.66273-1.19825-2.666-2.66992V8.14941c0.0003-1.47267,1.19438-2.66627,2.66705-2.66597C13.13503,5.48353,13.59474,5.60679,14,5.84082l6.667,3.84961c1.27554,0.7369,1.7122,2.3683,0.9753,3.64384c-0.23397,0.40499-0.57031,0.74134-0.9753,0.9753l0,0L14,18.15918C13.5949,18.39496,13.13472,18.5196,12.666,18.52051z"
      ></path>
      <path
        className="uim-primary"
        d="M10,8.14972L5.99902,5.84375C5.59485,5.61066,5.13666,5.48767,4.67017,5.48712C3.19739,5.48523,2.00189,6.67761,2,8.15039v7.69922c0.00464,1.47101,1.19598,2.66235,2.66699,2.66699c0.46796-0.00092,0.92743-0.12524,1.33203-0.36035L10,15.85028V8.14972z"
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

export default MForward;
