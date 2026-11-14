import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import './portfolio.css'

function App() {
  return (
    <div className="portfolio-shell">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
