import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

type Message = { type: "message"; value: string; date: Date };

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState<undefined | WebSocket>(undefined);
  const [messages, setMessages] = useState<Array<Message>>([]);

  function handleSubmit() {
    socket?.send(JSON.stringify({ type: "message", value: input }));
  }

  useEffect(() => {
    const ws = new WebSocket("ws:168.119.126.142:5050");
    ws.onopen = function (event) {
      ws.onmessage = function (event) {
        const data = JSON.parse(event.data);
        setMessages((prevState) => {
          return [data, ...prevState];
        });
      };
    };
    setSocket(ws);
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
      <div className="pt-4">
        {messages.map((message) => (
          <div key={message.value + message.date}>
            <div className="font-light text-sm">
              {new Date(message.date).toLocaleString()}
            </div>
            <div className="text-xl">{message.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
