import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '@components/shared/ErrorBoundary'
import Dashboard from '@pages/Dashboard'
import SubAgentsPage from '@pages/SubAgentsPage' // <-- Added new page import
import './styles/index.css'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* <-- Added the Agent Command route! --> */}
          <Route path="/agents" element={<SubAgentsPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App