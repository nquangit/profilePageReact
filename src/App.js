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
      <Name />
      <Description />
      <ContactButton />
      <ContactDetails />
    </div>
  );
}

export default App;
