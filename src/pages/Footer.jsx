import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate()
  return (
   <div className="bg-[#1e1e1e] text-white py-10 px-6 md:px-16">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-[#B68B40]">ALLWEAR</h2>
      <p className="mt-2 text-sm text-gray-400">
        Premium fashion for men, women, and kids. Built on culture, style, and quality.
      </p>
      <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} AllWEAR. All rights reserved.</p>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-[#B68B40]">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a onClick={() => navigate('/')} className="hover:text-[#B68B40] cursor-pointer">Home</a></li>
        <li><a onClick={() => navigate('/category/men')}  className="hover:text-[#B68B40] cursor-pointer">Shop</a></li>
        <li><a  className="hover:text-[#B68B40] cursor-pointer">About Us</a></li>
        <li><a  className="hover:text-[#B68B40] cursor-pointer">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-[#B68B40] cursor-pointer">Customer Support</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-[#B68B40] cursor-pointer">Shipping & Returns</a></li>
        <li><a href="#" className="hover:text-[#B68B40] cursor-pointer">Size Guide</a></li>
        <li><a href="#" className="hover:text-[#B68B40] cursor-pointer">Order Tracking</a></li>
        <li><a href="#" className="hover:text-[#B68B40] cursor-pointer">FAQ</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3 text-[#B68B40]">Stay in the Loop</h3>
      <form className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="bg-[#B68B40] px-4 py-2 rounded cursor-pointer text-sm font-semibold hover:bg-[#a3772e]">
          Subscribe
        </button>
      </form>
      <div className="flex mt-4 space-x-4 text-xl">
        <a href="#" className="hover:text-[#B68B40] cursor-pointer"><FaFacebook/><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-[#B68B40] cursor-pointer"><FaInstagram /><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-[#B68B40] cursor-pointer"><FaXTwitter/><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer