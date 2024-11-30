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

import { Button } from '@/components/ui/button'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Link href="/login">
          <Button about='Log in' aria-label='Log in' variant='default'>
            <LogInIcon className='w-4 h-4' />
            Log in
            </Button>
        </Link>
      </div>
      <Link href="/privacy&terms">Privacy & Terms</Link>
      <Link href="/contactUs">Contact Us</Link>
      <Link href="/changeRegion">Change region</Link>
      <div>
        2024 SSS Corp.
      </div>
    </>
  )
}