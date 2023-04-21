import { Link } from "react-router-dom";
import './User.css'

const UserDetails=()=>{
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
      };
    return(
        <div className="form">
            <h2 style={styles}> Basic</h2>
            <form className="form-body">
                <div>
                    <label className="form__label">First Name</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Last Name</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Phone</label>
                    <input type="long" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Email</label>
                    <input type="email" className="form_input"/>
                </div>
                
            </form>
        </div>


    );
};
export default UserDetails;