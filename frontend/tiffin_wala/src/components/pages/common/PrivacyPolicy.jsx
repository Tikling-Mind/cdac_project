import React from 'react';
import { AlignMiddle } from 'react-bootstrap-icons';

const sectionStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f7f7f7',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
};

function PrivacyPolicy() {
  return (
    <div style={sectionStyle}>
<h1 style={{ textAlign: 'center' }}>Privacy Policy</h1><br></br>
      <h3 style={headingStyle}>Information We Collect</h3>
      <p style={textStyle}>
        We value your privacy and strive to protect your personal information.
        This privacy policy explains how we collect, use, and safeguard your data.
        We collect information such as your name, contact details, and address when you place an order with us.
        This information is used solely for processing your order and delivering the tiffin services you requested.
      </p>

      <h3 style={headingStyle}>How We Use Your Information</h3>
      <p style={textStyle}>
        Your personal information is used to fulfill your orders, provide customer support, and improve our services.
        We do not share your information with third parties unless required for delivery or legal purposes.
      </p>

      <h3 style={headingStyle}>Data Security</h3>
      <p style={textStyle}>
        We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
        However, no data transmission over the internet can be guaranteed to be 100% secure.
      </p>

      <h3 style={headingStyle}>Changes to Privacy Policy</h3>
      <p style={textStyle}>
        We may update our privacy policy from time to time. Any changes will be posted on this page.
        By continuing to use our services, you agree to the updated privacy policy.
      </p>

      <h3 style={headingStyle}>Contact Us</h3>
      <p style={textStyle}>
        If you have any questions or concerns about our privacy policy, please contact us at privacy@tiffin.com.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
