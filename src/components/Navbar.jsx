import SearchBar from './SearchBar'
import LocationButton from './LocationButton'
import ThemeToggle from './ThemeToggle'

export default function Navbar({
  searchValue,
  setSearchValue,
  onSearch,
  onLocationClick,
  theme,
  onThemeToggle,
  isLoading,
}) {
  return (
    <header className="navbar">
      <div className="brand" aria-label="Weather Dashboard logo">
        <div className="brand-mark">W</div>
        <div className="brand-copy">
          <span className="brand-title">Weatherly</span>
          <span className="brand-subtitle">Weather Dashboard</span>
        </div>
      </div>

      <div className="header-controls">
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={onSearch}
          disabled={isLoading}
        />

        <div className="utility-actions">
          <LocationButton onClick={onLocationClick} disabled={isLoading} />
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  )
}
