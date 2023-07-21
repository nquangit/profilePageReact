import fpt_logo_png from './fpt_logo.png';
import './FPT_Logo.css';

function FPTLogo() {
    return (
        <div className="fpt-logo">
            <img id="fpt-logo" src={fpt_logo_png} alt="FPT logo" />
        </div>
    );
}

export default FPTLogo;