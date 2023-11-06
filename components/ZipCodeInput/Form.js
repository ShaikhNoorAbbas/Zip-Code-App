"use client";
// Imports
import { Button, Container, Paper, TextField } from "@mui/material";
import { StyledPaper } from "./customComponents";
import { useState } from "react";
import { useGetApiDataQuery } from "@/Redux/api";
import { add, loadingState, errorState } from "@/Redux/dataSlice";
import { useDispatch } from "react-redux";
// Form Component Startes from here
const Form = () => {
  // Functionalities

  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useGetApiDataQuery(query);
  const dispatch = useDispatch();

  // OnClick Handle Functionality

  const handleClick = () => {
    console.log(`Post Code ${query}`);
    // console.log(isLoading);
    // console.log(error);
    // console.log(data.country);
    // console.log(data.places);
    // console.log(data.places[0].state);
    // console.log(data.places[0]["place name"]);
    // console.log(data.country);
    // console.log(error);
    dispatch(
      add({
        id: Math.floor(Math.random() * 90) + 10,
        country: data.country,
        state: data.places[0].state,
        placename: data.places[0]["place name"],
        loadingState: isLoading,
        errorState: error,
      })
    );
    setQuery("");

    // Space
  };
  // Component Return Stares from here
  return (
    <>
      <Container>
        <StyledPaper component={"form"} elevation={20}>
          <TextField
            type="number"
            label="Zip Code"
            placeholder="Enter Zip Code"
            fullWidth
            variant="filled"
            sx={{ mb: 2 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained" fullWidth>
            Search
          </Button>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Form;
