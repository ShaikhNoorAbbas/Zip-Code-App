"use client";
// Imports
import { Button, Container, Paper, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { StyledBox } from "./customStyle";
import { remove } from "@/Redux/dataSlice";
// Display Component Startes from here
const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myData);
  console.log(data);
  function handleRemove(id) {
    dispatch(remove(id));
  }
  return (
    <Container>
      {data &&
        data.map((item) => (
          <StyledBox key={item.id}>
            <Paper
              elevation={20}
              sx={{ p: 2, display: "inline-block", minWidth: "300px", m: 1 }}
            >
              <Typography>Country - {item.country}</Typography>
              <Typography>State - {item.state}</Typography>
              <Typography>Place Name - {item.placename}</Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleRemove(item.id)}
                sx={{ my: 1 }}
              >
                Remove
              </Button>
            </Paper>
          </StyledBox>
        ))}
    </Container>
  );
};

export default Display;
