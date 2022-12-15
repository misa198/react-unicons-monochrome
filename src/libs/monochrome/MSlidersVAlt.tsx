import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSlidersVAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="17" r="3" className="uim-tertiary"></circle>
      <circle cx="19" cy="11" r="3" className="uim-tertiary"></circle>
      <circle cx="5" cy="9" r="3" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M19 8c.35254 0 .68579.07202 1 .18372V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v5.18372C18.31421 8.07202 18.64746 8 19 8zM5 6c.35254 0 .68579.07202 1 .18372V3c0-.55231-.44769-1-1-1S4 2.44769 4 3v3.18372C4.31421 6.07202 4.64746 6 5 6zM12 14c.35254 0 .68579.07202 1 .18372V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v11.18372C11.31421 14.07202 11.64746 14 12 14zM5 12c-.35254 0-.68579-.07202-1-.18372V21c0 .00018 0 .00037 0 .00055C4.00012 21.55267 4.44788 22.00012 5 22c.00018 0 .00037 0 .00055 0C5.55267 21.99988 6.00012 21.55212 6 21v-9.18372C5.68579 11.92798 5.35254 12 5 12zM12 20c-.35254 0-.68579-.07202-1-.18372V21c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1.18372C12.68579 19.92798 12.35254 20 12 20zM19 14c-.35254 0-.68579-.07202-1-.18372V21c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-7.18372C19.68579 13.92798 19.35254 14 19 14z"
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

export default MSlidersVAlt;
