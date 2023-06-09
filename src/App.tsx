// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Pictures from './pages/Pictures/Pictures'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as opinionService from './services/opinionService'

// styles
import './App.css'

// types
import { User, Profile } from './types/models'
import { OpinionManagerFormData } from './types/forms'

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleOpinion = async (formData: OpinionManagerFormData): Promise<void> => {
    try {
      const updatedProfile = await opinionService.castOpinion(formData)
      setProfiles(profiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} handleLogout={handleLogout} />} 
        />
        <Route 
          path="/pictures" 
          element={<Pictures user={user} />} 
        /> 
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} handleOpinion={handleOpinion} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/auth/signup" 
          element={<Signup handleAuthEvt={handleAuthEvt} />} 
        />
        <Route 
          path="/auth/login" 
          element={<Login handleAuthEvt={handleAuthEvt} />} 
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
