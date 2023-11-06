"use client";
// Imports
import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(() => {
  return {
    margin: "10px auto",
    maxWidth: "50%",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 2px 0.85rem white",
  };
});
