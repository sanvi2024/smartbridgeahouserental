import React from 'react';
import { Building2, Home, BadgeCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="relative py-20 overflow-hidden mt-7 ">
      {/* Decorative elements */}

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Home className="text-white" size={36} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center">
              About Rentzy
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-4"></div>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            Rentzy is a leading real estate agency that specializes in helping
            clients buy, sell, and rent properties in the most desirable
            neighborhoods. Our team of experienced agents is dedicated to providing
            exceptional service and making the buying and selling process as smooth
            as possible.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            Our mission is to help our clients achieve their real estate goals by
            providing expert advice, personalized service, and a deep understanding
            of the local market. Whether you are looking to buy, sell, or rent a
            property, we are here to help you every step of the way.
          </p>

          <p className="mb-8 text-gray-700 leading-relaxed text-lg">
            Our team of agents has a wealth of experience and knowledge in the real
            estate industry, and we are committed to providing the highest level of
            service to our clients. We believe that buying or selling a property
            should be an exciting and rewarding experience, and we are dedicated to
            making that a reality for each and every one of our clients.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Premium Properties</h3>
              <p className="text-gray-600">Access to exclusive listings in the most sought-after neighborhoods.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional advice from experienced real estate specialists.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-sm border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-pink-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Personalized assistance throughout your entire real estate journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}