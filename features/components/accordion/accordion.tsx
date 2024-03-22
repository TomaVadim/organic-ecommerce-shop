"use client";

import { ReactNode, SyntheticEvent, useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
} from "@mui/material";

type Props = {
  title: string;
  children: ReactNode;
};

export const Accordion = ({ title, children }: Props): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (_: SyntheticEvent, expanded: boolean) => {
    setIsActive(expanded);
  };

  const borderColor = isActive ? "1px solid #00B207" : "none";
  const textColor = isActive ? "#00B207" : "rgba(17, 24, 39, 0.9)";

  return (
    <MuiAccordion
      onChange={handleChange}
      sx={{
        borderRadius: "100%",
        "&.MuiPaper-root": {
          backgroundColor: "rgb(17, 24, 39, 0.05)",
          boxShadow: "none",
          border: borderColor,
        },
      }}
    >
      <AccordionSummary
        className="text-medium font-medium"
        sx={{
          borderRadius: "100%",
          color: textColor,
        }}
        expandIcon={<AddCircleOutlineIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&.MuiAccordionDetails-root": {
            borderTop: borderColor,
          },
        }}
        className="text-gray-600"
      >
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
};
