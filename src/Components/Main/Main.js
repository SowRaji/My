import React from "react";
// import Home from "../Home/Homepage";
// import About from "../About/About";
// import Projects from "../Projects/Projects";
import style from './Main.module.css';
// import Contact from "../Contacts/Contact";
import {Link} from "react-router-dom";

class Main extends React.Component{
  // constructor (props){
  //   super(props)
  // }
  // state={
  //   text:'active'
  // }
  // changeVal = (stateValue) => {
  //   this.setState({text : 'active'})
  // }
    render(){
     
        return(
            <>
            <nav className={`${style.navBar} ${style.alignVertical} ${style.dFlex} ${style.navBar}`}>
              <div className={`${style.flex1} ${style.navHeader}`}>KRS.</div>
              <div className={`${style.navRghtPnl} ${style.flexshrink}`}>
                <div className={style.actve} id="actve"></div>
                <div className={`${style.navRght_txt}`} onClick={BorderLne}><Link to="/home" >Home</Link></div>
                <div className={`${style.navRght_txt}`} onClick={BorderLne}><Link to="/projects">Projects</Link></div>
                <div className={`${style.navRght_txt}`} onClick={BorderLne}><Link to="/about">About</Link></div>
                <div className={`${style.navRght_txt}`} onClick={BorderLne}><Link to="/contact">Contact</Link></div>
              </div>
            </nav>
          </>
        )
    }
}
function BorderLne(t){

  var left=t.target.offsetLeft
  var width=t.target.offsetWidth
  document.getElementById("actve").style.left=left+'px'
  document.getElementById("actve").style.width=width+'px'

}
export default Main;