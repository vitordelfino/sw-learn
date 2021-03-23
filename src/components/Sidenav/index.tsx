import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { OpenBtn, SidenavStyled } from './styled'

const Sidenav = () => {
  const [active, setActive] = useState(false)

  const menuItems = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Monsters',
      link: '/monsters'
    }
  ]

  return (
    <>
      <OpenBtn active={active}>
        <span onClick={() => setActive(!active)}>&#9776;</span>
      </OpenBtn>
      <SidenavStyled width="250px" active={active}>
        <span className="closebtn" onClick={() => setActive(!active)}>
          &times;
        </span>
        {menuItems.map(i => (
          <div key={i.label} onClick={() => setActive(!active)}>
            <Link to={i.link}>{i.label}</Link>
          </div>
        ))}
      </SidenavStyled>
    </>
  )
}

export default Sidenav
