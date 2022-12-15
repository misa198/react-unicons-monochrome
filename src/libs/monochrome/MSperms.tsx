import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSperms: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.7 20.4c-.4-1.6-1.6-2.8-3.2-3.2-.5-.1-1-.4-1.4-.8-.4-.4-.7-.9-.8-1.4-.4-1.6-1.7-2.8-3.2-3.2-1.1-.3-1.9-1.1-2.2-2.2-.3-1-.8-1.8-1.6-2.4C9.2 7.1 9.1 7.1 9 7c.1-1-.2-2.1-1.1-2.9C6.6 2.8 4.7 2.6 3.7 3.7S2.8 6.6 4.1 7.9C5.3 9 6.9 9.3 7.9 8.7 8 8.7 8 8.7 8 8.8c.4.3.7.8.9 1.4.5 1.8 1.8 3.1 3.6 3.6.9.2 1.6.9 1.8 1.8.5 1.8 1.8 3.1 3.6 3.6.9.2 1.6.9 1.8 1.8 0 .2.1.3.2.5.2.3.5.5.9.5.2 0 .3 0 .4-.1.5-.2.7-.8.5-1.3C21.7 20.5 21.7 20.5 21.7 20.4zM11.1 20.1c-.2-.1-.5-.3-.6-.5-.3-.3-.6-.7-.7-1.1-.3-1.1-1-2.1-2.1-2.6 0 0-.1 0-.1 0 0-.7-.3-1.4-.8-2-1-1-2.4-1.1-3.2-.4-.8.8-.6 2.2.4 3.2.8.8 1.8 1 2.6.7.1.1.2.2.3.3.5.3.9.7 1 1.3C8 19.8 8.4 20.5 9 21c.3.4.8.7 1.2.9.1.1.3.1.4.1.4 0 .7-.2.9-.6C11.8 20.9 11.6 20.3 11.1 20.1zM21.3 10.2c-.3-.1-.7-.3-.9-.6-.3-.3-.6-.7-.7-1.1-.3-1.1-1-2.1-2.1-2.6 0 0-.1 0-.1 0 0-.7-.3-1.4-.8-2-1-1-2.4-1.1-3.2-.4-.8.8-.6 2.2.4 3.2.8.8 1.8 1 2.6.7.1.1.2.2.3.3.5.3.9.7 1 1.3.2.8.6 1.5 1.2 2 .5.5 1.1.9 1.7 1.1.1 0 .2.1.3.1.4 0 .8-.3.9-.7C22.1 11 21.8 10.4 21.3 10.2z"
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

export default MSperms;
