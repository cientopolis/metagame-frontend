import React,{Component} from 'react'
import Menu from './SideBar/Menu'
import SearchPlayer from './SideBar/SearchPlayer'

export default class SideBar extends Component{

  render(){
    return (
        <aside className="main-sidebar">
          <section className="sidebar">
            <SearchPlayer/>
            <Menu/>
          </section>
        </aside>
    );
  }

}
