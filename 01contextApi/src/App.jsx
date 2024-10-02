import './App.css'
import CreateUser from './components/CreateUser'
import DisplayUsers from './components/DisplayUsers'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>Learn how to works react context api</h1>
      <CreateUser />
      <DisplayUsers />
    </UserContextProvider>
  )
}

export default App
