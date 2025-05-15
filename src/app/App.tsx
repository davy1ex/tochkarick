import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES_PATHS } from '../shared/constants/routes'
import "@/shared/ui/global.css"
import "./App.css"

import { GeneratePointPage } from "../pages/GeneratePoint"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES_PATHS.HOME} element={<GeneratePointPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
