import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGlassMartiniAlt: React.FC<Props> = ({
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
        className="uim-primary"
        d="M18.75,22H5.25c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h13.5c0.55228,0,1,0.44772,1,1S19.30228,22,18.75,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M5.72,8l5.5,6.87988c0.35173,0.4308,0.9861,0.49489,1.4169,0.14316c0.05241-0.04279,0.10037-0.09075,0.14316-0.14316L18.28,8H5.72z"
      ></path>
      <path
        className="uim-quaternary"
        d="M11.9549 15.23975C11.97058 15.24048 11.98419 15.25 12 15.25c.03711 0 .06934-.02008.10583-.02411C12.0553 15.2312 12.00549 15.24207 11.9549 15.23975zM11.65637 15.17181c-.03394-.01251-.0705-.01489-.10309-.03113C11.58582 15.15704 11.62219 15.15912 11.65637 15.17181zM12.5116 15.08917c-.0484.02911-.09656.05792-.14795.07806C12.41681 15.14624 12.46271 15.11896 12.5116 15.08917z"
      ></path>
      <path
        className="uim-primary"
        d="M12.78009,14.87988c-0.04285,0.05243-0.09076,0.10034-0.14319,0.14319c-0.43079,0.35168-1.06519,0.2876-1.41693-0.14319L11,14.60474V21c0,0.00037,0,0.00073,0,0.00116C11.00031,21.5531,11.44806,22.00031,12,22c0.00037,0,0.00073,0,0.00116,0C12.5531,21.99969,13.00031,21.55194,13,21v-6.3952L12.78009,14.87988z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18.28003,8h0.00122l3.5-4.375c0.14185-0.17737,0.21912-0.39771,0.21912-0.62488C22.00031,2.44769,21.55243,1.99994,21,2H3C2.77289,2,2.55249,2.07727,2.37512,2.21912C1.94373,2.56415,1.87372,3.1936,2.21875,3.625l3.5,4.375h0.00122H18.28003z"
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

export default MGlassMartiniAlt;
