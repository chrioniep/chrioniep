import { Wordmark } from '@/components/brand/Wordmark'

export const metadata = { title: 'Create account' }

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <Wordmark size="lg" variant="mark" />
      <p className="font-sans text-sm text-muted">Sign-up screen — coming next.</p>
    </main>
  )
}
