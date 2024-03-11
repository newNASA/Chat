function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

var textarea = document.getElementById('message');
var originalHeight = textarea.scrollHeight;

textarea.addEventListener('input', function () {
    autoExpand(this);

    if (textarea.scrollHeight > originalHeight) {
        originalHeight = textarea.scrollHeight;
    }
});

const bodyHeight = document.querySelector('body').clientHeight;
const senderHeight = document.querySelector('.sender').clientHeight;
const chatNavbarHeight = document.querySelector('.chat-navbar').clientHeight;
const message = document.querySelector('.message');

message.style.height = `${bodyHeight - (senderHeight + chatNavbarHeight)}px`;

const senderWidth = document.querySelector('.sender').clientWidth;
const senderImgWidth = document.querySelector('.sender form img').clientWidth;
const senderButtonWidth = document.querySelector('.sender form button').clientWidth;
const senderTextarea = document.querySelector('.sender form textarea');

senderTextarea.style.width = `${senderWidth - (senderImgWidth + senderButtonWidth + 90)}px`;


const messageContainer = document.getElementById('messageContainer');
messageContainer.scrollTop = messageContainer.scrollHeight;

function scrollToBottom() {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}