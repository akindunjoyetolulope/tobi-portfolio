import * as React from "react";
import styled from "@emotion/styled";

const Accordion = () => {
  const accordionData = {
    header: "Different",
    content:
      "Tobi was a fractional hire to help us level up the aesthetics of our remittance mobile apps after we got our Series A. His impact went beyond the app redesign",
    name: "Stan Marion",
    title: "CEO, Talarian",
  };

  const { header, content, name, title } = accordionData;

  const [isActive, setIsActive] = React.useState(false);

  return (
    <AccordionEl>
      <div className="accordion-item">
        <div
          className="text-[72px] font-medium mobile:text-[56px]"
          onClick={() => setIsActive(!isActive)}
        >
          {header}
        </div>
        {isActive && (
          <div>
            <div className="accordion-content">{content}</div>
            <hr className="w-[12px] border-black  my-[16px]" />
            <p>{name}</p>
            <p>{title}</p>
          </div>
        )}
      </div>

      <div></div>
    </AccordionEl>
  );
};

export default Accordion;

const AccordionEl = styled.div`
  margin-top: 24px;

  .accordion-item {
    border-right: 1px solid black;
  }
`;
