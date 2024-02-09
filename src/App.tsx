import "./App.css";
import { texts, buttonsContent } from "./config";
import ButtonSection from "./components/ButtonSection";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <img src={texts.banner} alt="banner" className="banner" />
      <div className="content">
        <Hero title={texts.title} profilePic={texts.profilePic} />
        <ButtonSection buttons={buttonsContent.oneTime} />
        <ButtonSection buttons={buttonsContent.suscription} />
        <div className="card">
          <p>{texts.description}</p>
        </div>
        <p className="read-the-docs">{texts.footer}</p>
      </div>
    </>
  );
}

export default App;
