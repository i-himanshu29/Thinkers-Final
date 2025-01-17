import React from 'react'
import img from "../assets/logo1.png"
import { Link } from 'react-router-dom'
function HeroSection() {
  const handleMailClick = () => {
    // Replace with the email address you want to use
    const email = "mauryahimanshu979@gmail.com";
    const subject = "Hello!";
    const body = "This is the body of the email.";
    // window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
};
  return (
    <>
    <div className="h-screen  justify-center justify-items-center align-middle w-screen flex my-auto">
        <div className="flex-col items-center justify-center justify-items-center">
          <img
              src={img}
              alt="Background"
              className=" flex mt-28 mb-10 object-cover opacity-70"
          />
          <p className="">CIN:U62099UP2023PTC189390</p>
          <p className="items-center">DIPP:149566</p>
        </div>

        {/* Overlay with textjustify-center justify-items-center items-center */}
        <div className="absolute  inset-0 flex-col p-20  bg-black bg-opacity-70">
            <h1 className="text-blue-300 text-4xl items-center justify-self-center mt-28 font-bold  font-serif animate-move-loop">Thinkers Corporation Pvt. Ltd. :</h1>
            <h2 className="text-white text-6xl  text-center text-wrap mt-28 animate-move-left-right font-bold font-serif">"Empowering Minds,  Connecting Ideas ,Shaping the Future."</h2>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex justify-items-start">
              <button 
                onClick={handleMailClick}
                className="text-xl hover:text-black hover:bg-red-300 mt-24 justify-start text-white bg-blue-900 w-32 h-14 rounded-md border border-blue-950">
                    Email us{`->`}
                </button>
              </div>
              <div className='flex justify-items-end'>
                <Link to="/registration">
                  <button className="text-xl hover:text-black hover:bg-red-300 mt-24 justify-self-end  text-white bg-blue-900 w-80 h-14 rounded-md border border-blue-950">
                    Your Message is Our Mission{`->`}
                </button>
                </Link>
              </div>
              
          </div>
          <div className="mt-2 flex-col justify-self-start">
              
          </div>
        </div>
    </div>
  </>
        
  )
}

export default HeroSection