let post = '';
const inputNode = document.getElementById('inputArea');
const postBtnNode = document.getElementById('postBtn');


postBtnNode.addEventListener('click', function(){
    getPostByUser();
    if (!post) {
        return        
    }
    renderPost();
});

function getPostByUser () {
    post = inputNode.value;
    clearInput();
};

function clearInput() {
    inputNode.value = '';
};
