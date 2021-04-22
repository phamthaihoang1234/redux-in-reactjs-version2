import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import casual from 'casual';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';


const randomNumber = () =>{
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage() {
  // **strict comparison : mỗi lần redux store thay đổi thì useSelector sẽ được chạy lại , sẽ tính toán một cái state mới
  // nó sẽ so sánh cái state.hobby.list mới và cũ theo kiểu === và 
  //nếu như nó giống nhau thì nó sẽ không trigger cái rereder và ngược lại
  // khuyến khích tách ra thành các state độc lập , 
  //còn nếu gộp lại thành một object thì chỉ cần một cái state thay đổi sẽ khiến redux store thay đổi => rerender
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);


  // ** shallow comparison
  // so sánh từng cái key trong object còn strict thì so sánh cả object (nói thêm thôi, còn trên sử dụng strict) comparison



  
  console.log('Hobby list ' , hobbyList);
  const dispatch = useDispatch();
  const newId = randomNumber();


    const handleAddHobbyClick = () =>{
      // cứ mỗi click sẽ tạo ra một hobby mới và chuẩn bị một cái action mới 
      // sử dung action crete được khai báo ở trong action (giúp nhớ cái type) 
      //random hobby object : id + title
      const newHobby = {
        id: newId,
        title: `Hobby ${newId}`
      }

      // dispatch action to add a new hobby to redux store, action này là một cái object
      // addNewHobby để tạo ra một action
        const action = addNewHobby(newHobby);
        // dispatch thực hiện gọi một action
        dispatch(action);

    }

    const handleHobbyClick = (hobby) =>{
      const action = setActiveHobby(hobby);
      dispatch(action);
    }
   
  // redux kết nối từ component nào cũng được
  return (
    <div className="App">
        <h1>Tedux hook</h1>
        <button onClick={handleAddHobbyClick}>Random hobby</button>
        
        <HobbyList hobbyList={hobbyList}
        activeId = {activeId}
        onHobbyClick={handleHobbyClick}
        ></HobbyList>
    </div>
  );
}

export default HomePage;
