import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLinkBroken: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M5.88281,6.88281a.99672.99672,0,0,1-.707-.293L3.88818,5.30176A.99989.99989,0,1,1,5.30225,3.8877L6.58984,5.17578a1,1,0,0,1-.707,1.707Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.7334 13.74512a1 1 0 0 1-.707-1.707L18.561 8.50391a2.16668 2.16668 0 0 0 0-3.06446 2.221 2.221 0 0 0-3.06495 0L11.96143 8.97363a.99989.99989 0 1 1-1.41407-1.41406L14.082 4.02539A4.16686 4.16686 0 1 1 19.9751 9.918l-3.53467 3.53418A.99676.99676 0 0 1 15.7334 13.74512zM6.97168 21.19531A4.16668 4.16668 0 0 1 4.0249 14.082l3.53467-3.53418a.99989.99989 0 1 1 1.41406 1.41406L5.439 15.49609a2.16668 2.16668 0 0 0 0 3.06446 2.21909 2.21909 0 0 0 3.06495 0l3.53466-3.53418a.99989.99989 0 1 1 1.41407 1.41406L9.918 19.97461A4.13884 4.13884 0 0 1 6.97168 21.19531z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.40479 20.40527a.99676.99676 0 0 1-.707-.293l-1.28759-1.28808a.99989.99989 0 0 1 1.41406-1.41406l1.2876 1.28808a1 1 0 0 1-.707 1.707zM4.75977 10.58887a.991.991 0 0 1-.25928-.03418L2.74121 10.083a.99989.99989 0 0 1 .51758-1.93164L5.01807 8.623a1 1 0 0 1-.2583 1.96582zM21.00049 15.88281a.99067.99067 0 0 1-.25928-.03418L18.98193 15.377a.99989.99989 0 1 1 .51758-1.93164l1.75928.47168a1 1 0 0 1-.2583 1.96582zM9.58789 5.75879a.99932.99932 0 0 1-.96533-.74121L8.15137 3.25879A.99989.99989 0 0 1 10.083 2.74121L10.5542 4.5a1.00026 1.00026 0 0 1-.96631 1.25879zM14.88232 22a.99932.99932 0 0 1-.96533-.74121L13.4458 19.5a.99989.99989 0 1 1 1.93164-.51758l.47119 1.75879A1.00026 1.00026 0 0 1 14.88232 22z"
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

export default MLinkBroken;
