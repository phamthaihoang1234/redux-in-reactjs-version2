import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import casual from 'casual';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';


const randomNumber = () =>{
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage() {
  const hobbyList = useSelector(state => state.hobby.list);
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

      // dispatch action to add a new hobby to redũ store, action này là một cái object
        const action = addNewHobby(newHobby);
        dispatch(action);

    }
   
  // redux kết nối từ component nào cũng được
  return (
    <div className="App">
        <h1>Tedux hook</h1>
        <button onClick={handleAddHobbyClick}>Random hobby</button>
        
        <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  );
}

export default HomePage;
