import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modals",
  initialState: {
    loginSideBar: false,
    jobSeekerProfile: {
      careerModal: false,
      educationModal: false,
      employmentModal: false,
      itSkillsModal: false,
      keySkillsModal: false,
      personalDetailsModal: false,
      profileHeaderModal: false,
      projectsModal: false,
      resumeHeadlineModal: false,
    },
    companyProfile: {
      companyHeaderModal: false,
      addJobModal: false,
    },
  },
  reducers: {
    toggleLoginSideBar: (state) => {
      state.loginSideBar = !state.loginSideBar;
    },
    toggleCareerModal: (state) => {
      state.jobSeekerProfile.careerModal = !state.jobSeekerProfile.careerModal;
    },
    toggleEducationModal: (state) => {
      state.jobSeekerProfile.educationModal =
        !state.jobSeekerProfile.educationModal;
    },
    toggleEmploymentModal: (state) => {
      state.jobSeekerProfile.employmentModal =
        !state.jobSeekerProfile.employmentModal;
    },
    toggleItSkillsModal: (state) => {
      state.jobSeekerProfile.itSkillsModal =
        !state.jobSeekerProfile.itSkillsModal;
    },
    toggleKeySkillsModal: (state) => {
      state.jobSeekerProfile.keySkillsModal =
        !state.jobSeekerProfile.keySkillsModal;
    },
    togglePersonalDetailsModal: (state) => {
      state.jobSeekerProfile.personalDetailsModal =
        !state.jobSeekerProfile.personalDetailsModal;
    },
    toggleProfileHeaderModal: (state) => {
      state.jobSeekerProfile.profileHeaderModal =
        !state.jobSeekerProfile.profileHeaderModal;
    },
    toggleProjectsModal: (state) => {
      state.jobSeekerProfile.projectsModal =
        !state.jobSeekerProfile.projectsModal;
    },
    toggleResumeHeadlineModal: (state) => {
      state.jobSeekerProfile.resumeHeadlineModal =
        !state.jobSeekerProfile.resumeHeadlineModal;
    },
    toggleCompanyHeaderModal: (state) => {
      state.companyProfile.companyHeaderModal =
        !state.companyProfile.companyHeaderModal;
    },
    toggleAddJobModal: (state) => {
      state.companyProfile.addJobModal = !state.companyProfile.addJobModal;
    },
  },
});

export const {
  toggleLoginSideBar,
  toggleCareerModal,
  toggleEducationModal,
  toggleEmploymentModal,
  toggleItSkillsModal,
  toggleKeySkillsModal,
  togglePersonalDetailsModal,
  toggleProfileHeaderModal,
  toggleProjectsModal,
  toggleResumeHeadlineModal,
  toggleCompanyHeaderModal,
  toggleAddJobModal,
} = modalSlice.actions;

export default modalSlice.reducer;
