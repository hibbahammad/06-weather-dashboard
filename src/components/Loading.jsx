import { LoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <LoaderCircle size={28} className="spinner" />
      <p>Loading weather...</p>
    </div>
  )
}
