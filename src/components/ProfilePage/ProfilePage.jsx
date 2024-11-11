import React from "react";
import ProfileHeader from "./ProfileHeader";
import QuickLinks from "./QuickLinks";
import Resume from "./Resume";
import ResumeHeadline from "./ResumeHeadline";
import KeySkills from "./KeySkills";
import Projects from "./Projects";
import Careers from "./Careers";
import PersonalDetails from "./PersonalDetails";
import ItSkills from "./ItSkills";
import Education from "./Education";
function ProfilePage() {
  return (
    <div className="py-8 px-48 w-full h-full overflow-auto flex flex-col gap-5">
      <ProfileHeader />
      <div className="flex gap-5">
        <QuickLinks />
        <div className="flex flex-col gap-5 flex-1">
          <Resume />
          <ResumeHeadline />
          <KeySkills />
          <Education/>
          <ItSkills />
          <Careers />
          <Projects />
          <PersonalDetails />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
