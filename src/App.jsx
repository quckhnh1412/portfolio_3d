import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
const App = () => {
  return (
    <main>
      <div>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        <ExperienceSection/>
      </div>
    </main>
  )
}

export default App