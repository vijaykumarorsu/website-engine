import React from 'react';

const team = [
  { name: 'Mel', role: 'Master Barber', image: 'team1.jpg' },
  { name: 'Jared', role: 'Stylist', image: 'team2.jpg' },
  { name: 'Tina', role: 'Shave Specialist', image: 'team3.jpg' },
];

const VijayKumarOrsuTeam1 = () => {
  return (
    <section id="team" className="py-12 bg-white text-gray-800">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          The skilled professionals who make Mel’s Barber Shop the best in town.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <img
              src={`/${member.image}`}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-yellow-600">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VijayKumarOrsuTeam1;
