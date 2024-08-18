import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="font=pretendard font-[100]">프리텐다드 light</div>
        <div className="font=pretendard font-[200]">프리텐다드 semibold</div>
        <div className="font=pretendard font-[300]">프리텐다드 light</div>
        <div className="font=pretendard font-[400]">프리텐다드 regular</div>
        <div className="font=pretendard font-[500]">프리텐다드 medium</div>
        <div className="font=pretendard font-[600]">프리텐다드 bold</div>
        <div className="font=pretendard font-[700]">프리텐다드 black</div>
        <div className="font=pretendard font-[800]">프리텐다드 extrabold</div>
        <div className="font=pretendard font-[900]">프리텐다드 black</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
