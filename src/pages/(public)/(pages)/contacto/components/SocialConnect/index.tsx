import './SocialConnect.css'; // Ensure this CSS file is created
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function SocialConnect() {
  return (
    <div className="social-connect-container">
      <div className="image-container">
        {/* Assuming you have an image in your public folder or hosted */}
        <img src="https://img.committed-to-kids.com/img/motherhood/589/9-products-help-working-moms-through-their-chaotic-days.jpg" alt="User Working" />
      </div>
      <div className="connect-section">
        <h2>MÍDIA SOCIAL</h2>
        <h1>conecte-se conosco</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/angohost"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://www.youtube.com/@angohost"><FaYoutube /></a>
          <a href="https://linkedin.com"><FaLinkedinIn /></a>
         
          <a href="https://www.instagram.com/angohost/"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default SocialConnect;