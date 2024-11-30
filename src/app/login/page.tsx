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

export default function LogIn() {
  return (
    <>
      <div>
        <Link href="/"><button>Sign up with Google</button></Link>
      </div>
      <div>
        <Link href="/"><button>Sign up with Apple</button></Link>
      </div>
      <div>
        or
      </div>
      <div>
        <Link href="/signup"><button>Sign up</button></Link>
      </div>
    </>
  )
}