import React, { createContext, ReactNode, useContext } from 'react'

const chatContext = createContext<{
  scroll: () => void
  //@ts-ignore
}>({})

export const ChatProvider = ({
  children,
  onScroll,
}: {
  children: ReactNode
  onScroll: () => void
}) => {
  const scroll = onScroll
  return (
    <chatContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </chatContext.Provider>
  )
}

export const useChat = () => useContext(chatContext)
