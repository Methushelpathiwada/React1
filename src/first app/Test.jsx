import React from "react";
import ClassCom from "./Class";
import Functional from "./Func";
import "./external.css";


class Compo extends React.Component
        {

          state = {
            funcV:false,
            classV:false,
          }
        render()
        {
            var Handlechange = e =>
            {
              this.setState({funcV:!this.state.funcV});
             
            }
            var Handleclass = e =>
            {
              this.setState({classV:!this.state.classV});
            }
            const x =this.state.funcV;
            const y = this.state.classV;
        return (
              <> <div className="main-container">
            <h1 className="heading">Styling using Functional and Class Component</h1>

            <button className="btn func"  onClick={Handlechange} >To See Styling in Functional Component .</button>

            <button className="btn class"  onClick={Handleclass}>To See Styling in Class Component .</button>
            <br /> <br />
            <hr /><hr />
        

           { x && <Functional />}
              
          {y && <ClassCom />}
              
             
          </div>

            
        </>
            );
            }


          }

export default Compo;