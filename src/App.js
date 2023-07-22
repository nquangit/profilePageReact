import './App.css';

import FPTLogo from './Components/FPT_Logo/FPT_Logo';
import Name from './Components/PersonalName/Name';
import Description from './Components/Description/Description';
import ContactButton from './Components/ContactButton/ContactButton';
import ContactDetails from './Components/ContactDetails/ContactDetails';

function App() {
  return (
    <div className="main">
      <FPTLogo />
      <Name name="Huỳnh Ngọc Quang" />
      <Description />
      <ContactButton />
      <ContactDetails fb_username="https://www.facebook.com/quangIT2k4" zalo_link="http://zaloapp.com/qr/p/1oszyqgqaj7a6" />
    </div>
  );
}

export default App;
