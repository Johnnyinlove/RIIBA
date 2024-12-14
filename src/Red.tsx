import ObjectiveCard from './ObjectiveCard';
import IntentionCard from './IntentionCard';
import './App.css'
import Navbar from './NavInicio';
import ResearchAreasCard from "./AreaInvestigacion"
import BenefitsCard from './BenefitsCard';
function Red() {

  return (
    <>

<header>
  <Navbar/>
  </header>

<div className='pt-36 pb-[700px] w-full  '>
<ObjectiveCard/>

<IntentionCard/>

<ResearchAreasCard/>

<BenefitsCard/>
</div>



   
    </>
  )
}

export default Red