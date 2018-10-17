

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

function Func()
{
    document.write("Func() 호출!!");
}
