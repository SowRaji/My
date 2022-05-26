import React from "react";
import style from "./About.module.css";
// import style from '../Button/Button.module.css'
import img from './profimage.jpg'
import Button from '../Button/Button.js'
class About extends React.Component {
  render() {
    return (
      <>
       
          <div className={`${style.flex1} ${style.dFlex}  ${style.flexCol} ${style.midContnr} ${style.overFlow}`}>
                <div className={style.txtAlCnt}><div className={style.rghtHdr_abt}>WHO AM I</div>
              <div className={style.rghtHdr_abt1}>About</div></div>
              <div className={`${style.dFlex} ${style.alignVertical} ${style.wrapper}`}>
      
            <div className={`${style.mid_Content} ${style.dFlex} ${style.alignVertical}`}>
            <img src={img} alt='ProfilePic' className={style.profilePng} />
<div className={style.hdrWrap}>
              <div className={style.rghtHdr2}> FRONTEND DEVELOPER</div>
              <div className={style.rghtContent}>
              I implement user interface design and solve user problems withHTML, CSS and Javascript. I have 2 years of making productsthat solve user problems and Implementing responsivewebsites.
              </div>
              <div className={style.rghtHdr}>Skills</div>
              <div className={`${style.footer} ${style.dFlex} ${style.alignVertical}`}>
                
                <Button Name='HTML' theme=' '/>
                <Button Name='CSS' theme=' '/>
                <Button Name='JAVASCRIPT' theme=' '/>
                <Button Name='BOOSTSTRAP' theme=' '/>
                <Button Name='PHP' theme=' '/>
                <Button Name='PYTHON' theme=' '/>
                <Button Name='C++' theme=' '/>
                <Button Name='WORDPRESS ' theme=' '/>


           
              
             </div> </div></div>
            </div>
          </div>
      </>
    );
  }
}
export default About;
