import React, { useState } from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import CEO from '../assets/CEO.jpg';
import ceo2 from '../assets/ceo2.jpg';

const founders = [
  {
    id: 1,
    name: "Ajith Reddy",
    role: "CEO & Developer",
    image: CEO,
    email: "ajithreddy1441@gmail.com",
    instagram: "",
    linkedin: "linkedin.com/sarahjohnson"
  },
  {
    id: 2,
    name: "Siddhardha Reddy",
    role: "CTO & Designer",
    image: ceo2,
    email: "michael@example.com",
    Instagram: "",
    linkedin: "linkedin.com/michaelchen"
  }
];

const Founders = () => {
  const [activeFounder, setActiveFounder] = useState(null);

  return (
    <span className=" bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 underline">Meet Our Founders</h2>
        
        <div className="relative h-[500px] mb-16">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                activeFounder === null
                  ? founder.id === 1
                    ? 'w-1/2 left-0'
                    : 'w-1/2 left-1/2'
                  : activeFounder === founder.id
                  ? 'w-full left-0 z-20'
                  : 'w-0 left-0 opacity-0'
              }`}
              onMouseEnter={() => setActiveFounder(founder.id)}
              onMouseLeave={() => setActiveFounder(null)}
            >
              <div className="relative h-full group">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-lg mb-4">{founder.role}</p>
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      <span>{founder.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Instagram size={18} />
                      <span>{founder.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin size={18} />
                      <span>{founder.linkedin}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
};

export default Founders;
