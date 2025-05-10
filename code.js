const UserLogo = '/assets/icons/account.svg';
const UserName = 'MashkinA';
const UserNameId = `#0001`;
let PostLikes = 0;

/** */

let list = [];
const inputNode = document.getElementById('inputArea');
const postBtnNode = document.getElementById('postBtn');
const postsNode = document.getElementById('mainBar_posts');
const nameNode = document.getElementById('userBar_profileName');
const idNode = document.getElementById('userBar_profileId');
const photoNode = document.getElementById('userBar_profilePhoto');

/** */

const init = () => {
    nameNode.innerHTML = UserName.value;
    idNode.innerText = UserNameId.value;
    photoNode.innerHTML = `<img class="userBar_profile_photo_img" src="${UserLogo.value}" alt="">`;
};
init;

postBtnNode.addEventListener('click', function(){
    if (!inputNode.value) {
        return
    }

    let postElement = createPost(UserLogo,UserName,UserNameId,inputNode.value,PostLikes);
    clear();
    trackPost(postElement);
    renderPost();
});





const createPost = (logo, name, id, text, likes) => {
    const currentDate = new Date();
    const dt = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const Post = {
        Post_userLogo: logo,
        Post_userName: name,
        Post_userId: id,
        Post_Date: dt,
        Post_Text: text,
        Post_likes: likes,
    };
    console.log(Post);
    return Post;
};
const clear = () => {
    inputNode.value = '';
};
const trackPost = (postObj) => {
    list.push(postObj);
};
const renderPost = () => {
    let ListHTML = '';
    
    list.forEach(element => {
        ListHTML +=
        `
        <li><div class="mainBar_posts_element">
            <div id="" class="mainBar_element_divlogo">
                <img class="mainBar_element_logo" src="${element.Post_userLogo}" alt="">
            </div>
            <div class="mainBar_element_info">
                <div>${element.Post_userName} ${element.Post_userId} ${element.Post_Date}</div>
                <div>${element.Post_Text}</div>
                <div>${element.Post_likes}</div>
            </div>
        </div></li>`; 
        
    });
    postsNode.innerHTML = `<ol>${ListHTML}</ol>`;
};
