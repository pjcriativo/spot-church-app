import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NowPlaying from './pages/NowPlaying'
import Playlist from './pages/Playlist'
import Library from './pages/Library'
import Search from './pages/Search'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/now-playing" element={<NowPlaying />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/library" element={<Library />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    )
}

export default App
