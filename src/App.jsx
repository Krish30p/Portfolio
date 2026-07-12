import React, { useState, useEffect } from 'react'
import Header from './pages/Header'
import ClickSpark from './components/ClickSpark'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Links from './pages/Links'
import Designed from './pages/Designed'
import NotFound from './pages/NotFound'
// import Certificates from './pages/Certificates'

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-black flex flex-col justify-between">
        <Header />
        <main className="flex-grow bg-black">
          {currentPath === '/' ? (
            <>
              <Main />
              <Skills />
              <Experience isFullPage={false} />
              <Projects isFullPage={false} />
              {/* <Certificates /> */}
              <Links />
            </>
          ) : currentPath === '/projects' ? (
            <Projects isFullPage={true} />
          ) : currentPath === '/experience' ? (
            <Experience isFullPage={true} />
          ) : (
            <NotFound />
          )}
        </main>
        <footer>
          <Designed />
        </footer>
      </div>
    </ClickSpark>
  )
}

export default App