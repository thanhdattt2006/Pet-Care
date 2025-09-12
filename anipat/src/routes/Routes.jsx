import { Routes, Route } from 'react-router-dom'

// import pages
import Home from '../pages/Home'
import Emergency from '../pages/Emergency_VetHelp'
import Shelter from '../pages/Shelter'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Feedback from '../pages/Feedback'

// group PetOwner
import FeedingGuide from '../pages/PetOwner/FeedingGuide'
import GroomingVideos from '../pages/PetOwner/GroomingVideos'
import HealthTrainingTips from '../pages/PetOwner/HealthTrainingTips'
import PetProfile from '../pages/PetOwner/PetProfile'

export default function AppRoutes() {
  return (
    <Routes>
      {/* người 1: Thại */}
      <Route path="/" element={<Home />} />

      {/* người 2: Toại */}
      <Route path="/feeding-guide" element={<FeedingGuide />} />
      <Route path="/grooming-videos" element={<GroomingVideos />} />
      <Route path="/health-training-tips" element={<HealthTrainingTips />} />
      <Route path="/pet-profile" element={<PetProfile />} />

      {/* người 3: Đạt */}
      <Route path="/emergency" element={<Emergency />} />

      {/* người 4: Cường */}
      <Route path="/shelter" element={<Shelter />} />

      {/* người 5: Huy */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
