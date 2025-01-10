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
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
      <div className="flex justify-center">
        <div className="flex">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>GUCCI womens ring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>New without box</p>
              <p>GUCCI Japan</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="grid grid-rows-1 grid-cols-2 gap-1">
                <p>Quantity</p>
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
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-1">
                <Link href="/SaveForLater">
                  <p>Save for later</p>
                </Link>
                <Link href="/Remove">
                  <p>Remove</p>
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
          </Card>
        </div>
        <Card className="w-[350px]">
          <CardHeader>
            <p>Item(s) $5</p>
            <p>Shipping to ?</p>
            <p>Tax $0.25</p>
            <div className="border-t border-gray-300 my-4"></div>
            <CardTitle>Subtotal $5.25</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.buttoncontainer}>
              <Button>Checkout</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Purchase protected by <Link href="/SaveForLater">
              SSS Guarantee</Link></p>
          </CardFooter>
        </Card>
      </div>      
      </div>
  );
};

export default ItemCounter;