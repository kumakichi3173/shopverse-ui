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
import { Search } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
import Image from 'next/image';

export default function Orders() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/account">Your account</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Your orders</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className={styles.h1}>Your orders</h1>
            <div>
                <div className="flex h-8 justify-center space-x-1 text-sm">
                    <div className={styles.p1}>
                        Orders</div>
                    <Separator orientation="vertical" />
                    <div className={styles.p1}>
                        Buy Again</div>
                    <Separator orientation="vertical" />
                    <div className={styles.p1}>
                        Not Yet Shipped</div>
                    <Separator orientation="vertical" />
                    <div className={styles.p1}>
                        Digital Orders</div>
                    <Separator orientation="vertical" />
                    <div className={styles.p1}>
                        Local Store Orders</div>
                    <Separator orientation="vertical" />
                    <div className={styles.p1}>
                        Cancelled Orders</div>
                </div>
                <Separator className="my-4" />
            </div>
            <div className="flex justify-center p-4">
                <div className='flex gap-4'>
                    2 orders placed in
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="--Select--" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="last 30 days">last 30 days</SelectItem>
                                <SelectItem value="past 3 months">past 3 months</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="Achived Orders">Achived Orders</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input type="searchallorders" placeholder="Search all orders" className="w-[500px]" />
                </div>
                <Button about='Search all orders' aria-label='Search all orders' variant='default'>
                    <Search height={200} width={200} />
                </Button>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex">
                    <Card className="w-[950px]">
                        <CardHeader className='pb-0'>
                            <div className="flex justify-between col-center h-12 space-x-1 text-sm pb-2">
                                <Separator orientation="vertical" className="opacity-0" />
                                <div className='flex flex-col'>
                                    <Label>
                                        Order placed
                                    </Label>
                                    <div className={styles.p2}>
                                        January 11, 2025</div>
                                </div>
                                <Separator orientation="vertical" />
                                <div className='flex flex-col'>
                                    <Label>
                                        Total
                                    </Label>
                                    <div className={styles.p2}>
                                        $59.09
                                    </div>
                                </div>
                                <Separator orientation="vertical" />
                                <HoverCard>
                                    <div className='flex flex-col'>
                                        <Label>
                                            Ship to
                                        </Label>
                                        <HoverCardTrigger about='test'>
                                            <Button variant="link" className="pt-0 pb-2 pl-0 pr-0">Saori Shigehisa</Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            2222 W BEARDSLEY RD APT 2047
                                            PHOENIX, AZ 85027-3451
                                            United States
                                        </HoverCardContent>
                                    </div>
                                </HoverCard>
                                <Separator orientation="vertical" />
                                <div className={styles.p1}>
                                    <Button variant="link">
                                        <Link href='/orderdetails'>Order details</Link>
                                    </Button>
                                </div>
                                <Separator orientation="vertical" />
                                <div className={styles.p1}>
                                    <Button variant="link">
                                        <Link href='/invoice'>Invoice</Link>
                                    </Button>
                                </div>
                                <Separator orientation="vertical" className="opacity-0" />
                            </div>
                            <div className="border-t border-gray-300 my-4"></div>
                        </CardHeader>
                        <CardContent>
                            <Button className="pb-9 pl-0" variant="link">
                                <Link href='/rectangleSunglasses'>
                                    <div className={styles.p3}>
                                        Rectangle Sunglasses
                                    </div>
                                </Link>
                            </Button>
                            <CardTitle>Arriving Thursday</CardTitle>
                            <CardDescription>Shipped</CardDescription>
                            <Link href='/rectangleSunglasses'>
                                <Image
                                    src="/Rectangle_Sunglasses.png"
                                    alt="Example Image"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <Label htmlFor="returnItems" className="">Return items: Eligible through February 15, 2025</Label>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>Track package</Button>
                            <Button>Get product support</Button>
                            <Button variant="outline">Reurn items</Button>
                            <Button variant="outline">Share gift receipt</Button>
                            <Button variant="outline">Leave seller feedback</Button>
                            <Button variant="outline">Write a product review</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex">
                    <Card className="w-[950px]">
                        <CardHeader className='pb-0'>
                            <div className="flex justify-between col-center h-12 space-x-1 text-sm pb-2">
                                <Separator orientation="vertical" className="opacity-0" />
                                <div className='flex flex-col'>
                                    <Label>
                                        Order placed
                                    </Label>
                                    <div className={styles.p2}>
                                        January 11, 2025</div>
                                </div>
                                <Separator orientation="vertical" />
                                <div className='flex flex-col'>
                                    <Label>
                                        Total
                                    </Label>
                                    <div className={styles.p2}>
                                        $59.09
                                    </div>
                                </div>
                                <Separator orientation="vertical" />
                                <HoverCard>
                                    <div className='flex flex-col'>
                                        <Label>
                                            Ship to
                                        </Label>
                                        <HoverCardTrigger about='test'>
                                            <Button variant="link" className="pt-0 pb-2 pl-0 pr-0">Saori Shigehisa</Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            2222 W BEARDSLEY RD APT 2047
                                            PHOENIX, AZ 85027-3451
                                            United States
                                        </HoverCardContent>
                                    </div>
                                </HoverCard>
                                <Separator orientation="vertical" />
                                <div className={styles.p1}>
                                    <Button variant="link">
                                        <Link href='/orderdetails'>Order details</Link>
                                    </Button>
                                </div>
                                <Separator orientation="vertical" />
                                <div className={styles.p1}>
                                    <Button variant="link">
                                        <Link href='/invoice'>Invoice</Link>
                                    </Button>
                                </div>
                                <Separator orientation="vertical" className="opacity-0" />
                            </div>
                            <div className="border-t border-gray-300 my-4"></div>
                        </CardHeader>
                        <CardContent>
                            <Button className="pb-9 pl-0" variant="link">
                                <Link href='/rectangleSunglasses'>
                                    <div className={styles.p3}>
                                        Milliard Citric Acid 10 Pound
                                    </div>
                                </Link>
                            </Button>
                            <CardTitle>Delivered December 30
                            </CardTitle>
                            <CardDescription>Your package was left near the front door or porch.
                            </CardDescription>
                            <Link href='/Milliard Citric Acid 10 Pound.png'>
                                <Image
                                    src="/Milliard Citric Acid 10 Pound.png"
                                    alt="Example Image"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <Label htmlFor="returnItems" className="">Return items: Eligible through February 15, 2025</Label>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>Track package</Button>
                            <Button>Get product support</Button>
                            <Button variant="outline">Reurn items</Button>
                            <Button variant="outline">Share gift receipt</Button>
                            <Button variant="outline">Leave seller feedback</Button>
                            <Button variant="outline">Write a product review</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}