import { createSlice } from "@reduxjs/toolkit";

export const otherSlice = createSlice({
  name: "others",
  initialState: {
    canAccessCompany: false,
    canAccessJobSeeker: false,
  },
  reducers: {
    setCompanyAccess: (state) => {
      state.canAccessCompany = true;
      state.canAccessJobSeeker = false;
    },
    setJobSeekerAccess: (state) => {
      state.canAccessJobSeeker = true;
      state.canAccessCompany = false;
    },
  },
});

export const { setCompanyAccess, setJobSeekerAccess } = otherSlice.actions;

export default otherSlice.reducer;
