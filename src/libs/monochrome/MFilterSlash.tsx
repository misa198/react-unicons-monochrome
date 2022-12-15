import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFilterSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M21,12H5c-0.55197,0.00031-0.99969-0.44689-1-0.99886C4,11.00076,4,11.00038,4,11V9c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C21.00076,12,21.00038,12,21,12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M4.12427 11.45758c-.01178-.0224-.03198-.03888-.04205-.06226C4.09216 11.4184 4.11261 11.43524 4.12427 11.45758zM21.00116 12C21.00073 12 21.00037 12 21 12H5c-.2688.00012-.51062-.1087-.69037-.28125.00409.00397.00549.00977.0097.01367l5.90039 5.4834V21c.00037.55212.44788.99963 1 1 .15527-.00006.30835-.03619.44727-.10547l3.56055-1.78027c.33875-.16949.55267-.51575.55273-.89453v-2.00391l5.90039-5.4834c.00427-.00397.00574-.01001.00995-.01404C21.51117 11.89087 21.26971 11.99988 21.00116 12zM21.91791 11.39465c-.01099.02545-.03271.04352-.04565.06781C21.88513 11.43823 21.9071 11.41986 21.91791 11.39465z"
      ></path>
      <path
        className="uim-primary"
        d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
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

export default MFilterSlash;
