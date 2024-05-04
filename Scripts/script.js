let $ = selector => {
  return document.querySelector(selector);
}

const toTop = document.querySelector(".totop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
var btnSpan = document.querySelector('ul.apps button span');
let continueButton = document.querySelector('.continue')
if(continueButton ){
  continueButton.onclick = function(){
    let ultag = document.querySelector('ul.apps');
    let styles = window.getComputedStyle(ultag);
  
    if (styles.maxHeight == "418px") {
      ultag.classList.add("realheight");
      btnSpan.innerHTML = "expand_less";
    } else {
      ultag.classList.remove("realheight");
      btnSpan.innerHTML = "expand_more";
    }  
  }
}
let menuIcon = document.querySelector('#nav span.menusign');
let ul = document.querySelector('#nav ul.menu');
let closeIcon = ul.lastElementChild;
document.querySelector('#nav .row span.menusign').addEventListener('click', () => {
  ul.classList.add('openmenu');
});
// closing sidemenu
document.querySelector('#nav span.close').addEventListener('click' , () => {
  ul.classList.remove('openmenu');
})
// dark theme
let logo = document.querySelector('.logo img');
let moonIcon = document.querySelector('.moon-icon');
moonIcon.addEventListener('click', () => { //when click on moonicon
  document.body.classList.toggle('dark');
  if(logo.getAttribute('src') === "images/logo-2.png") {
    logo.removeAttribute('src');
    logo.setAttribute('src','images/logo-night.png');
  }else {
    logo.removeAttribute('src');
    logo.setAttribute('src','images/logo-2.png');
  }
  
  if(moonIcon.firstElementChild.classList.contains('fa-moon-o')){
    moonIcon.firstElementChild.classList.replace('fa-moon-o','fa-sun-o');
  }else {
    moonIcon.firstElementChild.classList.replace('fa-sun-o','fa-moon-o');
  }
  moonIcon.firstElementChild.classList.toggle('iconrotate');
});



// using Media Queries in js
let x = window.matchMedia('(max-width: 812px)');  
let itemWithSubmenu = document.querySelectorAll('ul.menu > .item:has(.submenu)');
// opening and closing submenus
function clicking(x) {
  if(x.matches){
    let system = itemWithSubmenu[0].children[1];
    let mobile = itemWithSubmenu[1].children[1];
    let software = itemWithSubmenu[2].children[1];
    let graphic = itemWithSubmenu[3].children[1];
  
    //when system is clicked
    itemWithSubmenu[0].addEventListener('click', firstListItemFunction);
    function firstListItemFunction() {
      //open submenu of system with scaleY(1)
      system.classList.toggle('postransform');
      itemWithSubmenu[0].classList.toggle('backcolor');//change background-color of li.item
      itemWithSubmenu[0].children[0].classList.toggle('childwhitecolor');//changing color of <a>
      //and if mobile item was open , close it
      if(mobile.classList.contains('postransform')){
        mobile.classList.remove('postransform');
        itemWithSubmenu[1].classList.remove('backcolor');
        itemWithSubmenu[1].children[0].classList.remove('childwhitecolor');
      }
      //and if software item was opened, close it
      if(software.classList.contains('postransform')){
        software.classList.remove('postransform');
        itemWithSubmenu[2].classList.remove('backcolor');
        itemWithSubmenu[2].children[0].classList.remove('childwhitecolor');
      }
      //and if graphic item was opened, close it
      if(graphic.classList.contains('postransform')){
        graphic.classList.remove('postransform');
        itemWithSubmenu[3].classList.remove('backcolor');
        itemWithSubmenu[3].children[0].classList.remove('childwhitecolor');
      }
    };
  
    //when mobile item is clicked
    itemWithSubmenu[1].addEventListener('click', secondListItemFunction);
    function secondListItemFunction() {
      mobile.classList.toggle('postransform');
      itemWithSubmenu[1].classList.toggle('backcolor');
      itemWithSubmenu[1].children[0].classList.toggle('childwhitecolor');
      //if system item was opened , close it
      if(system.classList.contains('postransform')){
        system.classList.remove('postransform');
        itemWithSubmenu[0].classList.remove('backcolor');
        itemWithSubmenu[0].children[0].classList.remove('childwhitecolor');
      }
      //if software item was opened, close it
      if(software.classList.contains('postransform')){
        software.classList.remove('postransform');
        itemWithSubmenu[2].classList.remove('backcolor');
        itemWithSubmenu[2].children[0].classList.remove('childwhitecolor');
      }
      //and if graphic item was opened, close it
      if(graphic.classList.contains('postransform')){
        graphic.classList.remove('postransform');
        itemWithSubmenu[3].classList.remove('backcolor');
        itemWithSubmenu[3].children[0].classList.remove('childwhitecolor');
      }
    };
  
    //when software item is clicked
    itemWithSubmenu[2].addEventListener('click', thirdListItemFunction);
    function thirdListItemFunction() {
      software.classList.toggle('postransform');
      itemWithSubmenu[2].classList.toggle('backcolor');
      itemWithSubmenu[2].children[0].classList.toggle('childwhitecolor');
      //if system item was opened , close it
      if(system.classList.contains('postransform')){
        system.classList.remove('postransform');
        itemWithSubmenu[0].classList.remove('backcolor');
        itemWithSubmenu[0].children[0].classList.remove('childwhitecolor');
      }
      //and if mobile item was open , close it
      if(mobile.classList.contains('postransform')){
        mobile.classList.remove('postransform');
        itemWithSubmenu[1].classList.remove('backcolor');
        itemWithSubmenu[1].children[0].classList.remove('childwhitecolor');
      }
      //and if graphic item was opened, close it
      if(graphic.classList.contains('postransform')){
        graphic.classList.remove('postransform');
        itemWithSubmenu[3].classList.remove('backcolor');
        itemWithSubmenu[3].children[0].classList.remove('childwhitecolor');
      }
    };
  
    //when graphic item is clicked
    itemWithSubmenu[3].addEventListener('click', fourthListItemFunction);
    function fourthListItemFunction() {
      graphic.classList.toggle('postransform');
      itemWithSubmenu[3].classList.toggle('backcolor');
      itemWithSubmenu[3].children[0].classList.toggle('childwhitecolor');
      //if system item was opened , close it
      if(system.classList.contains('postransform')){
        system.classList.remove('postransform');
        itemWithSubmenu[0].classList.remove('backcolor');
        itemWithSubmenu[0].children[0].classList.remove('childwhitecolor');
      }
      //and if mobile item was open , close it
      if(mobile.classList.contains('postransform')){
        mobile.classList.remove('postransform');
        itemWithSubmenu[1].classList.remove('backcolor');
        itemWithSubmenu[1].children[0].classList.remove('childwhitecolor');
      }
      //if software item was opened, close it
      if(software.classList.contains('postransform')){
        software.classList.remove('postransform');
        itemWithSubmenu[2].classList.remove('backcolor');
        itemWithSubmenu[2].children[0].classList.remove('childwhitecolor');
      }
    };
  
    //closing submenus if main menu window get closed
    document.querySelector('#nav span.close').addEventListener('click',() => {
      if(system.classList.contains('postransform')
       && itemWithSubmenu[0].classList.contains('backcolor')
       && itemWithSubmenu[0].children[0].classList.contains('childwhitecolor')){
        system.classList.remove('postransform');
        itemWithSubmenu[0].classList.remove('backcolor');
        itemWithSubmenu[0].children[0].classList.remove('childwhitecolor');
      }
      if(mobile.classList.contains('postransform')
       && itemWithSubmenu[1].classList.contains('backcolor')
       && itemWithSubmenu[1].children[0].classList.contains('childwhitecolor')){
        mobile.classList.remove('postransform');
        itemWithSubmenu[1].classList.remove('backcolor');
        itemWithSubmenu[1].children[0].classList.remove('childwhitecolor');
      }
      if(software.classList.contains('postransform')
       && itemWithSubmenu[2].classList.contains('backcolor')
       && itemWithSubmenu[2].children[0].classList.contains('childwhitecolor')){
        software.classList.remove('postransform');
        itemWithSubmenu[2].classList.remove('backcolor');
        itemWithSubmenu[2].children[0].classList.remove('childwhitecolor');
      }
      if(graphic.classList.contains('postransform')
       && itemWithSubmenu[3].classList.contains('backcolor')
       && itemWithSubmenu[3].children[0].classList.contains('childwhitecolor')){
        graphic.classList.remove('postransform');
        itemWithSubmenu[3].classList.remove('backcolor');
        itemWithSubmenu[3].children[0].classList.remove('childwhitecolor');
      }
    });
  } else {
    itemWithSubmenu[0].removeEventListener('click', firstListItemFunction);
    itemWithSubmenu[1].removeEventListener('click', secondListItemFunction);
    itemWithSubmenu[2].removeEventListener('click', thirdListItemFunction);
    itemWithSubmenu[3].removeEventListener('click', fourthListItemFunction);
  };
};

//call function at run time
clicking(x);

x.addEventListener('change', () => {
  clicking(x);
});

function checkTransition(){
  if(visualViewport.width > 810){
    ul.classList.add('transition-none')
  }else if(visualViewport.width < 810) {
    ul.classList.remove('transition-none')
  }
}
if(visualViewport.width > 810){
  ul.classList.add('transition-none')
}

window.addEventListener('resize', () => {
  clicking(x);
  checkTransition();
})

if(screen.width < 811) {
  let lastul = document.querySelector('div.submenu ul.col-3');
  lastul.classList.remove('col-3');
}
//===========================================================================
//changing lists by clicking titles and changing backgrounds colors in dark and light theme
//============================================================================
let androidButton = document.querySelector('h3.android');
let softwareIcon = document.querySelector('.pc-icon');
let androidUl = document.querySelector('.android-ul');
let softUl = document.querySelector('.soft-ul');
  //appear and disappear lists
  androidButton.addEventListener('click', () => {
    softUl.classList.add('disappear');
    androidUl.classList.add('appear'); 
  });
  softwareIcon.addEventListener('click', () => {
    softUl.classList.remove('disappear');
    androidUl.classList.remove('appear');
  });
  //changing background color
  androidButton.addEventListener('click' , setBc1);
  function setBc1() {
    if(!document.body.classList.contains('dark')){
      androidButton.classList.add('set-white-background');
      softwareIcon.classList.add('removed-white-background');
    }
      
  }
  softwareIcon.addEventListener('click', setBc2);
  function setBc2() {
      androidButton.classList.remove('set-white-background');
      softwareIcon.classList.remove('removed-white-background');
  }

  moonIcon.addEventListener('click', () => {
    if(androidButton.classList.contains('set-white-background')){
      androidButton.classList.remove('set-white-background');
      softwareIcon.classList.remove('removed-white-background')
    }
    if(!document.body.classList.contains('dark') &&
    androidUl.classList.contains('appear')){
      androidButton.classList.add('set-white-background');
      softwareIcon.classList.add('removed-white-background');
    }
  })

  //============================================================================

//content    filtering

//============================================================================
  function postInfoCollector(element) {
    return {
        title: element.firstElementChild.firstElementChild.innerText,
        category: element.children[1].firstElementChild.children[3].children[1].innerText,
        description: element.children[2].children[1].innerText,
        // imageaddress: element.children[2].children[0].firstElementChild.getAttribute('src')
        imageaddress: element.children[2].children[0].firstElementChild.src
    }
}

let mainContentPosts = document.querySelectorAll('.main-content .post');

let arrayOfPostObjects = [];
mainContentPosts.forEach((element) => {
  arrayOfPostObjects.push(postInfoCollector(element));
})

// let jsonFile = JSON.stringify(arrayOfPostObjects);

//request for getting json file:
let requestForJson = new XMLHttpRequest();
//Get json file:
requestForJson.open('GET','/Jsons/postinfo.json');

let jsonFile;

//when you got it, it's saved in responseText property
requestForJson.onload = function (){
  //here we can store json file in a variable for turning it to an object
  //but we just here logged it to the console:
  jsonFile = requestForJson.responseText;
}
requestForJson.send();


//filtering original array based on condition:
let filteredResult;
function filterArray(arrayOfobj,condition){
  if(condition === 'انتخاب'){
    creatPosts(arrayOfPostObjects);
  }else {
    filteredResult = arrayOfobj.filter((obj) => {
      return obj.category === condition;
    });
    //here filteredResult should send to a function to creat posts from that;
    creatPosts(filteredResult);
  }
  
}


//getting output from select tag:
let selectTag = $('select');
selectTag.addEventListener('change', getCategory);
function getCategory(e){
  let condition = e.target.value;
  
  filterArray(arrayOfPostObjects,condition);
}


//creat post elements function :
function creatPosts(filteredArray) {
  let row = '';
  filteredArray.forEach((obj) =>{
      row += `
      <div class="post">
            <h3>
              <a href="#">${obj.title}</a>
            </h3>
            <div class="post-spans">
              <div class="row">
                <div class="fl-right">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>salar</span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <span>۳,۰۷۱,۷۵۴ </span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <span>۱۷ آذر ۱۴۰۲</span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-folder-o" aria-hidden="true"></i>
                  <a href="#">${obj.category}</a>
                </div>
              </div>
            </div>
            <div class="description">
              <div class="img-box">
                <img
                  src=${obj.imageaddress}
                  alt="microsoft edge"
                />
              </div>
              <div class="text">
                <p>
                   ${obj.description}
                </p>
              </div>
            </div>
            <a href="#">ادامه مطلب</a>
          </div>
          <hr>
      `
  });
  $('.main-content').innerHTML = row;
}
//=================================================================
//Searchbar Part
//=================================================================


let searchTag = $('input[type="search"]')

let wordTyped = '';

searchTag.addEventListener('input',() => {
    wordTyped = searchTag.value;
    $('.main-content').innerHTML = '';//when we add letter to search, we dont want to concat(+) to innerHTML
   searchMyWord(arrayOfPostObjects,wordTyped);
});
function searchMyWord(array,word) {
  for(item of array){
  let includedTLC = (item.title + item.category + item.description).toLowerCase().includes(word);
  let includedTUC = (item.title + item.category + item.description).toUpperCase().includes(word);
  if (includedTLC || includedTUC) {
    creatPostFromSearched([item]);
    continue;
    }
  if (word === '') {
    creatPosts(arrayOfPostObjects);
    }
  }
}

function creatPostFromSearched(item){
  let row = '';
  item.forEach((obj) =>{
      row += `
      <div class="post">
            <h3>
              <a href="#">${obj.title}</a>
            </h3>
            <div class="post-spans">
              <div class="row">
                <div class="fl-right">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>salar</span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <span>۳,۰۷۱,۷۵۴ </span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <span>۱۷ آذر ۱۴۰۲</span>
                </div>
                <div class="fl-right">
                  <i class="fa fa-folder-o" aria-hidden="true"></i>
                  <a href="#">${obj.category}</a>
                </div>
              </div>
            </div>
            <div class="description">
              <div class="img-box">
                <img
                  src=${obj.imageaddress}
                  alt="microsoft edge"
                />
              </div>
              <div class="text">
                <p>
                   ${obj.description}
                </p>
              </div>
            </div>
            <a href="#">ادامه مطلب</a>
          </div>
          <hr>
      `
  });
  $('.main-content').innerHTML += row;
}

//==========================================================================
//                              setInterval for advers
//==========================================================================

let adverboxs = document.querySelectorAll('.ads-img-box')
let adverArray = Array.from(adverboxs).slice(0,2);
function movingAdvers(){
  adverArray.forEach((item) => {
    if(item.scrollLeft > 900){
      item.scrollLeft = 0;
    }else{
      item.scrollLeft += 340;
    }
  });
  let adverInterval;
  return {
    start() {
      adverInterval = setInterval(movingAdvers,1500);
    },
    stop() {
      clearInterval(adverInterval);
    }
  }
}

let adverIteration = movingAdvers();
adverIteration.start();

document.querySelector('div.ads').addEventListener('mouseenter',() => {
  adverIteration.stop();
});
  
document.querySelector('div.ads').addEventListener('mouseleave', () => {
  adverIteration.start();
});


//======================================================================
//        onload message
//======================================================================
  window.addEventListener('load', () => {
    //with sessionStorage , we can show the message just once until browser will close
  if($('.onload') && sessionStorage.getItem('designer') === null){
    $('.onload').classList.add('onloadbg');
    $('.onload .message').classList.add('showmessage');
    $('.onload .message p').classList.add('show-para-inmessage');
    $('.onload .message button').classList.add('show-para-inmessage');
    sessionStorage.setItem('designer', 'mokaram');
  }  

  $('.onload button').addEventListener('click', () => {
    $('.onload').classList.remove('onloadbg');
    $('.onload .message').classList.remove('showmessage');
    $('.onload .message p').classList.remove('show-para-inmessage');
    $('.onload .message button').classList.remove('show-para-inmessage');
  })
  });

