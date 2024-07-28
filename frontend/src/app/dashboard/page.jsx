"use client";

import { useEffect, useState } from "react";

let io;
if (typeof window !== "undefined") {
  io = require("socket.io-client");
}

let socket;

import { LogoutButton } from "@/components/custom/LogoutButton";

export default function DashboardRoute() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    // Initialize socket only on the client
    if (io) {
      socketInitializer();

      return () => {
        if (socket) {
          socket.disconnect();
        }
      };
    }
  }, []);

  async function socketInitializer() {
    // Fetch data only on the client
    if (typeof window !== "undefined") {
      await fetch("/api/chat");

      socket = io();

      socket.on("receive-message", (data) => {
        setAllMessages((pre) => [...pre, data]);
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (socket) {
      console.log("emitted");

      socket.emit("send-message", {
        username,
        message,
      });

      setMessage("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Dashboard</h1>
      <LogoutButton />

      <div>
        <h1>Chat app</h1>

        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div>
          {allMessages.map(({ username, message }, index) => (
            <div key={index}>
              {username}: {message}
            </div>
          ))}

          <br />

          <form onSubmit={handleSubmit}>
            <input
              name="message"
              placeholder="enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete={"off"}
            />

            <br />
            <br />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
