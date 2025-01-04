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
import styles from './styles.module.css'

const ItemCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
      // 1000 is 1 sec
    }, 100);
  };

  const countDown = () => {
    setTimeout(() => {
      setCount(prevState => {
        if (prevState > 1) {
          return prevState - 1;
        }
        return prevState;
      });
    }, 100); // 1000 is 1 sec
  };

  return (
    <div>
      quantity:
      <div className={styles.counterbutton}>
        <div className={styles.counterbuttonwrapper}>
          <div className={styles.counterbuttonspan}>
            <button onClick={countDown}>-</button>
          </div>
          <div className={styles.countervalue}>
            {count}
          </div>
          <div className={styles.counterbuttonspan}>
            <button onClick={countUp}>+</button>
          </div>
        </div>
      </div>
      Color/Size
      Delivery Method
      Coupon
      Point
      Total
    </div>
  );
};

export default ItemCounter;