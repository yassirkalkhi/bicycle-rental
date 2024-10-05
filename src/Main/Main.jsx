import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { MapPin, QrCode, Bike } from "lucide-react";

const Main = () => {
  const steps = [
    {
      icon: <QrCode className="h-12 w-12 text-emerald-500" />,
      title: "Unlock Your Bike",
      description: "Scan the QR code on the bike or enter the bike's number to unlock it."
    },
    {
      icon: <MapPin className="h-12 w-12 text-emerald-500" />,
      title: "Locate a Station",
      description: "Find a nearby bike station using our mobile app or website."
    },
    {
      icon: <Bike className="h-12 w-12 text-emerald-500" />,
      title: "Enjoy Your Ride",
      description: "Hop on and start your journey! Return the bike to any station when you're done."
    }
  ];

  return (
    <main className='py-4 bg-white dark:bg-[#121212] lg:pt-12 lg:pb-16 transition-colors duration-300 overflow-x-hidden'>
      
      {/* Hero Section */}
      <div className='px-4 mx-auto max-w-8xl lg:px-4 lg:text-center'>
        <a href="#" className='inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ease-linear rounded-full'>
          <span className='text-xs bg-emerald-500 rounded-full text-white px-4 py-1.5 mr-3'>Deals</span>
          <span className='mr-2 text-xs sm:text-sm font-medium'>Discover our new Plans for the next Month With 35% off</span>
          <i className="fa-solid fa-angle-right"></i>
        </a>
        
        <h1 className='hidden md:block mb-4 text-4xl font-bold tracking-tight text-emerald-400 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7'>
          Hit the road with our premium bike <br /> rentals and experience the joy of cycling!
        </h1>
        
        <h1 className='md:hidden mb-4 text-4xl font-bold tracking-tight text-emerald-400 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7'>
          Hit the road with our premium bike rentals and experience the joy of cycling!
        </h1>
        
        <p className='mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-60'>
          Every ride is enjoyable and comfortable. Join us in embracing a sustainable mode of transportation while creating unforgettable memories. Rent your bike today and pedal your way to new adventures!
        </p>
        
        <div className='flex flex-col mb-8 md:flex-row lg:justify-center'>
          <a href="#" className='text-white bg-emerald-500 hover:bg-emerald-600 hover:text-white/90 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center transition-colors duration-300'>
            Get Started
          </a>
          <a href="#" className='text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-600 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center transition-colors duration-300'>
            Nearby Stations
          </a>
        </div>
      </div>
      {/* End Hero Section */}
      
      {/* How to Use Section */}
      <div className=" bg-emerald-400 dark:bg-emerald-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-10 pt-20">
            How to Use Our <span className='whitespace-nowrap'>Bike-Sharing</span> Service
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pb-28 ">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-[#1e1e1e]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-md transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* End How to Use Section */}
      
    </main>
  );
};

export default Main;
