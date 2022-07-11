import React from "react";
import style from "./Project.module.css";
import Button from '../Button/Button'
import { ThemeConsumer } from "../Theme/Theme";
class Projects extends React.Component {
  componentDidMount(){
    console.log("Didmount")
    this.props.setmountOrunmount("Projects")
  }
  componentWillUnmount(){
    console.log("willunmount")
    this.props.setmountOrunmount("")
  }
  render() {
    return (
      <ThemeConsumer>{
        ({theme,toggleTheme})=>(
          <div className={`${style.prjct_cnt} ${style[theme]}`}>
              <div className={style.prjctHdr}>Projects</div>
              <div className={style.prjctHdr2}> React</div>
              <div className={`${style.dFlex} ${style.alignBoth} ${style.spacing}`}>
               <div className={style.Box}></div>
               <div className={style.Box}></div>
               <div className={style.Box}></div>

              </div>
              <div className={style.footer}>
                {/* <div className="btnMore btnText">More</div> */}
                <Button Name='More' theme='light'/>
              </div>
            </div>
     
        )
        }
       
          
            
            
      </ThemeConsumer>
    );
  }
}
export default Projects;
