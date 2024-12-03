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

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogInIcon } from 'lucide-react'

export default function SignUp() {
    return (
        <>
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
                <div>
                    <Link href="/submit">
                    <Button about='Submit' aria-label='Submit' variant='default'>
                        <LogInIcon className='w-4 h-4' />
                        Submit
                        </Button>
                    </Link>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}