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

"use client"

import styles from './styles.module.css'
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Orders() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components">Your account</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Your orders</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className={styles.h1}>Your orders</h1>

            <div className="flex">
                <Input type="searchallorders" placeholder="Search all orders" />
                <Button about='Search all orders' aria-label='Search all orders' variant='default'>
                    <Search height={200} width={200} />
                </Button>
            </div>
        </>
    )
}