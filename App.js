import React from "react";
import { NativeBaseProvider } from "native-base";
import App from "./src/screen/dashboard";

export default () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

