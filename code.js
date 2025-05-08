let post = '';
let list = [];
const inputNode = document.getElementById('inputArea');
const postBtnNode = document.getElementById('postBtn');
const postsNode = document.getElementById('mainBar_posts');


postBtnNode.addEventListener('click', function(){
    getPostByUser();
    if (!post) {
        return        
    }
    list.push(post);
    renderPost();
});

function getPostByUser () {
    post = inputNode.value;
    clearInput();
};

function clearInput() {
    inputNode.value = '';
};

function renderPost() {
    let ListHTML = '';
    list.forEach(element => {
        ListHTML +=
        `
        <li><div class="mainBar_posts_element">
            <div id="" class="mainBar_element_divlogo">
                <img class="mainBar_element_logo" src="/assets/icons/account.svg" alt="">
            </div>
            <div class="mainBar_element_info">
                Username #username date
                ${element}
            </div>
        </div></li>`; 
        
    });
    postsNode.innerHTML = `<ol>${ListHTML}</ol>`;
};
