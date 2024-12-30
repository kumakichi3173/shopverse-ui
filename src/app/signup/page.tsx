// /*
//  * Copyright (c) 2024 - Shiny Superb Star
//  * All rights reserved.
//  *
//  * This file is the property of Shiny Superb Star.
//  * Unauthorized use, copying, or distribution is strictly prohibited.
//  * Shiny Superb Star reserves the right to take legal action
//  * against any person or entity who makes use of this file without the
//  * express written permission of Shiny Superb Star.
//  * 
//  */

"use client"; // to use useState

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import styles from './styles.module.css'
import { Button } from '@/components/ui/button'

export default function FormWithoutReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, 
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...

    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <div>
        Create your account
      </div>
      <input
        {...register('email', {
          required: "Email is required"
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{errors.email.message?.toString()}</p>
      )}
      <input
        {...register('password', {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 charcters",
          },
        })}
        type="password"
        minLength={8}
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message?.toString()}</p>
      )}
      <input
        {...register('confPassword', {
          required: "Password is required",
          validate: (value) =>
            value === getValues("password") || "Password must match",
        })}
        minLength={8}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />
      {errors.confPassword && (
        <p className="text-red-500">{errors.confPassword.message?.toString()}</p>
      )}
      <div className={styles.buttoncontainer}>
          <Button 
            disabled={isSubmitting}
            type="submit"
            aria-label='Submitxs' 
            variant='default'>
            Submit
          </Button>
      </div>
    </form>
  );
}