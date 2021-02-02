const game = {
    intro: {
        msg: 'Welcome to Tom and Jerry adventures!',
        img: "img/TomandJerryTitleCardc.jpg",
        actions: [
            {
                text:'start',
                goto: 'start'
            }
        ]
    },
    start: {
        msg:'Tom was walking to the kitchen suddenly he saw jerry eating cheese from the fridge what do you do?',
        img: "img/tom_saw_jerry.jpg",
        actions: [
            {
                text:'keep watching him eat the cheese',
                goto: 'keepWatch'
            },
            {
                text:'chase him',
                goto:'chaseHim'
            },
            {
                text: 'ignore it',
                goto: 'ignoreIt'
            }
        ]
    },
    keepWatch: {
        msg:'(Keep Watching him) you kept watching him and your owners notice you were being lazy they hit you and tell you to chase after him, but jerry has already made it to his hole',
        img: "img/mousehole.png",
        actions: [
            {
                text:'set traps',
                goto: 'setTraps'
            },
            {
                text:'play the waiting game',
                goto: 'wait'
            },
            {
                text:'become friends with jerry',
                goto: 'friendship'
            }
        ],
        lifeLoss: true,
    },
    chaseHim: {
        msg:'you chase after but jerry makes it to his hole',
        img: "img/mousehole.png",
        actions: [
            {
                text:'set traps',
                goto: 'setTraps'
            },
            {
                text:'play the waiting game',
                goto: 'wait'
            },
            {
                text:'become friends with jerry',
                goto: 'friendship'
            }
        ]
    },
    ignoreIt: {
        msg:'you chose to ignore it and go back to sleep ,and your owners catch you sleeping and almost trade you for another cat but you ask them for another chance, they say goto his hole',
        img: "img/mousehole.png",
        actions: [
            {
                text:'set traps',
                goto: 'setTraps'
            },
            {
                text:'play the waiting game',
                goto: 'wait'
            },
            {
                text:'become friends with jerry',
                goto: 'friendship'
            }
        ],
        lifeLoss: true,
    },
    setTraps: {
        msg:'what kinda of traps would you like to set?',
        img: 'img/tom_sets_traps.jpg',
        actions: [
            {
                text:'bait him with cheese',
                goto: 'bait'
            },
            {
                text: 'hire a lady mouse',
                goto: 'ladyMouse'
            },
            {
                text:'call the cat gang',
                goto: 'catGang'
            }
        ]
    },
    bait: {
        msg: 'you baited jerry with cheese and he fell for your trap',
        img: 'img/bait.jpg',
        goto: 'YOU WIN'
    },
    ladyMouse:{
        msg:'you called a lady mouse and she fell in love with jerry now you have to worry about to mouses',
        img: "img/lady.jpg"
    },
    catGang:{
        msg:'they sqaud came through but the owners found out and now they are lving inside and you have to find another place',
        img: 'img/catgang.jpg'
    },
    wait: {
        msg:"Playing the waiting game you decide to wait it out for jerry but he never comes out and you fall asleep, your owners catch you sleeping again",
        img: 'https://via.placeholder.com/100x100',
        actions:[{
            text:'go back to traps',
            goto:'setTraps',
        }],
        lifeLoss: true,
        
    },
    friendship: {
        msg:'Become friends with jerry you try to become friends with jerry and tricks you gets you kicked out the house',
        img:'img/become_friends.jpg'
    }
};

const msg = document.querySelector('.msg');
const buttonContainer = document.querySelector('.btnContainer');
const imageContainer = document.querySelector('.imageContainer');
let strike1 = document.querySelector('.strike1');
let strike2 = document.querySelector('.strike2');
let strike3 = document.querySelector('.strike3');

let strikeArr = [strike1, strike2, strike3];

function startGame () {
 let intro = game.intro;
 msg.textContent = intro.msg
 createButtons(intro.actions);
 pictures(intro);
}

function createButtons(actions){
    actions.forEach(action => {
       const btn = document.createElement('button') 
       btn.innerText = action.text;
       btn.dataset.goto = action.goto;
       btn.addEventListener ("click", nextScene)
       buttonContainer.appendChild(btn);
    });
}
function nextScene(event) {
    let chosen = event.target.dataset.goto;
    let selectedScene = game[chosen];  
    msg.textContent = selectedScene.msg;
    pictures(selectedScene); 
    clearBtns();
    createButtons(selectedScene.actions);
    if (selectedScene.lifeLoss) {
        triggerLifeLoss();
      };
}

function clearBtns() {
    buttonContainer.innerHTML = " ";
}

function pictures (selectedScene) {
    imageContainer.innerHTML = "";
    var img = document.createElement('img');
    img.src = selectedScene.img;
    imageContainer.appendChild(img);
  }

function triggerLifeLoss() {
  if (strikeArr.length == 0) {
    return;
  }

  strikeArr[0].classList.add('hidden');
  strikeArr.shift();
}
  
startGame();
