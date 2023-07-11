export const UserFixture = (override = {}) => ({
  _id: '6243571fcae8b062010a6717',
  username: 'Navid_Ansari',
  email: 'navid@gmail.com',
  fname: 'Navid',
  lname: 'Ansari',
  dob: '25-07-1990',
  password: 'NavidAnsari1!',
  role: [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ],
  __v: 0,
  ...override
})

export const MockedUser = (override = {}) => ({
  _id: '6243571fcae8b062010a6717',
  username: 'Navid_Ansari',
  email: 'navid@gmail.com',
  fname: 'Navid',
  lname: 'Ansari',
  dob: '25-07-1990',
  password: 'NavidAnsari1!',
  role: [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ],
  __v: 0,
  ...override
})
