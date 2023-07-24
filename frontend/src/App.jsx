import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Message() {
  const [msg, setMsg] = useState('waiting...');
  axios.get("http://localhost:8080")
    .then(response => {
      setMsg(response)
    })
  return (
    <div>{JSON.stringify(msg.data)}</div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Message />
    </div>
  );
}
