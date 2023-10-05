import './App.css'
import { texts, buttons } from './config'

function App() {
  return (
    <>
      <h1>{texts.title}</h1>
      <div className="card">
        {
          buttons.oneTime.map((value: number) => <button key={value}>{buttons.oneTimeText} ${value}</button>)
        }
      </div>
      <div className="card">
        {
          buttons.suscription.map((value: number) => <button key={value}>{buttons.suscriptionText} ${value}</button>)
        }
      </div>
      <div className="card">
        <p>
          {texts.description}
        </p>
      </div>
      <p className="read-the-docs">
        {texts.footer}
      </p>
    </>
  )
}

export default App
