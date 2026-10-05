import { Search } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Search size={28} />
      </div>
      <h3>Search for a city</h3>
      <p>Search for a city to see the latest weather.</p>
    </div>
  )
}
