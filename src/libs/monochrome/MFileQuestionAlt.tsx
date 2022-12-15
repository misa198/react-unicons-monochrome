import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileQuestionAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19,8.99969l-7-7H6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3Z"
      ></path>
      <path className="uim-primary" d="M19,8.99969H14a2,2,0,0,1-2-2v-5Z"></path>
      <path
        className="uim-primary"
        d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM17.93311 19a1 1 0 0 1 0-2 1 1 0 0 0 0-2 1.00113 1.00113 0 0 0-.86573.5 1.00016 1.00016 0 0 1-1.73242-1A3 3 0 1 1 17.93311 19zM17.92969 22a.96838.96838 0 0 1-.69971-.29 1.00173 1.00173 0 0 1 0-1.41992.99084.99084 0 0 1 .8999-.27051 1.103 1.103 0 0 1 .35987.15039 1.55438 1.55438 0 0 1 .1499.12012 1.17206 1.17206 0 0 1 .22021.33008A.99948.99948 0 0 1 17.92969 22zM13.06689 18h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM13.06689 14h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM9.06689 10h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
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

export default MFileQuestionAlt;
