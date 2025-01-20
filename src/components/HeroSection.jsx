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
    <style>
      {`
        .btn-1 {
          transition: all 0.5s;
          font-size: 17px;
          padding: 1ch 2ch;
          background-color: white;
          color: #000;
          cursor: pointer;
          border: none;
          border-radius: 2px;
          box-shadow:
            2px 2px 0px hsl(0, 0%, 90%),
            4px 4px 0px hsl(0, 0%, 80%),
            6px 6px 0px hsl(0, 0%, 70%),
            8px 8px 0px hsl(0, 0%, 60%),
            10px 10px 0px hsl(0, 0%, 50%),
            12px 12px 0px hsl(0, 0%, 40%),
            14px 14px 0px hsl(0, 0%, 30%),
            16px 16px 0px hsl(0, 0%, 20%),
            18px 18px 0px hsl(0, 0%, 10%);
        }

        .btn-1:hover {
          background-color: hsl(0, 0%, 50%);
          color: #fff;
          box-shadow: none;
        }
    `}
    </style>
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
              {/* <!-- From Uiverse.io by mobinkakei -->  */}

              <button 
              onClick={handleMailClick}
              class="btn-1">Mail us:</button>
              </div>
              <div className='flex justify-items-end'>
                <Link to="/registration">
                <button class="btn-1">Your Message is Our Mission!</button>
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