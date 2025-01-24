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

import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-auto p-4">
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex gap-4 justify-center">
                <Link className="underline" href="/privacy&terms">Privacy & Terms</Link>
                <Link className="underline" href="/contactUs">Contact Us</Link>
                <Link className="underline" href="/changeRegion">Consumer health</Link>
                <Link className="underline" href="/changeRegion">Your Privacy Choices</Link>
            </div>
            <div className="flex justify-center">
                2024 SSS Corp.
            </div>
        </div>
    )
}