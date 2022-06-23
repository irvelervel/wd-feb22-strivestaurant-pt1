import './App.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      {/* MyNavbar is here a CHILD COMPONENT of App */}
      <MyNavbar navTitle="Strivestaurant" />
      <Home />
    </div>
  )
}

export default App
