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

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"

import Link from 'next/link'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function UserAuthForm() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (

        <div className={cn("grid gap-6")}>
            <div>
                Create your account
            </div>
            <form method="post" action="/api/submit-signin">
                <div>
                    <label htmlFor="name">UserName:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" required />
                </div>
            </form>
            <form onSubmit={onSubmit}>
                <div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Link href="/submit">
                        <Button disabled={isLoading}>
                            {isLoading && (
                                <LoaderCircle className=" h-4 w-4 animate-spin" />
                            )}
                            Sign In with Email
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

// // react form ver.

// import React from "react";
// import { useForm } from "react-hook-form";

// const MyForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input 
//         {...register("name", { required: "Name is required" })} 
//         placeholder="Name" 
//       />
//       {errors.name && <p>{errors.name.message}</p>}

//       <input 
//         {...register("email", { required: "Email is required" })} 
//         placeholder="Email" 
//       />
//       {errors.email && <p>{errors.email.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;