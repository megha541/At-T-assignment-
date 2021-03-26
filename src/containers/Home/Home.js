import React from 'react';
import HomeItem from '../../components/HomeItem/HomeItem';
import Navigation from '../../components/Navigation/Navigation'
import './Home.scss';
import { getCustomerOrder } from '../../helper/data';
class Home extends React.Component {
    state = {
        load: false,
        data: {}
    };
    componentDidMount() {
        getCustomerOrder().then(res => {
            this.setState({ load: true, data: res })
        })
    }
    render() {
        return (
            <div>
                {
                    !this.state.load ? <h1>Loading . . .</h1> : (
                        <React.Fragment>
                            <Navigation data={this.state.data}/>
                            <div>
                                <h1>This is Home Page </h1>
                                <div className='home-item'>
                                    <HomeItem />
                                    <HomeItem />
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }

            </div>
        )
    }
}
export default Home;