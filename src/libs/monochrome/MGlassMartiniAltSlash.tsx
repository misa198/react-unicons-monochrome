import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGlassMartiniAltSlash: React.FC<Props> = ({
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
        d="M17.25,22H6.75c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h10.5c0.55228,0,1,0.44772,1,1S17.80228,22,17.25,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,16.7373c0.30189-0.00217,0.58739-0.13764,0.78-0.37011L17.15869,10.89H6.84131L11.22,16.36719C11.41261,16.59966,11.69811,16.73513,12,16.7373z"
      ></path>
      <path
        className="uim-quaternary"
        d="M11.55322 16.62628c-.10065-.05017-.18616-.12555-.26617-.20697C11.36755 16.50299 11.45386 16.5766 11.55322 16.62628zM11.65881 16.65918c.09576.03516.19141.06207.29272.06702C11.84973 16.7204 11.75287 16.69385 11.65881 16.65918zM12.50946 16.57758c.03809-.02295.08118-.03174.11682-.0603.05066-.04059.09546-.08777.13727-.13727C12.69183 16.46295 12.60156 16.52234 12.50946 16.57758zM12.3595 16.65497c-.08173.0318-.16803.04877-.25635.05872C12.19135 16.70459 12.27521 16.68781 12.3595 16.65497z"
      ></path>
      <path
        className="uim-primary"
        d="M12.78003,16.36719C12.5874,16.59967,12.30188,16.73511,12,16.7373c-0.30188-0.0022-0.5874-0.13763-0.78003-0.37012L11,16.09204v4.39539c0,0.00037,0,0.00073,0,0.0011c0.00031,0.552,0.44806,0.99921,1,0.9989c0.00037,0,0.00073,0,0.00116,0c0.55194-0.00037,0.99915-0.44806,0.99884-1v-4.39539L12.78003,16.36719z"
      ></path>
      <path
        className="uim-quaternary"
        d="M17.15869,10.89001h0.00043l2.62616-3.28265c0.34497-0.43127,0.27502-1.06055-0.15619-1.40558c-0.17731-0.14185-0.39764-0.21912-0.62469-0.21912H4.99567c-0.55231,0-1,0.44775-1,1c0,0.22711,0.07727,0.44739,0.21912,0.62469l2.62616,3.28265h0.00037H17.15869z"
      ></path>
      <path
        className="uim-primary"
        d="M19,18c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-14-14C3.90605,3.31302,3.91176,2.67995,4.30574,2.293c0.38897-0.38203,1.01229-0.38203,1.40126,0l14,14c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C19.51931,17.89463,19.26509,17.99994,19,18z"
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

export default MGlassMartiniAltSlash;
