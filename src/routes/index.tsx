import { Routes, Route } from 'react-router-dom'
import Dashboard from '@pages/Dashboard'
import SubAgentsPage from '@pages/SubAgentsPage' // Important: We added this import!
import { TacticalHubPage } from '../pages/TacticalHubPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* We added the new Agents route here */}
      <Route path="/agents" element={<SubAgentsPage />} /> 
      <Route path="/tactical-hub" element={<TacticalHubPage />} />
    </Routes>
  )
}
