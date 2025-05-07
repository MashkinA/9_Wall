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
        `<li class="">
            <span class="string">${element}</span>
        </li>`; 
        
    });
    postsNode.innerHTML = `<ol>${ListHTML}</ol>`;
};
