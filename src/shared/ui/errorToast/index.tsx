export const ErrorToast = ({
  message,
  show,
}: {
  message: string,
  show: boolean,
}) => {
  return (
    <div
      className={`toast position-absolute ${show && 'show'}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="..." className="rounded me-2" alt="..." />
        <strong className="me-auto">Error message</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  )
}
