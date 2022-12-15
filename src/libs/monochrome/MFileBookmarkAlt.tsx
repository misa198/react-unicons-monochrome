import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileBookmarkAlt: React.FC<Props> = ({
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
        d="M18.51165,8.99969l-7-7h-6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h10a3,3,0,0,0,3-3Z"
      ></path>
      <path
        className="uim-primary"
        d="M18.51165 8.99969h-5a2 2 0 0 1-2-2v-5zM11.5 18h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM11.5 14h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM8.5 10h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM20.5 22a1.00181 1.00181 0 0 1-.55469-.168L18 20.52734l-1.93848 1.29981A1.00189 1.00189 0 0 1 14.5 21V13a.99974.99974 0 0 1 1-1h5a.99974.99974 0 0 1 1 1v8a.99982.99982 0 0 1-1 1z"
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

export default MFileBookmarkAlt;
