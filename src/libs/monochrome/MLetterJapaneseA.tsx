import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLetterJapaneseA: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M10.81738,20a.99931.99931,0,0,1-.98535-.83545,46.66915,46.66915,0,0,1-.4043-12.31689l.39551-3.94727a1.00009,1.00009,0,0,1,1.99024.19922L11.418,7.04688a44.67434,44.67434,0,0,0,.38672,11.78857A1.00062,1.00062,0,0,1,10.81738,20Z"
      ></path>
      <path
        className="uim-primary"
        d="M6.81836 7a1 1 0 0 1 0-2 31.50583 31.50583 0 0 0 7.63769-.94043l.12207-.03027a1 1 0 1 1 .48047 1.9414l-.12011.02979A33.50161 33.50161 0 0 1 6.81836 7zM13.81738 15.77a1.00063 1.00063 0 0 1-.82324-1.5669A6.69071 6.69071 0 0 0 14.39551 9.231.9997.9997 0 1 1 16.34082 8.769a8.53924 8.53924 0 0 1-1.69824 6.56787A1.00006 1.00006 0 0 1 13.81738 15.77z"
      ></path>
      <path
        className="uim-primary"
        d="M14.8584,22a.99994.99994,0,0,1-.53418-1.8457c3.4541-2.17774,5.43555-5.3877,4.417-7.15479a3.01462,3.01462,0,0,0-2.46582-1.21972,11.8478,11.8478,0,0,1-3.21484,5.46289,11.48072,11.48072,0,0,1-5.915,3.30859,3.00419,3.00419,0,0,1-2.94629-4.71875,13.7396,13.7396,0,0,1,2.64844-2.70068l.02246-.01807a16.4074,16.4074,0,0,1,1.94922-1.31055,14.31323,14.31323,0,0,1,6.59082-2.043c2.38086-.082,4.17968.72022,5.06152,2.23682,1.60254,2.78027-.582,7.0127-5.08106,9.84863A.99184.99184,0,0,1,14.8584,22ZM8.13379,14.66455l-.02637.02149a11.89343,11.89343,0,0,0-2.291,2.32275,1.00469,1.00469,0,0,0,.97949,1.57373,9.61867,9.61867,0,0,0,4.85058-2.75391,10.21994,10.21994,0,0,0,2.52247-3.936,13.34829,13.34829,0,0,0-4.34864,1.64209A14.38272,14.38272,0,0,0,8.13379,14.66455Z"
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

export default MLetterJapaneseA;
