import React, { useState, useEffect } from 'react'
import Header from './pages/Header'
import ClickSpark from './components/ClickSpark'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Links from './pages/Links'
import Designed from './pages/Designed'
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
      <div>
        <Header />
        <main>
          {currentPath === '/projects' ? (
            <Projects isFullPage={true} />
          ) : (
            <>
              <Main />
              <Skills />
              <Projects isFullPage={false} />
              {/* <Certificates /> */}
              <Links />
            </>
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