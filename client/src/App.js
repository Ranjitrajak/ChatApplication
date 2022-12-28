
import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId="554964029786-g64d8umndjnc2clrdq208e9v6us864ps.apps.googleusercontent.com"
  return (
    <>
     <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
      <Messanger/>

      </AccountProvider>
      
      
     
    </GoogleOAuthProvider >
    </>
   
  );
}

export default App;
