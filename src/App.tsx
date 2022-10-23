import React from 'react';

function App() {
  let someNumber: number;

  someNumber = 0;

  someNumber = 777;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const env = process.env.IS_DEV_ENVIRONMENT ? 'This is the DEV Environment' : 'This is the PROD Environment';

  return (
    <>
      <h1>Hello, World!</h1>
      <h2>This is the number: {someNumber}</h2>
      <h3>{env}</h3>
    </>
  );
}

export default App;
