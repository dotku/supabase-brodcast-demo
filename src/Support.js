import { useContext, useEffect, useState } from "react";
import { RootContext } from "./App";

export default function Support() {
  const { messages } = useContext(RootContext);

  return (
    <>
      <h1>Support</h1>
      {JSON.stringify(messages)}
    </>
  );
}
