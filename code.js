const UserLogo = '/assets/icons/account.svg';
const UserName = `MashkinA`;
const UserNameId = `#0001`;

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
    nameNode.innerText = UserName;
    idNode.innerText = UserNameId;
    photoNode.innerHTML = `<img class="userBar_profile_photo_img" src='${UserLogo}' alt="">`;
};
init();


postBtnNode.addEventListener('click', function(){
    if (!inputNode.value) {
        return
    }

    let postElement = createPost(UserLogo,UserName,UserNameId,inputNode.value);
    clear();
    trackPost(postElement);
    renderPost();
});

const openLikes = () => {
    likeNode = document.querySelectorAll('.mainBar_element_info_like_img');
    likeNode.forEach((item, index) => {
        item.addEventListener('click', function(){
            if (list[index].Post_likes_status === false) {
                list[index].Post_likes_status = true;
                list[index].Post_likes++;
                

            } else {
                list[index].Post_likes_status = false;
                list[index].Post_likes--;
            };
            renderPost();
        });
    });
    
};
    
    




const createPost = (logo, name, id, text) => {
    const currentDate = new Date();
    const dt = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const likes = 0;
    const Post = {
        Post_userLogo: logo,
        Post_userName: name,
        Post_userId: id,
        Post_Date: dt,
        Post_Text: text,
        Post_likes: likes,
        Post_likes_status: false,
    };
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
                <div class="mainBar_element_1stStr"><span class="mainBar_element_info_name">${element.Post_userName}</span> <span class="mainBar_element_info_id">${element.Post_userId}</span> <span class="mainBar_element_info_date">${element.Post_Date}</span></div>
                <div class="mainBar_element_info_text">${element.Post_Text}</div>
                
                <div class="mainBar_element_info_underline">
                    <img class="mainBar_element_info_like_img" src="/assets/icons/homeLike.svg" alt="">
                    ${element.Post_likes}
                </div>
            </div>
        </div></li>`;
        
    });
    postsNode.innerHTML = `<ol>${ListHTML}</ol>`;

    openLikes();
};

