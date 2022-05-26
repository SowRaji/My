import React from "react";
import style from "./Home.module.css";
import img from "./profimage.jpg";
import Button from '../Button/Button.js'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={style.wholeWrap}>
         
          <div className={style.midContnr}>
            <img src={img} className={style.profilePng} />
            <div className={style.mid_Content}>
              <div className={style.rghtHdr}>Raji K</div>
              <div className={style.rghtHdr2}> FRONTEND DEVELOPER</div>
              <div className={style.rghtContent}>
                I implement user interface design and solve user problems
                withHTML, CSS and Javascript. I have 2 years of making
                productsthat solve user problems and Implementing
                responsivewebsites.
              </div>
              <div className={style.footer}>
               
                <Button Name='My Resume' theme=""/>
              </div>
            </div>
          </div> </div>
      </>
    );
  }
}
export default Home;
