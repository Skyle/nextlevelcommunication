import type { GetServerSideProps, NextPage } from "next";

import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<string>>([]);
  function handleSubmit() {
    setMessages([...messages, input]);
  }
  useEffect(() => {
    console.log("lol");
  }, []);

  return (
    <div>
      <div>
        <input
          className="border rounded shadow focus:outline-none p-2"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              handleSubmit();
            }
          }}
        ></input>
        <button
          className="border shadow rounded py-1 px-2 ml-3"
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Senden
        </button>
      </div>
      <div>
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
