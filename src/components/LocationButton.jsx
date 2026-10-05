import { LocateFixed } from 'lucide-react'

export default function LocationButton({ onClick, disabled = false }) {
  return (
    <button type="button" className="secondary-button" onClick={onClick} disabled={disabled}>
      <LocateFixed size={16} />
      Use My Location
    </button>
  )
}
