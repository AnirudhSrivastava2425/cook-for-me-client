import './App.css'
import AIPanel from './components/ai-panel/AIPanel'
import Sidebar from './components/sidebar/Sidebar'
function App() {

  return (
   <div className="main-wrapper">
    <Sidebar/>
    <AIPanel/>
   </div>
  )
}

export default App
