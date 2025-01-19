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

import styles from './styles.module.css'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Account() {
    return (
        <>
            <h1 className={styles.h1}>Your Account</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Your orders</CardTitle>
                    <CardDescription>Track, return, cancel your order, check invoice or buy again</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Login & security</CardTitle>
                    <CardDescription>Edit login, your name, or mobile number</CardDescription>
                </CardHeader>
            </Card>            
            <Card>
                <CardHeader>
                    <CardTitle>Your adresses</CardTitle>
                    <CardDescription>Edit, remove or set default address</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Your paymment</CardTitle>
                    <CardDescription>View all transactions, mmanage payment methods or settings</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Archived orders</CardTitle>
                    <CardDescription>View and manage your archived orders</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Your lists</CardTitle>
                    <CardDescription>View, modify, and share your lists, or create a new list</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Yor messages</CardTitle>
                    <CardDescription>View, or respond to messages from us, sellers, and buyers</CardDescription>
                </CardHeader>
            </Card>
        </>
    );
};