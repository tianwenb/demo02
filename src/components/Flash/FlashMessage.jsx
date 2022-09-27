import React,{Component} from "react";
import classnames from "classnames";

export default class FlashMessage extends Component{
    render() {
        return(
            <div className={classnames('alert',{
                "alert-success":this.props.item.type === 'success',
                "alert-danger":this.props.item.type === 'danger'
            })}>
                {this.props.item.msg}
            </div>
        )
    }
}