import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudQuestion: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.42926,8.23242A6.99612,6.99612,0,0,0,5.06079,10.12256,3.994,3.994,0,0,0,6,18H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
      ></path>
      <path
        className="uim-primary"
        d="M12 17a1 1 0 0 1 0-2 1 1 0 0 0 0-2 1.0017 1.0017 0 0 0-.86572.5 1.00016 1.00016 0 1 1-1.73242-1A3 3 0 1 1 12 17zM12 20a1.05234 1.05234 0 0 1-.71-.29c-.04-.05029-.08008-.1001-.12012-.16016a.553.553 0 0 1-.09033-.16992.60371.60371 0 0 1-.05957-.18994A1.19474 1.19474 0 0 1 11 19a1.4618 1.4618 0 0 1 .02-.2002.63477.63477 0 0 1 .05957-.18017.56436.56436 0 0 1 .09033-.16992c.04-.06006.08008-.10987.12012-.15967a1.03683 1.03683 0 0 1 1.08984-.21045A1.15551 1.15551 0 0 1 12.71 18.29c.04.0498.08008.09961.11963.15967a.56436.56436 0 0 1 .09033.16992.65178.65178 0 0 1 .06006.18017A1.54143 1.54143 0 0 1 13 19a1.25325 1.25325 0 0 1-.02.18994.617.617 0 0 1-.06006.18994.553.553 0 0 1-.09033.16992c-.03955.06006-.07959.10987-.11963.16016a1.16451 1.16451 0 0 1-.33008.21A.9994.9994 0 0 1 12 20z"
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

export default MCloudQuestion;
