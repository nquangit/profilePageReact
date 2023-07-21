import './ContactDetails.css'

import facebook from './facebook.png';
import zalo from './zalo.jpg';

function ContactDetails() {
    return (
        <div className="contact" id="contact">
            <div className="facebook">
                <img src={facebook} alt="Facebook QRcode" /><br />
                <a className="link" href="https://www.facebook.com/quangIT2k4">Facebook: Huỳnh Ngọc Quang</a>
            </div>
            <div className="zalo">
                <img src={zalo} alt="Zalo QRcode" /><br />
                <a className="link" href="##">Zalo: Huỳnh Ngọc Quang</a>
            </div>
        </div>
    );
}

export default ContactDetails;