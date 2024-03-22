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

const profile_info = document.querySelector('.chat .chat-navbar .right img');
const chat = document.querySelector('.chat');
const user_infos = document.querySelector('.user-infos');
const user_info_close = document.querySelector('.user-infos .top img');
let isChatExpanded = false;

profile_info.addEventListener('click', function () {
    isChatExpanded = !isChatExpanded;

    if (isChatExpanded) {
        chat.style.width = '100%';
        user_infos.style.marginLeft = '100%';
        user_infos.style.display = 'none';
    } else {
        user_infos.style.marginLeft = '';
        chat.style.width = '';
        user_infos.style.display = '';
    }
});

user_info_close.addEventListener('click', function () {
    isChatExpanded = !isChatExpanded;

    user_infos.style.transform = '100%';
    chat.style.width = '100%';
    user_infos.style.display = 'none';
});

const setting = document.querySelector('.settings');

function settings(e) {
    if (e === "open") {
        setting.style.display = 'flex';
    } else {
        setting.style.display = 'none';
    }
}

const out = document.querySelector('.logout');

function logout(e) {
    if (e === "open") {
        out.style.display = 'flex';
    } else {
        out.style.display = 'none';
    }
}

const editProfile = document.querySelector('.profile-edit');
function EditProfile(e) {
    if (e === "open") {
        setting.style.display = 'none';
        editProfile.style.display = 'flex';
    } else if (e === "back") {
        editProfile.style.display = 'none';
        setting.style.display = 'flex';
    } else if (e === "close") {
        editProfile.style.display = 'none';
    }
}

const language = document.querySelector('.language');

function Language(e) {
    if (e === "open") {
        setting.style.display = 'none';
        language.style.display = 'flex';
    } else if (e === 'back') {
        language.style.display = 'none';
        setting.style.display = 'flex'
    } else if (e === 'close') {
        language.style.display = 'none';
    }
}

const lis = document.querySelectorAll('.language .bottom ul li');

lis.forEach(element => {
    const img = element.querySelector('img');
    element.addEventListener('click', () => {
        lis.forEach(item => {
            const itemImg = item.querySelector('img');
            if (item === element) {
                img.style.display = 'inline-block';
            } else {
                if (itemImg && itemImg.style.display !== 'none') {
                    itemImg.style.display = 'none';
                }
            }
        });
    });
});
