import React from "react";
import style from './Button.module.css'

class Button extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        var btnTyp=(this.props.theme=='light'? `${style.lghtBtn}` :`${style.brownBtn}`)
      return (
        
          <button className={`${style.buttonComp} `+btnTyp+``}>{this.props.Name}</button>
        
      )
    }
}
export default Button;