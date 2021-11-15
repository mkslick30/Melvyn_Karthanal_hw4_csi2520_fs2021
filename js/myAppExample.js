// File was not linking properly on my computer, so I added an internal version of the script on the blog page.
function showCommentBox() {
    document.querySelector('#inputComment').style = 'display: block';
    document.querySelector('#postComment').style.display = 'block';
}
function postComment() {
    let text = document.querySelector('#inputComment');
    
    var heading = document.createElement("h3"); // Create h3 element.
    var newP = document.createElement("h4");
    var newBtn = document.createElement("button");

    var input = document.createElement("input");
    newBtn.setAttribute('id', 'replyBtn');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'replyBox');

    // newBtn.id = "postComment";
    const node = document.createTextNode('User '+header+' Comment');
    const node2 = document.createTextNode(text.value);
    const node3 = document.createTextNode('REPLY');
    heading.appendChild(node);
    newP.appendChild(node2);
    newBtn.appendChild(node3);
    var section = document.querySelector('#commentHeader');
    var replyText = document.createElement("h4");
    replyText.setAttribute('position', 'fixed')
    replyText.setAttribute('id', 're')
    section.appendChild(heading);
    section.appendChild(newP);
    section.appendChild(newBtn);
    section.appendChild(input);
    section.appendChild(replyText);
    
    document.querySelector('#replyBox').style = 'display: block';


    header++;

}
function reply(){
    
    let text2 = document.querySelector('#replyBox');
    re = text2.value;
    document.querySelector('#re').innerHTML = re


}

let commentBtn = document.querySelector('#addComment');
commentBtn.addEventListener('click', showCommentBox);
let postBtn = document.querySelector('#postComment');
postBtn.addEventListener('click', postComment);
let header = 1;
let replyBtn = document.querySelector('#replyBtn');
replyBtn.addEventListener('click', reply);
