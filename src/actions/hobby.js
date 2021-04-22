
// chỉ là một cái object quy định cái type , vì thế mỗi lần tạo action chỉ cần truyền vào hobby là se
// tạo được action với type tương ứng
// addNewHobby là một action creater được gọi trong componenrt
export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby,
    }
}

export const setActiveHobby = (hobby) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby,
    }
}