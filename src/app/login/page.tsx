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
import { User2Icon} from 'lucide-react'
import styles from './styles.module.css'
import { AppleMac, GoogleCircle } from 'iconoir-react'

export default function LogIn() {
  return (
    <>
      <div className={styles.buttoncontainer}>
        <Link href="/gSignup">
          <Button about='Google sign up' aria-label='Google sign up' variant='default'>
            <GoogleCircle height={200} width={200} />
            Sign up with Google
            </Button>
        </Link>
      </div>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
/>
      <div className={styles.buttoncontainer}>
        <Link href="/aSignup">
          <Button about='Apple sign up' aria-label='Apple sign up' variant='default'>
          <AppleMac  height={200} width={200} />
            Sign up with Apple
            </Button>
        </Link>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Link href="/signup">
          <Button about='Sign up' aria-label='Sign up' variant='default'>
            <User2Icon  height={200} width={200} />
            Create a new account
            </Button>
        </Link>
      </div>
    </>
  )
}