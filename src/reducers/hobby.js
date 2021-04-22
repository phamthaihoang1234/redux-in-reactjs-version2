
const initialState = {
    list: [],
    activeId: null,
}
// chuyển đổi từ một state cũ sang state mới phụ thuộc vào action
const hobbyReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_HOBBY': {
            const newList = [...state.list]
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };
            
        }

        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                // nếu là array hoặc object thì phải clone ra trước rồi mới update sửa, còn activeId là
                // kiểu number nên không cần clone
                ...state,
                activeId: newActiveId,
            };
        }
    
        default:
            return state;
    }

    
}

export default hobbyReducer;