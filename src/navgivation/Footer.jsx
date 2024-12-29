import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="mb-4 bg-transparent">
        <a href="/privacy-policy" className="text-white hover:text-gray-400 mx-3 bg-transparent">Privacy Policy</a>
        <a href="/terms-of-service" className="text-white hover:text-gray-400 mx-3 bg-transparent">Terms of Service</a>
      <div className="mt-4 bg-transparent flex justify-center">
        <a  href="https://www.facebook.com/yourpage" className="text-white hover:text-gray-400 mx-3 bg-transparent"><FaFacebook /></a>
        <a  href="https://www.twitter.com/yourprofile" className="text-white hover:text-gray-400 mx-3 bg-transparent"><FaTwitter /></a>
        <a  href="https://www.instagram.com/yourprofile" className="text-white hover:text-gray-400 mx-3 bg-transparent">Inst</a>
      </div>
      </div>
      <div className="bg-transparent">
        <p className="bg-transparent">&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
