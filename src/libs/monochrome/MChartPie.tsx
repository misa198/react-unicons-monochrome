import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChartPie: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,12V2c5.52285,0,10,4.47715,10,10H12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,12l5,8.66022c3.09237-1.78795,4.99776-5.08817,5-8.66022H12z"
      ></path>
      <path
        className="uim-primary"
        d="M17,20.66022L12,12V2C6.47715,2.00184,2.00149,6.48047,2.00332,12.00332C2.00516,17.52617,6.4838,22.00183,12.00665,22c1.75327-0.00058,3.47558-0.46212,4.99421-1.33832l0.00336-0.00427L17,20.66022z"
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

export default MChartPie;
