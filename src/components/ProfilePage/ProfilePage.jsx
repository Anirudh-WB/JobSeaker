import React from "react";
import ProfileHeader from "./ProfileHeader";
import QuickLinks from "./QuickLinks";
import Resume from "./Resume";

function ProfilePage() {
  return (
    <div className="py-8 px-48 w-full h-full overflow-auto flex flex-col gap-5">
      <ProfileHeader />
      <div className="flex gap-5">
        <QuickLinks />
        <Resume />
      </div>
    </div>
  );
}

export default ProfilePage;
