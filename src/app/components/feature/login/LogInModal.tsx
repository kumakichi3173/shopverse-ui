/*
 * Copyright (c) 2025 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

"use client"

import { toast } from 'sonner'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AppleMac, GoogleCircle } from 'iconoir-react';
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';

export default function LogInModal() {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        toast.success(`Logged in with ${data.email}`)
        reset();
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" onClick={() => setIsOpen(true)}>Log in</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Log in</DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-y-2 pb-4">
                                <Input
                                    {...register('email', {
                                        required: "Email is required"
                                    })}
                                    type="email"
                                    placeholder="Email"
                                />
                                <Input
                                    {...register('password', {
                                        required: "Password is required",
                                    })}
                                    type="password"
                                    minLength={8}
                                    placeholder="Password"
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message?.toString()}</p>
                                )}
                            </div>
                            <DialogFooter className='pb-4'>
                                <Button type="submit" onSubmit={onSubmit}>Log in</Button>
                            </DialogFooter>
                        </form>
                        <Separator orientation="horizontal" className='mb-4' />
                        <div className='flex flex-col gap-y-2'>
                            <Button
                                onClick={() => {
                                    toast.success("Logged in with apple")
                                }}
                                about='Apple sign in' aria-label='Apple sign in' variant='default'>
                                <div className='flex items-center gap-x-2'>
                                    <AppleMac />
                                    Sign in with Apple
                                </div>
                            </Button>
                            <Button
                                onClick={() => {
                                    toast.success("Logged in with google")
                                }}
                                about='Google sign in' aria-label='Google sign in' variant='default'>
                                <GoogleCircle />
                                Sign in with Google
                            </Button>
                        </div>
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}