import { useState, useContext } from 'react'
import './App.css'
import { Form } from './components/Form'
import { User } from './interfaces'
import { InputValueContext } from './context/InputValueContext'

export interface AppProps {
  headerText: string,
  extraText?: string
}

function App({ headerText, extraText = 'default-text' }: AppProps) {
  const [user, setUser] = useState<User | null>(null)
  const { state, dispatch } = useContext(InputValueContext)

  const fetchUser = () => {
    return (
      setUser({
        name: 'cin',
        age: 23,
        country: 'mx',
        address: {
          street: '13',
          zip: 85130
        },
        admin: false
      })
    )
  }

  return (
    <>
      <h1>Users</h1>
      <p>{headerText}</p>
      {extraText && <p>{extraText}</p>}
      {/* useState */}
      <hr />
      <h2>use State</h2>
      <button onClick={fetchUser}>User</button>
      {user && <p>{user.name}</p>}
      <hr />
      <Form />
      <hr />
      <br />
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({
        type: 'set-input-value-to-100'
      })}>Set value tu 100</button>
    </>
  )
}

export default App
