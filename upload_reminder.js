const button = document.querySelector('input.chat__write')

function ClickButton(){
    button.type = 'text';
    button.placeholder = "리마인딩 하고싶은 질문을 작성해주세요";
}

button.addEventListener("change", ClickButton);