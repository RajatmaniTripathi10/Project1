
import { Link } from 'react-router-dom';
import './Billing.css';

const BillingAddress=()=>{
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
      };
    return(
        <div className="form">
           <h2 style={styles}>Billing</h2>
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
                
            </form>
        </div>
    );
};
export default BillingAddress;