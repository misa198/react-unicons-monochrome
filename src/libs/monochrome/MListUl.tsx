import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MListUl: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21 8H7A1 1 0 0 1 7 6H21a1 1 0 0 1 0 2zM21 13H7a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 18H7a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM3 8a.99993.99993 0 0 1-.38037-.08008A1.1515 1.1515 0 0 1 2.29 7.71a1.16213 1.16213 0 0 1-.21045-.33008.94637.94637 0 0 1 0-.75976A1.14883 1.14883 0 0 1 2.29 6.29a.99764.99764 0 0 1 1.08984-.21A1.03418 1.03418 0 0 1 3.71 6.29a1.15772 1.15772 0 0 1 .21.33008.94107.94107 0 0 1 0 .75976A1.17124 1.17124 0 0 1 3.71 7.71.99183.99183 0 0 1 3 8zM3 13a.99993.99993 0 0 1-.38037-.08008A1.1515 1.1515 0 0 1 2.29 12.71a1.16213 1.16213 0 0 1-.21045-.33008.94637.94637 0 0 1 0-.75976A1.03011 1.03011 0 0 1 2.29 11.29a1.1515 1.1515 0 0 1 .32959-.21A.9986.9986 0 0 1 3.71 11.29a1.03724 1.03724 0 0 1 .21.33008.94107.94107 0 0 1 0 .75976 1.17124 1.17124 0 0 1-.21.33008 1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 3 13zM3 18a.99993.99993 0 0 1-.38037-.08008A1.1515 1.1515 0 0 1 2.29 17.71a.99108.99108 0 0 1-.21045-1.08984A1.03011 1.03011 0 0 1 2.29 16.29a1.02673 1.02673 0 0 1 .32959-.21.99537.99537 0 0 1 .76025 0 1.03418 1.03418 0 0 1 .33008.21 1.03724 1.03724 0 0 1 .21.33008A.98919.98919 0 0 1 3.71 17.71a1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 3 18z"
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

export default MListUl;
