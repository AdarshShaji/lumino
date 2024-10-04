'use client';  // Add this line at the top of the file

import AuthForm from '../components/AuthForm'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Lumino</h1>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <AuthForm />
      )}
    </main>
  )
}
