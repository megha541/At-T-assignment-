import { NavLink } from "react-router-dom";
import './Modal.scss'
const Modal = ({ onRequestClose }) => {
    return (
        <div className="modal-back" onClick={onRequestClose}>
            <div className="modal-cont">
                <nav className="menu">
                    <div className="menu-bar">
                        <div><div>Sign in | Create Account</div></div>
                        <div>X</div>
                    </div>
                    <div className="menu-option" onMouseEnter={(e) => e.preventDefault}>
                        <div className="item">Account</div>
                        <div className="item">Recently Viewed</div>
                        <NavLink activeClassName="active" to="/order/10">
                            <div className="item">Order Status</div>
                        </NavLink>
                        <div className="item">Saved Items</div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default Modal;