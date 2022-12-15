import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGlassTea: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M4.66064,9l1.14795,10.33105C5.97572,20.85115,7.26074,22.0015,8.79,22h6.42c1.52928,0.00151,2.81431-1.14883,2.98145-2.66895L19.33936,9H4.66064z"
      ></path>
      <path
        className="uim-quaternary"
        d="M8.78998 22c-.38232.00037-.74933-.07123-1.08746-.20264C8.04065 21.92877 8.40765 22.00037 8.78998 22zM6.42212 20.84393c.33105.4248.77319.75635 1.2804.95343C7.19531 21.60034 6.75317 21.26874 6.42212 20.84393z"
      ></path>
      <path
        className="uim-primary"
        d="M10,18c-0.55197,0.00031-0.99969-0.44689-1-0.99886C9,17.00076,9,17.00038,9,17v-4c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C10.00076,18,10.00038,18,10,18z M14,18c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-4c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C14.00076,18,14.00038,18,14,18z"
      ></path>
      <path
        className="uim-quaternary"
        d="M16.76562,2H7.23438c-0.11096,0-0.2218,0.0061-0.33209,0.01837C5.25592,2.20154,4.0697,3.68469,4.25287,5.33105L4.66058,9h0.00006h3h8.67871h3h0.00006l0.40765-3.66895c0.01227-0.11029,0.01843-0.22113,0.01837-0.33209C19.7652,3.34247,18.42218,1.99976,16.76562,2z"
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

export default MGlassTea;
