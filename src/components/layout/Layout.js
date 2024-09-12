
import Sidebar from '../sidebar/Sidebar'

import './Layout.css'
import Mian from './Mian'



export default function Layout (props){
   
      

    return(
        <div className='layout'>    
            <Sidebar />       
<Mian>
                {/* <div onClick={click}>click</div> */}
                {props.children}
                </Mian>
        </div>
    )    
}
