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

// TODO: use zod 

// to use useState
"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input";

export default function SignUp() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-4 gap-y-2 items-center">
      <div>
        Create your account
      </div>
      <Input
        {...register('email', {
          required: "Email is required"
        })}
        type="email"
        placeholder="Email"
        className="grid w-full max-w-sm it"
      />
      {errors.email && (
        <p className="text-red-500">{errors.email.message?.toString()}</p>
      )}
      <Input
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
        className="grid w-full max-w-sm it"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message?.toString()}</p>
      )}
      <Input
        {...register('confPassword', {
          required: "Confirm Password is required",
          validate: (value) =>
            value === getValues("password") || "Password must match",
        })}
        minLength={8}
        type="password"
        placeholder="Confirm password"
        className="grid w-full max-w-sm it"
      />
      {errors.confPassword && (
        <p className="text-red-500">{errors.confPassword.message?.toString()}</p>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        aria-label='Submitxs'
        variant='default'>
        Submit
      </Button>
    </form>
  );
}
