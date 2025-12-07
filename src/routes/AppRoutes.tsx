import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Library from '../pages/Library'
import Profile from '../pages/Profile'
import Playlist from '../pages/Playlist'

export default function AppRoutes() {
    return (
        <Routes>
            {/* Redirect root to home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Main routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/track" element={<Playlist />} />
        </Routes>
    )
}
