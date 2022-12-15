import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileExclamationAlt: React.FC<Props> = ({
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
        d="M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M20 8.99969H15a2 2 0 0 1-2-2v-5zM19 19a.99974.99974 0 0 1-1-1V16a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 19 19zM19 22a.99042.99042 0 0 1-1-1 .84393.84393 0 0 1 .07959-.37988.90421.90421 0 0 1 .54-.54.95593.95593 0 0 1 .58008-.06055.62266.62266 0 0 1 .18017.06055.73875.73875 0 0 1 .18018.08984A1.68289 1.68289 0 0 1 19.71 20.29a1.15772 1.15772 0 0 1 .21.33008A.99013.99013 0 0 1 19 22zM15 18H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 14H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM10 10H9A1 1 0 0 1 9 8h1a1 1 0 0 1 0 2z"
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

export default MFileExclamationAlt;
