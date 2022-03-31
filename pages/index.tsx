import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<string>>([]);
  function handleSubmit() {
    setMessages([...messages, input]);
  }
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
    </div>
  );
};

export default Home;
