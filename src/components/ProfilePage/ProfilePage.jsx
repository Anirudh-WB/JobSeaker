import React from "react";
import ProfileHeader from "./ProfileHeader";
import QuickLinks from "./QuickLinks";

function ProfilePage() {
  return (
    <div className="py-8 px-48 w-full h-full overflow-auto flex flex-col gap-5">
      <ProfileHeader />
      <QuickLinks />
    </div>
  );
}

export default ProfilePage;
