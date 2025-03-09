import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <SignIn />
      <div className="mt-4">
        <span>Don't have an account? </span>
        <Link href="/sign-up">
          <p>Sign up here</p>
        </Link>
      </div>
    </div>
  )
}

export default page
