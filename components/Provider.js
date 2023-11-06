"use client";
// Imports
import { Provider } from "react-redux";
import store from "@/store";
const ProviderComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComponent;
