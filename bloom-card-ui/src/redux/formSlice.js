import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalInfo: {
      name: '',
      email: '',
    },
    companyInfo: {
      companyName: '',
      companyAddress: '',
    },
    socialAccounts: {
      twitter: '',
      linkedin: '',
    },
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
    },
    setSocialAccounts: (state, action) => {
      state.socialAccounts = action.payload;
    },
  },
});

export const { setPersonalInfo, setCompanyInfo, setSocialAccounts } = formSlice.actions;

export default formSlice.reducer;
