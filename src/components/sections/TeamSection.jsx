import React from 'react';

const TeamMember = ({ name, role, image, description }) => (
  <div className="bg-blue-50 rounded-lg p-4 mb-4">
    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover mb-2"
        />
        <h4 className="font-semibold text-center">{name}</h4>
        <p className="text-sm text-gray-500 text-center">{role}</p>
      </div>
      <p className="text-gray-600 flex-1">{description}</p>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO',
      image: 'people.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'Lina Williams',
      role: 'Design Lead',
      image: 'people.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      name: 'John Smith',
      role: 'Developer',
      image: 'people.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </p>
      
      <div className="flex flex-col gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;