import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
  };
});
