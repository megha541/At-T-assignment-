import React, {useMemo} from 'react';
import './Progress.scss';
import Step from './Step/Step'
import order from '../../assests/check.svg';
import ship from '../../assests/fast.svg';
import deliver from '../../assests/home.svg';
const Progress = (props) => {
    const steps = useMemo(() => props.OrderStatus === 'ordered' ? 1 : props.OrderStatus === 'shipped' ? 2 : 3,[props.OrderStatus]);
    return (
        <div className="progress-bar">
            <Step icon={order} status={steps >= 1} statusType={'Ordered'}/>
            <Step icon={ship} status={steps >= 2} statusType={'Shipping'}/>
            <Step icon={deliver} status={steps >= 3} statusType={'Delivered'}/>
        </div>
    )
}
export default Progress;