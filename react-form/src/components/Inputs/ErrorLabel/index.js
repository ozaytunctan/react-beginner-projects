import "./styles.modules.css";

export default function ErrorLabel({errorMessage,touched}) {
    return (
        <div className="error-label">
            { (errorMessage && touched) && <span>{errorMessage}</span>}
        </div>
    )
}