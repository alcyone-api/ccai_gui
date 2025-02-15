import React from 'react';
import ProfileSection from './Profile/ProfileSection';
import TechnologiesSection from './Profile/TechnologiesSection';
import TippingProgram from './Profile/TippingProgram';
import { useGlobalState } from '../Context/GlobalStateContext';

const ProfileWrapper: React.FC = () => {
  const { selectedIconUrl, username } = useGlobalState();

  const handleSaveProfile = (avatar: string, username: string) => {
    console.log('Profile saved:', { avatar, username });
  };

  return (
    <div className="font-tomorrow p-8 rounded-2xl relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6 font-tomorrow">Developer Profile</h2>
      <div className="space-y-8">
        {/* Profile Section */}
        <ProfileSection onSaveProfile={handleSaveProfile} />

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Tipping Program Section */}
        <TippingProgram isProfileComplete={!!selectedIconUrl && !!username.trim()} />

      </div>
    </div>
  );
};

export default ProfileWrapper;