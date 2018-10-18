

var wiseSaying = new Array();
wiseSaying[0] = 'Lost time is never found again.';
wiseSaying[1] = 'The key is in not spending time, but in investing it.';
wiseSaying[2] = 'Only passions, great passions can elevate the soul to great things.';
wiseSaying[3] = 'Passion is the genesis of genius.';
wiseSaying[4] = 'Passion is the drunkenness of the mind.';

function ChangeTodayWord()
{
  var todayWordText = document.querySelector("#TodayWord");
  var fRandomValue = Math.random()*5;
  var nRandomValue = Math.floor(fRandomValue);
  todayWordText.innerHTML = wiseSaying[nRandomValue];

}

function ClickAddButton()
{
    // div 생성
    var div = document.createElement('div');
    div.display = 'none';

    // 체크 이미지 생성
    var checkImg = document.createElement('img');
    checkImg.display = 'none';
    checkImg.src = "./Resource/to_do_check.png";
    checkImg.style = "width:50"

    // todo의 text를 가져온다
    var todoText = document.getElementById("TodoText").value;
    var newText = document.createTextNode(todoText);

    // todo element 생성. text 추가
    var newToDoElement = document.createElement("span");
    newToDoElement.appendChild(newText);

    // todo list 에 추가한다
    var toDoList = document.getElementById("ToDoList");
    div.appendChild(checkImg);
    div.appendChild(newToDoElement);
    toDoList.appendChild(div);
}
