import React from "react";
import style from "./Project.module.css";
import Button from '../Button/Button'
class Projects extends React.Component {
  render() {
    return (
      <>
       
          
            
            <div className={style.prjct_cnt}>
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
     
      </>
    );
  }
}
export default Projects;
