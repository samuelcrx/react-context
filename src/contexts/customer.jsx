import { useState, createContext } from "react";

export const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = ({ name, email }) => {
    console.log('Dados provider ', { name, email });
    setName(name)
    setEmail(email)
  }

  return (
    <CustomerContext.Provider value={{ name, email, submit: handleSubmit }}>
      {children}
    </CustomerContext.Provider>
  )

}