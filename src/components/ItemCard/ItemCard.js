import React from 'react';
import { NavLink } from "react-router-dom";
import './ItemCard.scss';
import iphone from '../../assests/iphone.jpg';
import Progress from '../../components/Progress/Progress';
const ItemCard = (props) => {
    const data = props["ItemData"];
    return (
        <div className="item-wrap">
            <NavLink to={`/order/${data["id"]}`}>
            <div className="item-card">
                <div className="item-img"><img src={iphone} alt="item-img" /></div>
                <div className="item-desc">
                    {!props.show ? (<Progress OrderStatus={data["status"]} />) : null}
                    <div className="item-details">
                        <p>{data["plan"]}</p>
                    </div>
                    <div className="item-name">{data["name"]} - {data["skuAttributes"]["color"]} {data["skuAttributes"]["size"]}</div>
                    <div className="item-details">
                        <p>{data["telephoneNumber"]}</p>
                        <p>Quantity: {data["quantity"]}</p>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}
export default ItemCard;