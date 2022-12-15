import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MDataSharing: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M19.333,11H12c-1.65694-0.00009-3.00008-1.34337-2.99999-3.00031c0.00007-1.29975,0.83707-2.45164,2.07323-2.85321c0.47054-2.72018,3.05712-4.54387,5.7773-4.07333c1.60668,0.27792,2.97682,1.32204,3.67094,2.79746c1.91438,0.65423,2.93592,2.7365,2.28169,4.65088C22.29611,10.0052,20.90096,11.00166,19.333,11z M11.333,23H4c-1.65694-0.00009-3.00008-1.34337-2.99999-3.00031c0.00007-1.29975,0.83707-2.45164,2.07323-2.85321c0.47054-2.72018,3.05712-4.54387,5.7773-4.07334c1.60668,0.27792,2.97682,1.32204,3.67095,2.79747c1.91437,0.65423,2.93592,2.7365,2.28169,4.65088C14.29611,22.0052,12.90096,23.00166,11.333,23z"
      ></path>
      <path
        className="uim-primary"
        d="M5 12c.00018 0 .00037 0 .00055 0C5.55267 11.99988 6.00012 11.55212 6 11V7c.00055-.55206.44794-.99945 1-1h2.77435c.34473-.38391.78418-.68634 1.29889-.85352C11.14355 4.73993 11.27423 4.36182 11.4325 4H7C5.34387 4.00183 4.00183 5.34387 4 7v4c0 .00018 0 .00037 0 .00055C4.00012 11.55267 4.44788 12.00012 5 12zM19 13c-.55231 0-1 .44769-1 1v3c-.00055.55206-.44794.99945-1 1h-2.2702c.24597.62341.32288 1.30994.19482 2H17c1.65613-.00183 2.99817-1.34387 3-3v-3C20 13.44769 19.55231 13 19 13z"
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

export default MDataSharing;
