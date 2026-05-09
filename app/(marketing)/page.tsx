import { Wordmark } from '@/components/brand/Wordmark'

export const metadata = { title: 'onion' }

export default function MarketingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <Wordmark size="display" variant="dot" />
      <p className="font-sans text-body text-muted text-center max-w-sm">
        Active recall for serious learners. Placeholder — marketing screen coming next.
      </p>
    </main>
  )
}
