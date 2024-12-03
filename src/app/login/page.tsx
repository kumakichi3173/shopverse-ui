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
import styles from './styles.module.css'

export default function LogIn() {
  return (
    <>
      <div className={styles.buttoncontainer}>
        <Link href="/gSignup">
          <Button about='Google sign up' aria-label='Google sign up' variant='default'>
            <LogInIcon className='w-4 h-4' />
            Sign up with Google
            </Button>
        </Link>
      </div>
      <div className={styles.buttoncontainer}>
        <Link href="/aSignup">
          <Button about='Apple sign up' aria-label='Apple sign up' variant='default'>
            <LogInIcon className='w-4 h-4' />
            Sign up with Apple
            </Button>
        </Link>
      </div>
      <div className={styles.buttoncontainer}>
        or
      </div>
      <div className={styles.buttoncontainer}>
        <Link href="/signup">
          <Button about='Sign up' aria-label='Sign up' variant='default'>
            <LogInIcon className='w-4 h-4' />
            Create a new account
            </Button>
        </Link>
      </div>
    </>
  )
}