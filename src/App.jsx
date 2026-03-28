import React from 'react'
import Header from './pages/Header'
import ClickSpark from './components/ClickSpark'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Links from './pages/Links'
import Designed from './pages/Designed'
// import Certificates from './pages/Certificates'

const App = () => {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Main />
          <Skills />
          <Projects />
      {/* <Certificates /> */}
          <Links />
        </main>
        <footer>
          <Designed />
        </footer>
      </div>
    </ClickSpark>
  )
}

export default App