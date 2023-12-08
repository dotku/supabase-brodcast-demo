import logo from "./logo.svg";
import "./App.css";

import { useContext, useState } from "react";
import { RootContext } from "./App";

function Home() {
  const { channelB } = useContext(RootContext);
  const [content, setContent] = useState("hello");

  const handleButtonClick = () => {
    if (!channelB) {
      console.log("No client B found!");
      return;
    }
    channelB.send({
      type: "broadcast",
      event: "test",
      payload: { message: content },
    });
    setContent(`rmsg: ${Date.now()}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleButtonClick}>sendMessage</button>
    </div>
  );
}

export default Home;
