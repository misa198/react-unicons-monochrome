import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeStar: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.7,7.96774l-7.58,7.58008c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,15.5518,9.88199,15.54981,9.88,15.54782L2.3,7.96774C2.79464,6.9245,3.84544,6.259,5,6.25774h14C20.15456,6.259,21.20536,6.9245,21.7,7.96774z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.70001,7.96771L14.12,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.88397,15.55182,9.88196,15.5498,9.88,15.54779L2.29999,7.96771C2.10345,8.36945,2.00085,8.81055,2,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.99915,8.81055,21.89655,8.36945,21.70001,7.96771z"
      ></path>
      <path
        className="uim-primary"
        d="M14.8418,13.25781c-0.30878-0.00036-0.6098-0.09677-0.86133-0.27588c-0.48242-0.3402-0.72635-0.92738-0.627-1.50927l0.28515-1.73243l-1.19819-1.21972c-0.40736-0.4144-0.54672-1.02284-0.36035-1.57324c0.17651-0.54158,0.64296-0.93761,1.206-1.02393l1.6211-0.24609l0.73144-1.54981c0.3477-0.75177,1.239-1.07933,1.99077-0.73163c0.32245,0.14914,0.58148,0.4079,0.73096,0.73019l0.73242,1.55127l1.6211,0.24609c0.56306,0.0863,1.02953,0.48233,1.20605,1.02393c0.18653,0.55056,0.04673,1.15924-0.36133,1.57324l-1.19726,1.2197l0.28418,1.73194c0.1003,0.5819-0.14337,1.16956-0.626,1.50976c-0.46531,0.33314-1.08099,0.36812-1.58105,0.08985L17,12.28223l-1.43848,0.78955C15.34115,13.19353,15.09356,13.25752,14.8418,13.25781z M16.7627,11.27148L16.7627,11.27148z"
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

export default MEnvelopeStar;
