import React, { Component } from 'react';

import './ContactDetails.css'

import facebook from './facebook.png';
import zalo from './zalo.jpg';

class ContactDetails extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <div className="facebook">
                    <img src={facebook} alt="Facebook QRcode" /><br />
                    <a className="link" href={this.props.facebook_link}>Facebook: Huỳnh Ngọc Quang</a>
                </div>
                <div className="zalo">
                    <img src={zalo} alt="Zalo QRcode" /><br />
                    <a className="link" href={this.props.zalo_link}>Zalo: Huỳnh Ngọc Quang</a>
                </div>
            </div >
        );
    }
}

export default ContactDetails;