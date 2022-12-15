import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTape: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M14.5,15c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C18.49765,13.20816,16.70816,14.99765,14.5,15z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15.5,3h-2c-3.86414,0.00452-6.99548,3.13586-7,7v8c0,0.00018,0,0.00037,0,0.00055C6.50012,18.55267,6.94788,19.00012,7.5,19h8c3.86414-0.00452,6.99548-3.13586,7-7v-2C22.49548,6.13586,19.36414,3.00452,15.5,3z M14.5,15c-2.20917,0-4-1.79083-4-4s1.79083-4,4-4s4,1.79083,4,4C18.49762,13.20819,16.70819,14.99762,14.5,15z"
      ></path>
      <path
        className="uim-primary"
        d="M5.5 15h1v-2h-1c-.55231 0-1 .44769-1 1S4.94769 15 5.5 15zM6.5 18.00055c0-.00018 0-.00037 0-.00055v-1h-4c-.00018 0-.00037 0-.00055 0C1.94733 17.00012 1.49988 17.44788 1.5 18v2c0 .00018 0 .00037 0 .00055C1.50012 20.55267 1.94788 21.00012 2.5 21c.00018 0 .00037 0 .00055 0C3.05267 20.99988 3.50012 20.55212 3.5 20v-1h4C6.94788 19.00012 6.50012 18.55267 6.5 18.00055z"
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

export default MTape;
