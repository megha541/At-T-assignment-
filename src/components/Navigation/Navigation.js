import React from 'react';
import './Navigation.scss'
import menuIcon from '../../assests/menu.svg';
import Modal from '../../components/Modal/Modal';
import ItemModal from '../../components/ItemModal/ItemModal';
class Navigation extends React.Component {
    state = {
        isModalOpen: false,
        isOrderModalOpen: false,
        data: this.props.data,
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    toggleOrderModal = () => {
        this.setState({ isOrderModalOpen: !this.state.isOrderModalOpen })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="menu">
                        <div className="menu-option" >
                            <div className="item">Products</div>
                            <div className="item">Brands</div>
                            <div className="item">Deals</div>
                            <div className="item">Services</div>
                        </div>
                    </div>
                    <nav className="nav">
                        <div className="menu">
                            <div className="menu-option" >
                                <div className="item">Account</div>
                                <div className="item">Recently Viewed</div>
                                <div onClick={() => this.setState({isOrderModalOpen: true})} className="item">Order Status</div>
                                <div className="item">Saved Items</div>
                            </div>
                        </div>
                    </nav>
                    <nav className="nav-small">
                        <div className="menu"><img onClick={this.toggleModal} src={menuIcon} alt="menu" /></div>
                    </nav>
                </div>
                {this.state.isModalOpen && <Modal onRequestClose={this.toggleModal} />}
                {this.state.isOrderModalOpen && <ItemModal onRequestClose={this.toggleOrderModal} data={this.props.data}/>}
            </div>
        );
    }
}
export default Navigation;