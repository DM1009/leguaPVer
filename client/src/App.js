import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Root from './pages/Root'
import React from 'react'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import LookLesson from './pages/Look/LookLesson'
import DoLesson from './pages/Do/DoLesson'
import MyPage from './pages/Auth/MyPage'
import DlDetail from './pages/Do/DlDetail'
import DlWrite from './pages/Do/DlWrite'
import FindDl from './pages/Do/FindDl'
import DoTutorial from './pages/Do/DoTutorial'
import DtDetail from './pages/Do/DtDetail'
import DtWrite from './pages/Do/DtWrite'
import FindDt from './pages/Do/FindDt'
import LookTutorial from './pages/Look/LookTutorial'
import LlDetail from './pages/Look/LlDetail'
import LlWrite from './pages/Look/LlWrite'
import LtDetail from './pages/Look/LtDetail'
import LtWrite from './pages/Look/LtWrite'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sign/in', element: <SignIn /> },
      { path: '/sign/up', element: <SignUp /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/look/tutorial', element: <LookTutorial /> },
      { path: '/look/tutorial/:id', element: <LtDetail /> },
      { path: '/look/tutorial/write', element: <LtWrite /> },
      { path: '/look/lesson', element: <LookLesson /> },
      { path: '/look/lesson/:id', element: <LlDetail /> },
      { path: '/look/lesson/write', element: <LlWrite /> },
      { path: '/do/tutorial', element: <DoTutorial /> },
      { path: '/do/tutorial/:id', element: <DtDetail /> },
      { path: '/do/tutorial/write', element: <DtWrite /> },
      { path: '/do/tutorial/sub/:subject', element: <FindDt /> },
      { path: '/do/lesson', element: <DoLesson /> },
      { path: '/do/lesson/:id', element: <DlDetail /> },
      { path: '/do/lesson/write', element: <DlWrite /> },
      { path: '/do/lesson/sub/:subject', element: <FindDl /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
