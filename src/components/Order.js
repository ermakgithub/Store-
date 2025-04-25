import React, {Component} from 'react';
import { CgTrash } from "react-icons/cg";

export class Order  extends Component {
    render() {
        return(
            <div className='item'>
                <img src={"./img/"+this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <CgTrash  className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order