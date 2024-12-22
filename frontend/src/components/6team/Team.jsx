import React from 'react';

const Team = () => {
  return (
    <section id="teamContent" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          <TeamMember  name="SANJEEV KHADKA" role="Founder,Developer" />
          <TeamMember  name="Aman Shrestha" role="Video Editor" />
          <TeamMember  name="Shivaji Aryal" role="Management Head" />
          <TeamMember  name="Aryan Subedi" role="Sales Head" />
          <TeamMember  name="Anuj Ghimire" role="Auditor" />
          <TeamMember  name="Krishal Prajuli" role="Auditor" />
          <TeamMember  name="Prashanna Gautam" role="Investor" />
          <TeamMember  name="Udaya Subedi" role="Investor" />
          <TeamMember  name="Himesh Lamichane" role="Investor" />
          <TeamMember  name="Darpan " role="Team Member" />
          <TeamMember  name="Avesheek" role="Team Member" />
          <TeamMember  name="Dipshon " role="Team Member" />
          <TeamMember  name="kushal" role="Team Member" />
          <TeamMember  name="Sameer " role="Team Member" />
          <TeamMember  name="Rahul" role="Team Member" />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
