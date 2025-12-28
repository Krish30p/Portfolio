import React from 'react'
import Header from './pages/Header'
import ClickSpark from './components/ClickSpark'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <div className='bg-gray-700 w-full'>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <br />
      <br />
  
    </div>
</ClickSpark>
  )
}


export default App
// will have to add snowfall later here!!
// clickspark is working..