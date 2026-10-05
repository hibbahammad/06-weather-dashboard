import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, onSearch, disabled = false }) {
  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault()
        onSearch()
      }}
    >
      <label className="search-input-group" htmlFor="city-search">
        <Search size={18} />
        <input
          id="city-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search city"
          aria-label="Search city"
          disabled={disabled}
        />
      </label>
      <button type="submit" className="primary-button" disabled={disabled}>
        Search
      </button>
    </form>
  )
}
