const flashState = [
   /* {
        msg:"注册成功",
        type:"success",
        id: 1001
    },
    {
        msg: "注册失败",
        type: "danger",
        id: 1002
    }*/
]

const flash = (state = flashState,action) =>{
    switch (action.type) {
        case "addFlash":
            return[
                ...state,
                action.message
            ];
        case "delFlash":
            return state;
        default:
            return state;
    }
}

export default flash;