import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile'
import Navbar from './components/Navbar';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0();
  return (
    isLoading ? 
    (
      <p>Loading...</p>
    ):
    (
    <div>
      <LoginButton />
      <Navbar />
      <LogoutButton />
    </div>
    )
  );
}

export default App;
