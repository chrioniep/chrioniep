import { Wordmark } from '@/components/brand/Wordmark'

export const metadata = { title: 'Sign in' }

export default function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <Wordmark size="lg" variant="mark" />
      <p className="font-sans text-sm text-muted">Sign-in screen — coming next.</p>
    </main>
  )
}
