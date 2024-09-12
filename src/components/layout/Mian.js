import Header from './Header';
// import Footer from './Footer';
import "./Main.css"


export default function Mian(props){
    return (
        <div className='main'>
            <Header>{props.children}</Header> 
            <div className='body'>    
               {props.children}
               </div> 
            {/* <Footer className="footer"/>   */}                        
        </div>
    )
}