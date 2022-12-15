import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDesktopCloudAlt: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19 2H7.5274c.26361.00214.53082.02985.79871.08643 1.18933.25128 2.19983 1.02979 2.74615 2.11572 1.54651.59088 2.32123 2.32361 1.73035 3.87012C12.3587 9.23401 11.24365 10.00098 10 10H4.5C3.1192 9.99994 1.99994 8.88055 2 7.49976V15c0 1.65686 1.34314 3 3 3h14c1.65686 0 3-1.34314 3-3V5C22 3.34314 20.65686 2 19 2zM3.58594 5.17285C3.98492 3.28448 5.6557 1.99188 7.51276 2H5C3.34314 2 2 3.34314 2 5v2.49976C2 6.47186 2.62921 5.54871 3.58594 5.17285z"
      ></path>
      <rect width="8" height="6" x="8" y="16" className="uim-tertiary"></rect>
      <path
        className="uim-primary"
        d="M2,13h20l0,0v2c0,1.65685-1.34315,3-3,3H5c-1.65685,0-3-1.34315-3-3V13L2,13z"
      ></path>
      <path
        className="uim-quaternary"
        d="M10,10H4.5C3.11921,9.99993,1.99991,8.88053,1.99998,7.49974c0.00005-1.02791,0.62923-1.95103,1.58596-2.32689C4.0426,3.01159,6.16484,1.62974,8.32611,2.0864c1.18934,0.2513,2.19985,1.02984,2.74616,2.11575c1.54651,0.59088,2.32121,2.32359,1.73032,3.8701C12.35872,9.23398,11.24364,10.00099,10,10z"
      ></path>
      <path
        className="uim-primary"
        d="M19,22H5c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,22,19,22z"
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

export default MDesktopCloudAlt;
