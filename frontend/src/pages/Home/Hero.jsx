import React from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/AppContext";

const Hero = () => {
  const categories = [
    { name: "Automobiles", active: true },
    { name: "Clothes and wear", active: false },
    { name: "Home interiors", active: false },
    { name: "Computer and tech", active: false },
    { name: "Tools, equipments", active: false },
    { name: "Sports and outdoor", active: false },
    { name: "Animal and pets", active: false },
    { name: "Machinery tools", active: false },
    { name: "More category", active: false },
  ];

  // Extract isLoggedIn alongside user to easily toggle the buttons
  const { user, isLoggedIn } = useStore();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto py-6 font-sans">
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col lg:flex-row gap-4">
        
        {/* --- Left Column: Categories Sidebar --- */}
        <div className="hidden lg:flex flex-col w-[250px] shrink-0">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-left px-4 py-2.5 rounded-md text-sm transition-colors ${
                category.active
                  ? "bg-blue-50 text-gray-900 font-medium"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* --- Middle Column: Main Banner --- */}
        <div
          className="flex-1 rounded-lg p-10 flex flex-col justify-center items-start relative overflow-hidden bg-gradient-to-br from-[#aee1d5] to-[#c9ede4] min-h-[360px]"
          style={{
            backgroundImage: "url('/images/bgs/banner-board.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-2xl text-gray-800 mb-1 relative z-10">
            Latest trending
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 relative z-10">
            Electronic items
          </h2>
          <button className="bg-white text-gray-800 font-medium px-6 py-2.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative z-10">
            Learn more
          </button>
        </div>

        {/* --- Right Column: Action Widgets --- */}
        <div className="flex flex-col w-full lg:w-[240px] shrink-0 gap-3">
          
          {/* User Widget */}
          <div className="bg-[#e3f0ff] rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              
              {/* Safe check for profile_url */}
              {user?.profile_url ? (
                <img
                  src={user.profile_url}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  alt="Profile"
                />
              ) : (
                <div className="bg-blue-200 p-2 rounded-full text-white">
                  <User className="w-8 h-8" strokeWidth={1.5} />
                </div>
              )}

              <div className="text-sm text-gray-800 leading-tight">
                Hi, {user?.username ? user.username : "user"} <br />{" "}
                {user?.username ? "Welcome back!" : " let's get started"}
              </div>
            </div>

            {/* Conditionally render Auth Buttons or Dashboard Button */}
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => navigate('/auth?page=register')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md text-sm transition-colors mb-2"
                >
                  Join now
                </button>
                <button 
                  onClick={() => navigate('/auth?page=login')}
                  className="w-full bg-white hover:bg-gray-50 text-blue-500 font-medium py-2 rounded-md text-sm border border-gray-200 transition-colors"
                >
                  Log in
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigate('/profile')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md text-sm transition-colors"
              >
                Go to Profile
              </button>
            )}
          </div>

          {/* Orange Offer Widget */}
          <div className="bg-[#F38332] rounded-lg p-4 flex-1 flex flex-col justify-center">
            <p className="text-white font-medium leading-snug">
              Get US $10 off <br /> with a new <br /> supplier
            </p>
          </div>

          {/* Teal Quotes Widget */}
          <div className="bg-[#55BDC3] rounded-lg p-4 flex-1 flex flex-col justify-center">
            <p className="text-white font-medium leading-snug">
              Send quotes with <br /> supplier <br /> preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;