import React  from 'react'
import {Routes , Route} from 'react-router-dom'
import MainPage from './components/Join/MainPage'
import Section from './components/user-page/MainSection/Section'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/UserPage' element={<Section />}/>
      </Routes>
    </div>
  );
}

export default App;
