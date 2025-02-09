
import avatar1 from '../../../../assets/1.svg';
import avatar2 from '../../../../assets/2.svg';
import avatar3 from '../../../../assets/3.svg';
import avatar4 from '../../../../assets/4.svg';
import avatar5 from '../../../../assets/5.svg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Cipher-9',
      role: 'Main Chain Developer',
      bio: 'A seasoned blockchain developer with extensive experience in DeFi and main chain development. Cipher-9 has contributed to several established crypto projects, ensuring scalability and security at every step.',
      image: avatar1,
    },
    {
      name: 'Vector-X',
      role: 'Crypto OG',
      bio: 'With 13 years in the crypto space, Vector-X is a true pioneer. As an ex-VC, he has seeded iconic projects like XTZ, ADA, TRX, IOTA, KNC, and LINK. His network and insights are unmatched.',
      image: avatar2,
    },
    {
      name: 'Ironclad',
      role: 'Security & Infra Guru',
      bio: 'Ironclad specializes in securing blockchain systems and building unbreakable infrastructure. His expertise ensures that CodeCraft remains resilient against all threats.',
      image: avatar3,
    },
    {
      name: 'Titan-42',
      role: 'Tokenomics Master',
      bio: 'Titan-42 is a master of token economics, game theory, and incentive design. His strategic insights drive the sustainable growth of CodeCraft’s ecosystem.',
      image: avatar4,
    },
    {
      name: 'PixelForge',
      role: 'Frontend Developer & Marketer',
      bio: 'Based in the US, PixelForge joined the team from the community. With 10 years of corporate development experience, he built the website frontend and creates marketing materials.',
      image: avatar5,
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-accent/20 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-textPrimary">{member.name}</h3>
                <p className="text-textPrimary/70">{member.role}</p>
              </div>
            </div>
            {/* Bio Section */}
            <p className="mt-6 text-textPrimary/80 text-left">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;