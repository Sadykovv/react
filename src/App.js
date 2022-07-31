import { BrowserRouter, Route,Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {


  return <BrowserRouter>
  <div className='app-wrapper'>
    <Header />
    <Navbar />
    <div className='app-wrapper-content'>
      <Routes>
      <Route path='/Dialogs' element={<DialogsContainer store={props.store}/>} />
      <Route path='/Profile' element={<Profile store={props.store}/>} />
      <Route path='/News' element={<News />} />
      <Route path='/Music' element={<Music />} />
      <Route path='/Settings' element={<Settings />} />
      </Routes>
    </div>
  </div>
</BrowserRouter>
}


export default App;
