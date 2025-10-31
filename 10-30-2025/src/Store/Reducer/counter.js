
const initialState ={
    users:[]
}

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GETUSERS":{

        }
        default:return{...state}
    }
}