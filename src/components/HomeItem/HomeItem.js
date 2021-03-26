import React from 'react';
import iphone from '../../assests/iphone.jpg';
import './HomeItem.scss'
const ItemCard = () => {
    return (
        <div>
            <div className="home-card">
                <div className="card-box"><img src={iphone} alt="item-img"/></div>
                <div >Apple Iphone XR lues - Black/Whiete 64GB</div>
            </div>
        </div>
    )
}
export default ItemCard;