import React,{Component} from "react";
import FlashMessage from "./FlashMessage";
import {connect} from "react-redux"

class FlashMessageList extends Component{
    /**
     * FlashMessage数据保存 存入Redux中
     * @returns {*}
     */
    render() {
        return(
            <div>
                {
                    this.props.flashs.map((ele,index)=>{
                        return <FlashMessage item={ele} key={index}/>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        flashs:state.flash
    }
}


export default connect(mapStateToProps)(FlashMessageList)