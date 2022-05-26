import React from "react";
import style from "./Contact.module.css";
import Button from '../Button/Button.js'

class Contact extends React.Component {
  render() {
    return (
      <>
       
          <div className={`${style.cntWrap} ${style.overFlow} ${style.flexCol} ${style.dFlex} ${style.flex1}`}>
                <div className={style.txtAlCnt}><div className={`${style.whtFnt} ${style.rghtHdr_abt}`}>Get in touch</div>
              <div className={`${style.whtFnt} ${style.rghtHdr_abt1}`}>Contact</div></div>
             <div className={`${style.alignBoth} ${style.dFlex} ${style.spacing}`}>
         
            <div className={style.mid_Container}>
              
              <input className={style.inputFld} placeholder="Name"></input>
              <input className={style.inputFld} placeholder="Email"></input>
              <textarea className={`${style.inputFld} ${style.textAr}`} placeholder="Name"></textarea>

             <div className={`${style.alignEnd} ${style.cover} ${style.alignVertical}${style.dFlex}`}> 
             <Button Name='Send Message' theme=''/>
             </div>
             </div>
             
           </div>
          </div>
      </>
    );
  }
}
export default Contact;
