import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import ItemCard from '../../components/ItemCard/ItemCard'
import Progress from '../../components/Progress/Progress';
import { getCustomerOrder } from "../../helper/data"
import './OrderDetails.scss'
class OrderDetails extends React.Component {
    state = {
        load: false,
        data: {},
        shipment: {},
        status: 'ordered',
        shipingAddress: {},
    }
    componentDidMount() {
        getCustomerOrder().then(res => {
            this.setState({ load: true, data: res, shipment: res["shipments"], shipingAddress: res["shipingAddress"] })
        })
    }
    getDate(dates) {
        var date = new Date(dates)
        var toDate = `${date}`
        return toDate
    }
    getItem(data) {
        return (
            data.items.map(item => <ItemCard show ItemData={item} key={item.id} />)
        )
    }
    render() {
        const data = this.state.shipment;
        const add = this.state.shipingAddress;
        const itemdata = this.state.data["items"];
        return (
            <div>
                <Navigation data={this.state.data} />
                {!this.state.load ? <h1>Loading . . .</h1> :
                    (<div className="main-order">
                        <div className="details">
                            {
                                this.state.status === 'ordered' ? (<div>
                                    <h4>You have placed your Order !</h4>
                                    <p>Before we process the ordere further is you require any changes please update</p>
                                </div>) : (<div>
                                    <h4>Get excited !</h4>
                                    <p>Fun Stuff is Headed your wayv !</p>
                                </div>)
                            }
                            <Progress OrderStatus={this.state.status} />
                            <div>
                                <h4>Items Ordered: {itemdata.length}</h4>
                            </div>
                            {
                                this.state.status === 'ordered' ?
                                    <div>
                                        <div className="info-text">
                                            Don't forget to let us know if you accept the new ship date. We'll cancel your order if we don't hear from you soon</div>  <div>
                                        </div>
                                        <div>
                                            <h4>New estimated ship date:</h4>
                                            <p>{this.getDate(data["shipDate"])}</p>
                                        </div>
                                        <div>
                                            <h4>Original estimated ship date:</h4>
                                            <p>{this.getDate(data["estimatedDeliveryDate"])}</p>
                                        </div>
                                        <div>
                                            <h4>Address:</h4>
                                            <p>{add["street"]} {add["city"]}, {add["state"]} {add["zip"]}</p>
                                        </div>
                                        <div className="actions" >
                                            <button className="button">Accept new ship date</button>
                                            <button className="button cancel">Cancel your Order</button>
                                        </div>
                                    </div> : <div>
                                        <div>
                                            <h4>{data["carrier"]} Tracking ID:</h4>
                                            <p>{data["trackingNumber"]}</p>
                                        </div>
                                        <div>
                                            <h4>Estimated Delivery Date:</h4>
                                            <p>{this.getDate(data["estimatedDeliveryDate"])}</p>
                                        </div>
                                        <div>
                                            <h4>Address:</h4>
                                            <p>{add["street"]} {add["city"]}, {add["state"]} {add["zip"]}</p>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="each-item">
                            {this.getItem(this.state.data)}
                        </div>
                    </div>)}
            </div>
        )
    }
}
export default OrderDetails;