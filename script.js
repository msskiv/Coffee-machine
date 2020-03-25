"use strict" /*строгий режим/нельзя объявлять переменные без слова let*/
let balance = document.querySelector(".balance");
function buyCoffee(name, cost){
  let afterBuyValue = +balance.value - cost;
    if((balance.value - cost) < 0 || Number.isNaN(afterBuyValue)) {
    alert("недостаточно средств!")
    return;
  }
  balance.value = (+balance.value - cost).toFixed(2); /*to fixed для того чтоб отображать только 2 знака после зяпятой, если введено было множество знаков после запятой.*/
  alert("ваш" + name + " готовится!");
  /*alert(`Вы заказали ${name}. Цена: ${cost} руб`)*/
}

/*описания событий для js

click (щелчек мыши) - onclick 
mouseover (увели мышь) - onmouseover
mousedown (зажали кнопку мыши) - onmousedown
mouseup (отпустили кнопку мыши) - onmouseup*/

/*способы найти элемент на странице (например через меню разработчика)
1. по id/ id ставится вместо class в html например <div class="row coffee-machine" id = "balance">
выведем значение:
alert(balance.value); - возвращает значение по id = balance
этот способ лучше не использовать

2. document.getElementById("balance")
  document.getElementByClass("coffee-item")
  document.getElementByTag("img")
  это очень старый способ
3. Используется очень часто:
  document.querySelector("img") по тегу
  document.querySelector(".coffee-item") по классу
  document.querySelector("#balanse") по id
  document.querySelectorAll(".coffee-item") выдает список элементов по классу
    document.querySelectorAll(".coffee-item img") поиск img внутри класса coffee-item
*/