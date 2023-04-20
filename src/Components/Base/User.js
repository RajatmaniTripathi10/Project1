import { Link } from "react-router-dom";
import './User.css'

const UserDetails=()=>{

    return(
        <div className="form">
            <label>Basic</label>
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
                <div>
                    <Link to="/shipping"><button type="submit">Next</button></Link>
                </div>
            </form>
        </div>


    );
};
export default UserDetails;