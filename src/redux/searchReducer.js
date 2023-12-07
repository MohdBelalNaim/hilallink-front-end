export const searchReducer = (state=false,action) =>{
    switch(action.type){
        case "SHOW_SEARCH":
            return true
        case "HIDE_SEARCH":
            return false
        default:
            return state
    }
}