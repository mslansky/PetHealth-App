import React from 'react'

export default React.createContext({
  diaries: [],
  profiles: [],
  addProfile: () => {},
  addDiary: () => {},
  deleteDiary: () => {},
})