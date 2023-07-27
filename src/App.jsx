import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const MenuItem = ({text, icon, children}) =>{
  const [open, setOpen] = useState(false)
  const toOpen = ()=>{
    setOpen(!open);
  };

  return(
    <li>
      <div onClick={toOpen}>
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </div>
      {open && <ul>{children}</ul>}
    </li>
  )
}

function App(){
  const icon2 = <i class="fa-solid fa-bars" />;
  return(
    <>
    <div><h1>School</h1></div>
  <ul>
    <div>
    <MenuItem icon={icon2}>
      <MenuItem text="natural Sciences" icon=">">
            <MenuItem text="mats" icon=">">
              <MenuItem text="geometry" />
              <MenuItem text="algebra" />
            </MenuItem>
            <MenuItem text="informatics" />
          </MenuItem>
          <MenuItem text="Languages" icon=">">
            <MenuItem text="English"/>
            <MenuItem text="Armenian"/>
          </MenuItem>
    </MenuItem>
    <div className='img1'>
      <img className="img" src='https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg'></img>
    </div>
    </div>
  </ul>
  </>
  )
}

export default App;