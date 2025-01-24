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

import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LogInModal from "../feature/login/LogInModal";
import LanguageSelection from "../feature/language/LanguageSelection";

export default function Header() {
    return (
        <div className="flex justify-between px-10 pt-8 pb-4">
            <Link href="/">
                <Image
                    src="/SHOPVERSE_logo.png" // Image path in the `public` folder
                    alt="Example Image"
                    width={500} // Set the width
                    height={100} // Set the height
                />
            </Link>
            <div className="flex items-center justify-self-end">
                <div>
                    <div className="pb-2">
                        <LogInModal />
                        <Link href="/signup">
                            <Button variant="ghost">Sign up</Button>
                        </Link>
                        <LanguageSelection />
                        <Link href="/account">
                            <Button variant="ghost">
                                <User />
                            </Button>
                        </Link>
                        <Link href="/cart">
                            <Button variant="ghost">
                                <ShoppingCart />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex w-full max-w-sm items-center">
                        <Input type="searchitems" placeholder="Search items" />
                        <Button about='Search Items' aria-label='Search Items' variant='default'>
                            <Search height={200} width={200} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}