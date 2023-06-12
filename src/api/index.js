import axios from "axios";




// 이미지 리스트 불러오기 picsum
async function imgList(){
    const data = await axios.get("https://picsum.photos/v2/list");
    return data;
}


// 유저 리스트 불러오기
async function userList(){
    const data = await axios.get("https://woori-3f696-default-rtdb.firebaseio.com/list/result.json");
    console.log(data);
    return data;
}

// 유저 등록하기
function userRegiset(user){
    axios.post("https://woori-3f696-default-rtdb.firebaseio.com/list/result.json",user);
}



export {imgList,userList,userRegiset};
