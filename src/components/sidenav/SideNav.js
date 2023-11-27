import React from 'react'
import SideNavTitle from './SideNavTitle'

export default function SideNav() {
  return (
    <>
      <div className="px-7 py-4">
          <SideNavTitle title="M" subTitle="enu" />
          <div className=''></div>
          <ul>
              <li className="sideNavLi">Blog Page</li>
              <li className="sideNavLi">portfolio Page</li>
          </ul>
          <SideNavTitle title="P" subTitle="rojets" />
          <ul>
              <li className="sideNavLi">Web Development</li>
              <li className="sideNavLi">E-commerce</li>
              <li className="sideNavLi">Netflix Clone</li>
              <li className="sideNavLi">Medium Clone</li>
              <li className="sideNavLi">News-App</li>
              <li className="sideNavLi">Tik Tac Toe Game</li>

          </ul>
      </div>
    </>
  )
}
