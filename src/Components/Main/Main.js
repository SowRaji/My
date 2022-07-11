import React from "react";
// import Home from "../Home/Homepage";
// import About from "../About/About";
// import Projects from "../Projects/Projects";
import style from './Main.module.css';
import Mode from "../ModeButton/Mode";
import { ThemeConsumer } from "../Theme/Theme";
// import Contact from "../Contacts/Contact";
// import {a} from "react-router-dom";
// ComponentDidMount(){

// }
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
  // componentDidMount(){
  //   console.log("hi")

  // }

    render(){

        return(
            <ThemeConsumer>
              {
                ({theme, toggleTheme})=>(
                    <nav className={`${style.navBar} ${style.alignVertical} ${style.dFlex} ${style.navBar} ${style[theme]}`}>
                      <div className={`${style.flex1} ${style.navHeader}`}>KRS.</div>
                      <div className={`${style.navRghtPnl} ${style.flexshrink}`}>
                        <div className={style.actve} id="actve"></div>
                        <div className={`${style.navRght_txt}`} onClick={(event) => {BorderLne(event); this.props.setActive("Home")}}><span>Home</span></div>
                        <div className={`${style.navRght_txt}`} onClick={(event) => {BorderLne(event); this.props.setActive("Projects")}}><span>Projects</span></div>
                        <div className={`${style.navRght_txt}`} onClick={(event) => {BorderLne(event); this.props.setActive("About")}}><span>About</span></div>
                        <div className={`${style.navRght_txt}`} onClick={(event) => {BorderLne(event); this.props.setActive("Contact")}}><span>Contact</span></div>
                      <Mode/>
                      </div>
                    </nav>
                )
              }
        
          </ThemeConsumer>
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