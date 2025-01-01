"use client"
import React, { use } from 'react'
import { useUser } from '@clerk/nextjs'
import { Users } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { useEffect } from 'react';
import { db } from '../configs/db';
function Provider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    user && isNewUser();
  }, [user]);
  const isNewUser = async () => {
    const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (!result[0]) {
      await db.insert(Users).values({
        name: user?.firstName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl
      })
    }
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider