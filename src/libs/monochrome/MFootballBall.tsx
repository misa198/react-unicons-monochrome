import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFootballBall: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19.94 2.65002l.00702-.00702c-.47925-.2829-1.0152-.48053-1.59705-.54303-1.13245-.13226-2.27655-.13196-3.409.0011-8.03571.94379-13.78479 8.22321-12.841 16.25891.0636.57837.26093 1.11108.54236 1.58771L2.65002 19.94l1-1L18.94 3.65002 19.94 2.65002zM21.35699 4.05298L21.34998 4.06l-1 1L5.06 20.34998l-1 1-.00739.00739c.47937.28278 1.0155.48035 1.59741.54266C6.22412 21.9679 6.80188 22.00128 7.38 22c3.8783.008 7.59839-1.53693 10.33002-4.28998 3.17865-3.16071 4.72424-7.60938 4.19-12.06C21.83752 5.06818 21.63989 4.53223 21.35699 4.05298z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19.94,2.65L2.65,19.94c0.34344,0.58149,0.82851,1.06656,1.41,1.41L21.35,4.06C21.00657,3.47851,20.52149,2.99344,19.94,2.65z"
      ></path>
      <path
        className="uim-primary"
        d="M12,15.83c-0.26725-0.00111-0.52293-0.10914-0.71-0.3l-2.83-2.82c-0.39212-0.39212-0.39212-1.02788,0-1.42s1.02788-0.39212,1.42,0l2.83,2.83c0.39213,0.38891,0.39474,1.02207,0.00583,1.4142C12.52664,15.72496,12.26866,15.83156,12,15.83z M14.83,13c-0.2658,0.00154-0.52128-0.10281-0.71-0.29l-2.83-2.83c-0.39212-0.39212-0.39212-1.02788,0-1.42s1.02788-0.39212,1.42,0l2.83,2.83c0.39212,0.38892,0.39472,1.02208,0.0058,1.4142c-0.00192,0.00194-0.00386,0.00387-0.0058,0.0058C15.35128,12.89719,15.0958,13.00154,14.83,13z"
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

export default MFootballBall;
