import React, { createContext } from 'react'
const PostContext = createContext()

export function PostProvider({children}) 

{
   const contextData = {}
  return (
    <PostContext.Provider value={contextData}>

      {children}

    </PostContext.Provider>
  )
}
