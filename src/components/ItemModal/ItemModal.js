import ItemCard from '../ItemCard/ItemCard';
import './ItemModal.scss'
const ItemModal = (props) => {
    const getItem = (data) => {
        return (
            data["items"].map(item => <ItemCard ItemData={item} key={item["id"]} />)
        )
    }
    return (
        <div className="modal-backdrop" onClick={props.onRequestClose}>
            <div className="modal-container">
                {getItem(props.data)}
            </div>
        </div>
    );
};
export default ItemModal;