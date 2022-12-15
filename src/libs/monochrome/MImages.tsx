import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImages: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17.92,11.27c-0.99911-0.99964-2.61941-1.00006-3.61904-0.00096C14.30064,11.26936,14.30032,11.26968,14.3,11.27l-0.91,0.90991l-6.72,6.73l-0.99,0.99c0.44183,0.5429,1.06194,0.91143,1.75,1.04C7.61731,20.98021,7.8084,21.00035,8,21h10c1.65468,0.00218,2.99782-1.33744,3-2.99212c0-0.00263,0-0.00526,0-0.00788v-3.64L17.92,11.27z"
      ></path>
      <path
        className="uim-secondary"
        d="M7.57855,18H5c0.00372,0.69226,0.24359,1.36249,0.67999,1.8999l0.98999-0.98999L7.57855,18z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18 5v6.35028l3 3.0097V8C20.99518 6.34515 19.65485 5.00482 18 5zM11.1 9.89l-.71-.71008L9.58 8.37C8.43361 7.24558 6.59542 7.2545 5.46 8.39L2 12.01V15c.00372.69226.24361 1.3625.68 1.8999.44183.5429 1.06195.91143 1.75 1.04.32-.29993.62-.58.65-.61L11.1 11.31C11.48998 10.91699 11.48998 10.28301 11.1 9.89z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,2H5C3.34515,2.00482,2.00482,3.34515,2,5v7.01001l3.46002-3.62c1.13538-1.1355,2.97357-1.14441,4.12-0.02002l0.81,0.80994l0.70996,0.71008c0.39001,0.39301,0.39001,1.02698,0,1.41998l-6.01996,6.0199C5.04999,17.35992,4.75,17.63995,4.42999,17.93988C4.61731,17.98022,4.80841,18.00037,5,18h10c1.65466,0.0022,2.9978-1.33746,3-2.99213c0-0.00262,0-0.00525,0-0.00787V5C17.99518,3.34515,16.65485,2.00482,15,2z"
      ></path>
      <path
        className="uim-primary"
        d="M14.92,8.27c-0.99911-0.99964-2.61941-1.00006-3.61904-0.00096C11.30064,8.26936,11.30032,8.26968,11.3,8.27l-0.91,0.90991l-6.72,6.73l-0.99,0.99c0.44183,0.5429,1.06194,0.91143,1.75,1.04C4.61731,17.98021,4.8084,18.00035,5,18h10c1.65468,0.00218,2.99782-1.33744,3-2.99211c0-0.00263,0-0.00526,0-0.00789v-3.64L14.92,8.27z"
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

export default MImages;
