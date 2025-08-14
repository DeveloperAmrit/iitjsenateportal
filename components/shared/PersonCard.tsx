import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

interface PersonCardProps {
  person: {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;
    links: {
      linkedin?: string;
      instagram?: string;
    };
    image: string;
  };
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="relative h-64 w-full">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
        <p className="text-blue-600 font-semibold mb-4">{person.position}</p>
        
        <div className="space-y-3">
          {/* Email */}
          <div className="flex items-center text-gray-600">
            <Mail size={16} className="mr-2 text-blue-500" />
            <a 
              href={`mailto:${person.email}`}
              className="hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              {person.email}
            </a>
          </div>
          
          {/* Phone */}
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-2 text-green-500" />
            <a 
              href={`tel:${person.phone}`}
              className="hover:text-green-600 transition-colors duration-200 text-sm"
            >
              {person.phone}
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            {person.links.linkedin && (
              <a
                href={person.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            )}
            {person.links.instagram && (
              <a
                href={person.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
