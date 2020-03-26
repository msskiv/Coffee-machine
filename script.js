"use strict" /*строгий режим/нельзя объявлять переменные без слова let*/
let balance = document.querySelector(".balance");
let displayText = document.querySelector(".display-text");
let progressBar = document.querySelector(".progress-bar");
let coffeeCup = document.querySelector(".coffee-cup img");

let coffeeStatus = "waiting"; // "cooking" "ready"


function buyCoffee(name, cost, elem){
  if (coffeeStatus != "waiting"){
    return;
  }
  let afterBuyValue = +balance.value - cost;
    if((balance.value - cost) < 0 || Number.isNaN(afterBuyValue)) {
    balance.style.border = "2px solid red";
    balance.style.backgroundColor = "pink";
    changeDisplayText("Недостаточно средств");
    return;
  }
  balance.style.border = "none";
  balance.style.backgroundColor = "white";
  balance.value = (+balance.value - cost).toFixed(2); /*to fixed для того чтоб отображать только 2 знака после зяпятой, если введено было множество знаков после запятой.*/
  cookCoffee(name, elem);//
  
  //alert("ваш " + name + " готовится!");
  /*alert(`Вы заказали ${name}. Цена: ${cost} руб`)*/
}
function cookCoffee(name, elem){
  coffeeStatus = "cooking";
  changeDisplayText("Ваш "+name+" готовится");
/*  coffeeCup.classList.add("") добавить класс
  coffeeCup.classList.remove("") убрать
  coffeeCup.classList.toggle("") вкл/выкл
  coffeeCup.classList.contains("example") проверка на наличие класса example
  */
  let cupImg = elem.querySelector("img");
  let cupSrc = cupImg.getAttribute("src"); 
  coffeeCup.setAttribute("src", cupSrc);
  coffeeCup.style.opacity = "0%";
  coffeeCup.classList.remove("d-none");
  
  let readyPercent = 0;
  let cookingInterval = setInterval(() => {/*СОКРАЩЕННАЯ ЗАПИСЬ ФУНКЦИИ, вот не сокращенная: let cookingInterval = setInterval(function() {readyPercent++;
    progressBar.style.width = readyPercent + "%";
  }, 100);}*/
    readyPercent++;
    progressBar.style.width = readyPercent + "%";
    coffeeCup.style.opacity = readyPercent + "%";
    if (readyPercent == 100){
      coffeeStatus = "Ready";
      changeDisplayText("Ваш "+name+" готов");
      coffeeCup.style.cursor = "pointer";
      clearInterval(cookingInterval);
    }
  }, 100);
}

function changeDisplayText(text){
  //displayText.innerText = "<span>" + text + "</span>"// не используется так как это свойство возвращает текст, а не код HTML даже если очень хочется чтоб он работал как код
    displayText.innerHTML = "<span>"+text+"</span>"; //возвращает как текст так и код html
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



//Изменять стили элементов

    elem.style.opacity = "25%";
    elem.style.border-radius      => elem.style.borderRadius = "50%";

    //Работа с классами

    elem.classList.add("d-none") //добавить класс
    elem.classList.remove("d-none") //убрать класс
    elem.classList.toggle("d-none") //вкл/выкл класс
    elem.classList.contains("d-none") //содержит ли (выдает true или false)

    //Работа с аттрибутами

    elem.getAttribute("src") //Возвращает значение аттрибута
    elem.setAttribute("src", "img/coffee.png") //Присваимаем значение аттрибута
    elem.hasAttribute("src") //Существует ли (выдает true или false)

    //Планирование

    let timeout = setTimeout(function() {} , 2000) // Отрабатывает только один раз
    let interval = setInterval(function() {} , 2000) // Отрабатывает каждый 2 секунды пока не сбросим

    clearTimeout(timeout);
    clearInterval(interval);

    //Функции-стрелки

    function () {} ======================  () => {}

    () => alert("dfdf")  ====================== function () {return alert("dfdf")}

    //Работа со внутренним содержимим элементов
    let elem = document.querySelector("p");
    elem.innerText = "Новый текст"; //Вписать новый текст в тэг
    elem.innerHTML = "<span>Новый текст</span>"; //Вписать код HTML в элемент

    //querySelector

    let childElem = elem.querySelector(".childElem");

*/