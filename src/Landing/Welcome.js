import React from "react";
import MainNavbar from "./MainNavbar";
import "../CSS/Welcome.css";

function Welcome() {
     return (
          <div className="welcome">
               <div className="main_navebar">
                    <MainNavbar />
               </div>
               <div className="card-holder">
                    <div className="card bg-purple">
                         The refreshing Black Currant Ice Cream is a wonderful treat.
                    </div>
               </div>
               <div className="card-holder">
                    <div classNameName="card bg-aurora" >
                         New Planets<br />Discovered
                    </div>
               </div>
               <div className="card-holder">
                    <div className="card bg-gold">
                         New York is Sunny today at 60°.
                    </div>
               </div>
               
               <div className="card-holder">
                    <div className="card bg-germany">
                         Germany! Germany! Germany!!
                    </div>
               </div>
              
               
               <div className="card-holder">
                    <div className="card bg-spring">
                         Keep Calm and Add Some Colors.
                    </div>
               </div>
          </div>
     );
}

export default Welcome;