import * as React from "react";
import styled from "@emotion/styled";
import media from "../styles/media";
import { accordionData } from "../utlis/testimony";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = React.useState<null | number>(0);

  const handleAccordionClick = (index: number) => {
    if (index !== openAccordion) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  };

  return (
    <AccordionEl>
      {accordionData.map((data, index) => (
        <AccordionItemEl>
          <div
            className="accordion-title"
            onClick={() => handleAccordionClick(index)}
          >
            {data.header}
          </div>
          {openAccordion === index ? (
            <div className="accordion-body">
              <p className="accordion-content">{data.content}</p>
              <p className="mt-[16px]">{data.name}</p>
              <p className="mb-[20px]">{data.title}</p>
            </div>
          ) : (
            <></>
          )}
        </AccordionItemEl>
      ))}
    </AccordionEl>
  );
};

export default Accordion;

const AccordionEl = styled.div`
  display: none;
  margin-top: 24px;
  border-bottom: 1px solid black;
  ${media.mobile} {
    display: block;
  }
`;

const AccordionItemEl = styled.div`
  border-top: 1px solid black;
  padding: 0px 20px;

  .accordion-title {
    margin: 20px 0px;
    font-size: 56px;
    font-style: normal;
    font-weight: 500;
    line-height: 64px; /* 114.286% */
    letter-spacing: -2.4px;
  }

  .accordion-body {
    margin: 16px 0px;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 127.273% */
    letter-spacing: -0.4px;

    .accordion-content {
      font-weight: 500px;
    }
  }
`;
