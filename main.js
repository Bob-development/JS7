'use strict'

let isCorrectName = false;
let userName;

while(!isCorrectName){
  userName = prompt("Enter ur name pls");

  if (userName.length < 2){
    alert("Enter ur name correctly!");
    continue;
  }
  
  for (let i = 0; i < userName.length; i++){
    let nameCharI = isFinite(userName[i]);

    if (nameCharI === true){
      alert("Ur name can`t contain numbers!");
      isCorrectName = false;
      continue;
    } 
    else{
      isCorrectName = true;
    }
  }
}

let isRunning = true;
let loginOrRegistr;
let storeOrCart;
let isRunningStoreChoose = true;

let usersDB = [];
let userscardDB = [];

let storeDB = [
  ["Iphone 11", "Samsung Galaxy", "Xiaomi Redmi"],
  ["Apple", "Orange", "Pineapple"],
  ["Playstation", "Xbox", "Nintendo"]
];

let storeCostDB = [
  [1000, 500, 300],
  [2, 3, 3],
  [1200, 1000, 1500]
];

const admin = {
  email: "k@i.ua",
  password: '2323231'
}

usersDB[0] = admin;

let userIsGuest;
let userIsAdmin;

let userBuy;
let productBuy;
let usersMoney;
let firstElement;
let nestedElement;
let transactionss;

while (isRunning){
    loginOrRegistr = prompt(`Hey ${userName}, pls choose action:\n1) Login    2) Registration    3)Quit`); 

    let user = {

    }

    switch (loginOrRegistr) {
      case '1':
        login();

        if (userIsAdmin || userIsGuest){
          while (isRunningStoreChoose){
            storeOrCart = prompt(`Hey ${userName}, pls choose action:\n1) Store    2) Cart    3)Quit`);
            
            choiceStoreOrCart(storeOrCart);
          }
        }
        break; 

      case '2':
        registrationEmail(user);
        registrationPass(user);
        usersDB.push(user);
        break;

      case '3':
        isRunning = false;
        break; 

      default:
        break;
    }
}

function takeCard() {
  let isCorrectNumber = false;

  const userCard = {

  }

  while (!isCorrectNumber){
      let cardNum = prompt("Enter ur card number:")
      if (cardNum.length < 10){
          alert("Write ur card number correctly")
      }
      else{
          userCard.cardNum = cardNum;
          isCorrectNumber = true;
      }
  }

  let isCorrectData = false;

  while (!isCorrectData){
      let cardDate = prompt("Enter ur card date:")
      if (cardDate.length === 5 && cardDate.indexOf("/")){
          userCard.cardDate = cardDate;
          isCorrectData = true;
      }
  }

  let isCorrectCvv = false;

  while (!isCorrectCvv){
      let cardCvv = prompt("Enter ur card cvv:")
      if (cardCvv.length === 3){
          userCard.cardCvv = cardCvv;
          isCorrectCvv = true;
      }
  }
  
  userscardDB.push(userCard);

  usersMoney = parseInt(prompt("How much money do u have?"));
  return usersMoney;
}

function choiceStoreOrCart(storeOrCart) {
  switch (storeOrCart) {
    case '1':
      let storeCategory = prompt("Enter which category u wanna choose:\n1) Phones;    2) Products;    3) Consoles;");
      category(storeCategory);
      break;

    case '2':
      takeCard();
      break;

    case '3':
      isRunningStoreChoose = false;
      break;
  
    default:
      break;
  }
}

function category(storeCategory) {
  switch (storeCategory) {
    case '1':
      if (userIsAdmin){
        userBuy = prompt(`Would u like to buy something?\n${storeDB[0]}`)

        if(userBuy[0].toLowerCase() === 'y'){
          productBuy = prompt("Which telephone u would like to buy?\n1)Iphone;    2)Samsung;    3)Xiaomi;\n" + storeCostDB[0]); 
          telephones(productBuy);
        }
      }
      else if (userIsGuest){
        alert (storeDB[0])
      }
      break;

    case '2':
      if (userIsAdmin){
        userBuy = prompt(`Would u like to buy something?\n${storeDB[1]}`)

        if(userBuy[0].toLowerCase() === 'y'){
          productBuy = prompt("Which product u would like to buy?\n1)Apple;    2)Orange;    3)Pineapple;\n" + storeCostDB[1]); 
          products(productBuy);
        }
      }
      else if (userIsGuest){
        alert (storeDB[1])
      }
      break;

    case '3':
      if (userIsAdmin){
        userBuy = prompt(`Would u like to buy something?\n${storeDB[2]}`)

        if(userBuy[0].toLowerCase() === 'y'){
          productBuy = prompt("Which telephone u would like to buy?\n1)Playstation;    2)Xbox;    3)Nintendo;\n" + storeCostDB[2]); 
          consoles(productBuy);
        }
      }
      else if (userIsGuest){
        alert (storeDB[2])
      }
      break;
  
    default:
      break;
  }
}

function telephones(productBuy) {
  switch (productBuy) {
    case "1":
      firstElement = storeCostDB[0];
      nestedElement = firstElement[0];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry, but u can`t buy this (")
      } else usersMoney = transactionss;

      console.log(`${usersMoney} has left`);
      break;

    case "2":
      firstElement = storeCostDB[0];
      nestedElement = firstElement[1];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;

      console.log(`${usersMoney} has left`);
      break;

    case "3":
      firstElement = storeCostDB[0];
      nestedElement = firstElement[3];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;
  
    default:
      break;
  }
}

function products(productBuy) {
  switch (productBuy) {
    case "1":
      firstElement = storeCostDB[1];
      nestedElement = firstElement[0];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry, but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;

    case "2":
      firstElement = storeCostDB[1];
      nestedElement = firstElement[1];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;

    case "3":
      firstElement = storeCostDB[1];
      nestedElement = firstElement[3];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;
  
    default:
      break;
  }
}

function consoles(productBuy) {
  switch (productBuy) {
    case "1":
      firstElement = storeCostDB[2];
      nestedElement = firstElement[0];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry, but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;

    case "2":
      firstElement = storeCostDB[2];
      nestedElement = firstElement[1];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;

    case "3":
      firstElement = storeCostDB[2];
      nestedElement = firstElement[3];
      
      transactionss = usersMoney - nestedElement;

      if (transactionss < 0){
        alert("sry? but u can`t buy this (")
      } else usersMoney = transactionss;
        
      console.log(`${usersMoney} has left`);
      break;
  
    default:
      break;
  }
}

function login() {
  let isCorrectLogin = false;

  while (!isCorrectLogin){
      let loginEmail = prompt("Enter ur email");
      let loginPass = prompt("Enter ur password");

      for (let arrayI of usersDB){
          if (arrayI['email'] === loginEmail && arrayI['password'] === loginPass){
            if (loginEmail === admin["email"] && loginPass == admin["password"]){
              userIsAdmin = true;
              isCorrectLogin = true;
            }

            userIsGuest = true;
            isCorrectLogin = true;
          }
          // else{
          //     alert('Ur data are incorret, try again')
          //     isCorrectLogin = true;
          // }
      }
  }
}

function registrationEmail(user) {
  let isEmailCorrect = false;

  while (!isEmailCorrect){
    let userEmail = prompt("Enter ur E-mail");
    let checkDog = userEmail.indexOf('@');
    let checkFullStop = userEmail.indexOf('.');
    
    if (checkDog === -1 || checkFullStop === -1){
      alert("Enter ur E-mail correctly")
      continue;
    } 
    else{
        user['email'] = userEmail;
        isEmailCorrect = true;
    }
  }
}

function registrationPass(user){
  let isPassCorrect = false;

  while (!isPassCorrect){
    let userPass = prompt("Enter ur password");

    if (userPass.length < 6){
      alert("Ur password is incorretct and might include 6 symbols");
      continue;
    }

    let confirmPass = prompt("Confirm ur pass");

    if (userPass != confirmPass){
        alert("The passwords don`t match, enter ur pass again")
        continue;
    }
    else{
        user['password'] = userPass;
        isPassCorrect = true;
    }
  }
}