import "./App.css";
import { texts, buttonsContent } from "./config";
import ButtonSection from "./components/ButtonSection";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <img src="./../assets/banner.jpg" alt="banner" className="banner" />
      <div className="content">
        <Hero title={texts.title} profilePic="./../assets/profilePic.png" />
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
