import { ReactNode } from "react";

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
  return (
    <MuiAccordion
      sx={{
        borderRadius: 1,
        "&.MuiPaper-root": {
          backgroundColor: "rgb(17, 24, 39, 0.05)",
          boxShadow: "none",
          border: "none",
        },
        "&.Mui-expanded": {
          border: "1px solid #00B207",
        },
        "&.Mui-expanded .MuiAccordionDetails-root": {
          borderTop: "1px solid #00B207",
        },
      }}
    >
      <AccordionSummary
        className="text-medium font-medium"
        sx={{
          color: "rgba(17, 24, 39, 0.9)",
          "&.Mui-expanded": {
            color: "#00B207",
          },
          borderRadius: 1,
        }}
        expandIcon={<AddCircleOutlineIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className="text-gray-600">{children}</AccordionDetails>
    </MuiAccordion>
  );
};
