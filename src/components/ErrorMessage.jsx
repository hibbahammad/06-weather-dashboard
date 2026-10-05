import { AlertTriangle, RotateCcw, X } from 'lucide-react'

export default function ErrorMessage({ message, onRetry, onDismiss }) {
  return (
    <div className="error-message" role="alert">
      <div className="error-icon">
        <AlertTriangle size={18} />
      </div>
      <div className="error-copy">
        <h3>Unable to load weather</h3>
        <p>{message}</p>
      </div>
      <div className="error-actions">
        {onRetry && (
          <button type="button" className="primary-button small-button" onClick={onRetry}>
            <RotateCcw size={14} />
            Try again
          </button>
        )}
        {onDismiss && (
          <button type="button" className="icon-button tiny-icon" onClick={onDismiss} aria-label="Dismiss error">
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  )
}
