import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDocker: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M21.80521,10.07661a2.62688,2.62688,0,0,0-1.63256-.42669,5.18884,5.18884,0,0,0-.8441.0742,3.18021,3.18021,0,0,0-1.42849-2.14273l-.28755-.167-.18552.269a3.96681,3.96681,0,0,0-.51017,1.18731,2.81866,2.81866,0,0,0,.33393,2.21694,3.93556,3.93556,0,0,1-1.45631.35248H2.62269a.62152.62152,0,0,0-.62148.62148,9.38612,9.38612,0,0,0,.57511,3.3857A5.07767,5.07767,0,0,0,4.5799,18.05386,8.86828,8.86828,0,0,0,8.97667,19a13.4856,13.4856,0,0,0,2.43956-.22262,10.06816,10.06816,0,0,0,3.1909-1.15949,8.73384,8.73384,0,0,0,2.17055-1.781,11.80949,11.80949,0,0,0,2.12418-3.664h.18552a3.052,3.052,0,0,0,2.23548-.8441,2.47036,2.47036,0,0,0,.59366-.87193L22,10.21574Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M3.84711,11.05985H5.60952a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H3.84711a.15635.15635,0,0,0-.15769.1577v1.57689A.16235.16235,0,0,0,3.84711,11.05985Zm2.43028,0H8.0398a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H6.27739a.15635.15635,0,0,0-.15769.1577v1.57689a.16235.16235,0,0,0,.15769.1577m2.47665,0h1.76242a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H8.754a.15635.15635,0,0,0-.15769.1577v1.57689A.151.151,0,0,0,8.754,11.05985Zm2.43956,0H12.956a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H11.1936a.15635.15635,0,0,0-.15769.1577v1.57689A.15635.15635,0,0,0,11.1936,11.05985Zm-4.91621-2.254H8.0398a.16255.16255,0,0,0,.15769-.15769V7.07122a.15634.15634,0,0,0-.15769-.15769H6.27739a.15634.15634,0,0,0-.15769.15769v1.5769a.16952.16952,0,0,0,.15769.15769m2.47665,0h1.76242a.16255.16255,0,0,0,.15769-.15769V7.07122a.15634.15634,0,0,0-.15769-.15769H8.754a.15634.15634,0,0,0-.15769.15769v1.5769a.15635.15635,0,0,0,.15769.15769m2.43956,0H12.956a.16255.16255,0,0,0,.15769-.15769V7.07122a.16255.16255,0,0,0-.15769-.15769H11.1936a.15634.15634,0,0,0-.15769.15769v1.5769a.16255.16255,0,0,0,.15769.15769m0-2.26331H12.956a.15635.15635,0,0,0,.15769-.1577V4.80791a.16255.16255,0,0,0-.15769-.15769H11.1936a.15634.15634,0,0,0-.15769.15769V6.3848a.16255.16255,0,0,0,.15769.1577m2.45811,4.51735h1.76241a.15634.15634,0,0,0,.15769-.15769V9.32526a.15634.15634,0,0,0-.15769-.15769H13.65171a.15634.15634,0,0,0-.15769.15769v1.5769a.16235.16235,0,0,0,.15769.15769"
        ></path>
      </svg>
    </Wrapper>
  );
};
