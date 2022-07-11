import React from "react";
import style from "./modeButton.module.css";
import { ThemeConsumer } from "../Theme/Theme";

class Mode extends React.Component {
  checkedinp(event){
    console.log(event.target.checked)
    
  }
  render() {
    return (
      <ThemeConsumer>
        {({theme, toggleTheme}) => (
          
        <>
          <label className={style.checkboxinp} >
            <input type="checkbox" name="statusSwitch"  onChange={()=> toggleTheme()}>
            </input>
              <span className={style.slideinp}></span>
          </label>
        </>
        )
        }
        
  </ThemeConsumer>
    );
  }
}
export default Mode;