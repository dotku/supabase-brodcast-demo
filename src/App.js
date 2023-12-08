import "./App.css";

import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { router } from "./router";

const clientA = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const channelA = clientA.channel("room-1");
const channelB = clientA.channel("room-1");

// Simple function to log any messages we receive
function messageReceived(payload) {
  console.log(payload);
}

export const RootContext = createContext({ channelA });

function App() {
  const [messages, setMessages] = useState([]);

  console.log("App");
  useEffect(() => {
    console.log("useEffect");
    channelB.subscribe((status) => {
      // Wait for successful connection
      if (status !== "SUBSCRIBED") {
        return null;
      }
    });
    channelA
      .on("broadcast", { event: "test" }, (payload) =>
        setMessages((messages) => [...messages, payload])
      )
      .subscribe();
  }, []);

  return (
    <RootContext.Provider value={{ messages, channelA, channelB }}>
      <RouterProvider router={router} />
    </RootContext.Provider>
  );
}

export default App;
