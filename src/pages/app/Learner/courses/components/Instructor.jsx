import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaLink } from "react-icons/fa";

const Instructor = () => {
  return (
    <div>

           <div
        className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 flex items-start space-x-6 text-white "
        style={{
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <div className="flex items-center">
          <img
            src="https://img-c.udemycdn.com/user/200_H/8678100_c955_2.jpg"
            alt="Instructor"
            // className="w-24 h-24 rounded-full"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Ricardo Mendoza</h2>
          <p className="text-gray-300 mb-4">
            Founder of Digital Work Studios and Interpretap
          </p>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaLink size={24} />
            </a>
          </div>
          <p className="font-semibold">
            Ricardo Mendoza (Founder of Digital Work Studios)
            <br />
            Filmmaker / Musician
          </p>
          <p className="text-gray-300 mt-2">
            I have over 15 years experience in storytelling, primarily in video.
            I have directed and produced two feature films that have screened at
            international film festivals and have been distributed
            internationally as well.
          </p>
          <p className="text-gray-300 mt-2">
            I am also a public speaking trainer and have successfully coached
            business leaders, politicians and entrepreneurs.
          </p>
          <p className="text-gray-300 mt-2">
            I am also a published musician with two full-length albums and I
            perform regularly in the U.S. and in Mexico. The albums "ANGST" and
            "No one has their sh** together" can be found at Spotify, iTunes and
            other streaming sites.
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default Instructor
