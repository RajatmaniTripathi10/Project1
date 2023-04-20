import { Link } from "react-router-dom";
import './Shipping.css';

const ShippingAddress=()=>{

    return(
        <div className="form">
            <label>Shipping Address</label>
            <form className="form-body">
                <div>
                    <label className="form__label">Full Name</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Address Line 1</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Address Line 2</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Country</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">State</label>
                    <input type="text" className="form_input"/>
                </div>
                <div>
                    <label  className="form__label">Zip/PIN</label>
                    <input type="long" className="form_input"/>
                </div>
                <div>
                    <Link to="/billing"><button type="submit">Next</button></Link>
                    <Link to="/"><button type="submit">Back</button></Link>
                    
                </div>
            </form>
        </div>


    );
};
export default ShippingAddress;