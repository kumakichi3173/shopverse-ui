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

import { Button } from "@/components/ui/button"
import Link from 'next/link';
import styles from './styles.module.css'
import {
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Account() {
    return (
        <>
            <h1 className={styles.h1}>Your Account</h1>
            <div className="grid grid-cols-3 gap-5 pl-20 pr-20">
                <div>
                    <Link href="/orders">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Your orders</CardTitle>
                                <CardDescription>Track, return, cancel your order, check invoice or buy again</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/editLogin">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Login & security</CardTitle>
                                <CardDescription>Edit login, your name, or mobile number</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/adresses">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Your adresses</CardTitle>
                                <CardDescription>Edit, remove or set default address</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/payment">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Your paymment</CardTitle>
                                <CardDescription>View all transactions, mmanage payment methods or settings</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/archived">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Archived orders</CardTitle>
                                <CardDescription>View and manage your archived orders</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/lists">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Your lists</CardTitle>
                                <CardDescription>View, modify, and share your lists, or create a new list</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="/orders">
                        <Button variant="outline" className="w-[410px] h-[90px]">
                            <CardHeader>
                                <CardTitle>Your messages</CardTitle>
                                <CardDescription>View, or respond to messages from us, sellers, and buyers</CardDescription>
                            </CardHeader>
                        </Button>
                    </Link>
                </div>
                {/* Empty space to fill the grid */}
                <div>
                    {/* Placeholder for empty space */}
                </div>
            </div>
        </>
    );
};