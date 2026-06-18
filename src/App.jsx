import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import HomePage from './pages/public/HomePage'
import CredentialPage from './pages/public/credential/CredentialPage'
import StudyPage from './pages/public/credential/StudyPage'
import ExamPage from './pages/public/credential/ExamPage'
import ValidatePage from './pages/public/credential/ValidatePage'
import RenewalPage from './pages/public/credential/RenewalPage'
import PlanningPage from './pages/public/planning/PlanningPage'
import FindPlannerPage from './pages/public/planning/FindPlannerPage'
import KnowledgePage from './pages/public/KnowledgePage'
import NewsPage from './pages/public/NewsPage'
import AboutPage from './pages/public/about/AboutPage'
import ContactPage from './pages/public/about/ContactPage'
import ReportPage from './pages/public/about/ReportPage'
import LoginPage from './pages/public/auth/LoginPage'
import RegisterPage from './pages/public/auth/RegisterPage'
import DashboardPage from './pages/member/DashboardPage'
import DocumentationPage from './pages/member/DocumentationPage'
import MemberNewsPage from './pages/member/MemberNewsPage'
import ProfilePage from './pages/member/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/credential" element={<CredentialPage />} />
        <Route path="/credential/study" element={<StudyPage />} />
        <Route path="/credential/exam" element={<ExamPage />} />
        <Route path="/credential/validate" element={<ValidatePage />} />
        <Route path="/credential/renewal" element={<RenewalPage />} />

        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/planning/find_planner" element={<FindPlannerPage />} />

        <Route path="/knowledge" element={<KnowledgePage />} />

        <Route path="/news" element={<NewsPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/about/contact/report" element={<ReportPage />} />

        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      
        <Route path="/member" element={<DashboardPage />} />
        <Route path="/member/news" element={<MemberNewsPage />} />
        <Route path="/member/documentation" element={<DocumentationPage />} />
        <Route path="/member/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
