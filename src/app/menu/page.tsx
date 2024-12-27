/*
 * Copyright (c) 2024 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

'use client'; // This tells Next.js that the file is a client-side component

import React, { useState } from "react";

const ItemCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 100); // 1000 is 1 sec
  };

  const countDown = () => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 100); // 1000 is 1 sec
  };

  return (
    <div>
      <p>
      quantity: 
      <button onClick={countDown}>-</button>
      <span>{count}</span>
      <button onClick={countUp}>+</button>
      </p>
    </div>
  );
};

export default ItemCounter;