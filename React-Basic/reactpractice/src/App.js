import logo from './logo.svg';
import './App.css';
import Car from './Components/props/propsUsingFunc';
import Bike from './Components/props/propsUsingClass';
import Myage from './Components/state/stateUsingFunc';
import Increment from './Components/state/stateExample';
import Vehicle from './Components/state/stateUsingClass';
import Today from './Components/methodasprops/methodAsPropsFunc';
import Weeks from './Components/methodasprops/methodasPropsExamle';
import Message from './Components/state/stateUsingClass';
import Ourheros from './Components/destructingprops/propsDestructuring';
import Inbody from './Components/destructingprops/propsDestructuringFunBody';
import Events from './Components/Event Handling/eventHandle';
import Handling from './Components/Event Handling/eventhandling';
import Eventbind from './Components/Event Binding/bindEvent'
import DemoBind from './Components/Event Binding/demoEventBind'
import BindusingFunc from './Components/Event Binding/demoBindingUsingBind';
import CondtionalRendering from './Components/conditional Rendering/demoCondtionalRendering'
import RenderingDemo from './Components/conditional Rendering/demotwoCondtionalRendering'
import SwitchRender from './Components/conditional Rendering/demoUsingSwitch'
import Ternarydemo from './Components/conditional Rendering/demoTernary'
import NamesList from './Components/List Rendering/demoList'
import PersonList from './Components/List Rendering/demolistofObject'
import UseStateDemo from './Components/useState/demoUseState'
import YearCounter from './Components/useState/counterdemo'
import DemoPrevState from './Components/useState with previous/demoPrevState'
import ObjectDemo from './Components/useState with Object/demouseStateObj'
import DemoObject from './Components/useState with Object/demoUsetateObj'
import HookCounter from './Components/useState with Array/demoArray'
import DemoEffectUse from './Components/UseEffect Hook/demoUseEffect'
import RefreshClick from './Components/UseEffect Hook/useEffectExample'
import CondtionallyChnageEffect from './Components/UseEffect Hook/useEffectCondtionally'
function App() {
  function getData() {
    alert("from parent comp")
    
  }
  function getDays(){
    alert("monday")
  }
  return (
    <div className="App">
   {/* <Car model="New" />
   <Bike model="Old" /> */}
   
   {/* <Vehicle />
   <Myage />
   <Increment /> */}
  
   {/* <Today  getData={getData}/>
   <Weeks getDays={getDays} /> */}
   {/* <Ourheros hero="diana" heroname="spiderwomen"/>
  <Inbody hero="nobita" heroine="shizuka" />
   <Message />
  <Events />
  <Handling />
  <Eventbind />
  <DemoBind />
  <BindusingFunc />
  <CondtionalRendering/>
  <RenderingDemo />
  <SwitchRender />
  <Ternarydemo />
  <NamesList />
  <PersonList />
  <UseStateDemo />
  <YearCounter /> */}
  {/* <DemoPrevState />
  <ObjectDemo />
  < DemoObject />
  <HookCounter /> */}
  <DemoEffectUse />
  <RefreshClick />
  <CondtionallyChnageEffect />
   </div>
  );
}

export default App;
