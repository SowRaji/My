import React from "react";
import style from './Button.module.css'
import { ThemeConsumer } from "../Theme/Theme";

class Button extends React.Component {

    render() {
        var btnTyp=(this.props.theme==='light'? `${style.lghtBtn}` :`${style.brownBtn}`)
        return (
        <ThemeConsumer>{
            ({theme, toggleTheme})=>(
        
          <button className={`${style.buttonComp} ${style[theme]} ` +btnTyp+``}>{this.props.Name}</button>
        
      ) 
    }</ThemeConsumer>
    )
        
    }
}
export default Button;