import { DATA } from "../Jsons/data.js";
let $ = selector => {
  return document.querySelector(selector);
};

const expandListArrowButton = $("ul.apps button span");
const expandButton = $(".continue");
const logo = $(".logo img");
const weatherIcon = $(".moon-icon>i");
const ul = $("#nav ul.menu");
const hamburgerMenuIcon = $("#nav span.menusign");
const hamburgerCloseIcon = $("#nav span.close");
const systemItem = $(".system-item");
const mobileItem = $(".mobile-item");
const softwareItem = $(".software-item");
const graphicItem = $(".graphic-item");
const mobileCloseButton = $("#nav span.close");
const adverBox = $("div.ads");

const mobileListItems = [systemItem, mobileItem, softwareItem, graphicItem];

const toggleClasses = (element, ...classNames) => {
  classNames.forEach(className => element.classList.toggle(className));
};

const toTop = document.querySelector(".totop");
window.addEventListener("scroll", () => {
  if (scrollY > 900) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
//

//if we are in index.html file that has expandButton:
if (expandButton) {
  let appsMenuIsOpen = false;
  //when clicks
  expandButton.onclick = function () {
    const initialHeight = "418px";
    let appsList = document.querySelector("ul.apps");

    if (!appsMenuIsOpen) {
      appsList.style["max-height"] = `${appsList.scrollHeight}px`;
      expandListArrowButton.innerHTML = "expand_less";
      appsMenuIsOpen = !appsMenuIsOpen;
    } else {
      appsList.style["max-height"] = initialHeight;
      expandListArrowButton.innerHTML = "expand_more";
      appsMenuIsOpen = !appsMenuIsOpen;
    }
  };
}

//

hamburgerMenuIcon.addEventListener("click", () => {
  ul.classList.add("openmenu");
});

// closing sidemenu
hamburgerCloseIcon.addEventListener("click", () => {
  ul.classList.remove("openmenu");
});

// dark theme
let isDarkTheme;
console.log(weatherIcon);

weatherIcon.addEventListener("click", () => {
  //when moonicon clicks
  document.body.classList.toggle("dark");
  isDarkTheme = document.body.classList.contains("dark");

  if (isDarkTheme) {
    logo.src = "images/logo-night.png";
  } else {
    logo.src = "images/logo-2.png";
  }

  if (weatherIcon.classList.contains("fa-moon-o")) {
    weatherIcon.classList.replace("fa-moon-o", "fa-sun-o");
  } else {
    weatherIcon.classList.replace("fa-sun-o", "fa-moon-o");
  }
  weatherIcon.classList.toggle("iconrotate");
});

window.onload = () => {
  if (innerWidth < 812) {
    mobileViewClickHandler();
  }
};
window.onresize = () => {
  if (innerWidth < 812) {
    mobileViewClickHandler();
  } else {
    removeMobileClickHandlers();
  }
};

function closeSubmenuHandler() {
  const openItem = document.querySelector(".postransform.childwhitecolor");
  if (openItem) {
    openItem.classList.remove("postransform", "childwhitecolor");
    openItem.parentElement.classList.remove("backcolor");
  }
}

function mobileViewClickHandler() {
  mobileListItems.forEach(listItem =>
    listItem.addEventListener(
      "click",
      mobileListItemClickHandler.bind(listItem)
    )
  );
  //closing submenus if main menu window get closed
  mobileCloseButton.addEventListener("click", closeSubmenuHandler);
}

function mobileListItemClickHandler() {
  const submenuItem = this.querySelector(".submenu");
  const wasOpen =
    submenuItem.classList.contains("postransform") &&
    submenuItem.classList.contains("childwhitecolor");

  closeSubmenuHandler();

  if (!wasOpen) {
    toggleClasses(submenuItem, "postransform", "childwhitecolor");
    this.classList.toggle("backcolor");
  }
}

function removeMobileClickHandlers() {
  mobileListItems.forEach(listItem =>
    listItem.removeEventListener(
      "click",
      mobileListItemClickHandler.bind(listItem)
    )
  );
}

function checkTransition() {
  if (visualViewport.width > 810) {
    ul.classList.add("transition-none");
  } else if (visualViewport.width < 810) {
    ul.classList.remove("transition-none");
  }
}
if (visualViewport.width > 810) {
  ul.classList.add("transition-none");
}

window.addEventListener("resize", () => {
  checkTransition();
});

if (screen.width < 811) {
  let lastul = document.querySelector("div.submenu ul.col-3");
  lastul.classList.remove("col-3");
}
//===========================================================================
//software and android content change
//============================================================================
let androidButton = document.querySelector("h3.android");
let softwareIcon = document.querySelector(".pc-icon");
let androidUl = document.querySelector(".android-ul");
let softUl = document.querySelector(".soft-ul");
//appear and disappear lists
androidButton.addEventListener("click", () => {
  softUl.classList.add("disappear");
  androidUl.classList.add("appear");
});
softwareIcon.addEventListener("click", () => {
  softUl.classList.remove("disappear");
  androidUl.classList.remove("appear");
});
//changing background color
androidButton.addEventListener("click", setBc1);
function setBc1() {
  if (!document.body.classList.contains("dark")) {
    androidButton.classList.add("set-white-background");
    softwareIcon.classList.add("removed-white-background");
  }
}
softwareIcon.addEventListener("click", setBc2);
function setBc2() {
  androidButton.classList.remove("set-white-background");
  softwareIcon.classList.remove("removed-white-background");
}

weatherIcon.addEventListener("click", () => {
  if (androidButton.classList.contains("set-white-background")) {
    androidButton.classList.remove("set-white-background");
    softwareIcon.classList.remove("removed-white-background");
  }
  if (
    !document.body.classList.contains("dark") &&
    androidUl.classList.contains("appear")
  ) {
    androidButton.classList.add("set-white-background");
    softwareIcon.classList.add("removed-white-background");
  }
});

//============================================================================

//filtering based on selected category

//============================================================================

let filteredData;
function filterArray(category) {
  if (category === "انتخاب") {
    creatPosts(DATA);
  } else {
    filteredData = DATA.filter(post => {
      return post.category === category;
    });
    //here filteredResult should send to a function to creat posts from that;
    creatPosts(filteredData);
  }
}

//getting output from select tag:
let selectTag = $("select");
if (selectTag) {
  selectTag.addEventListener("change", getCategory);
}
function getCategory(e) {
  let category = e.target.value;

  filterArray(category);
}

//Rendering filtered posts :
function creatPosts(filteredArray) {
  let row = "";
  filteredArray.forEach(obj => {
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
      `;
  });
  if ($(".main-content")) {
    $(".main-content").innerHTML = row;
  }
}
//=================================================================
//Search Input
//=================================================================

let searchInput = $('input[type="search"]');

let InputValue = "";

//onInput event
if (searchInput) {
  searchInput.addEventListener("input", () => {
    InputValue = searchInput.value.toLowerCase();
    $(".main-content").innerHTML = ""; //when we add letter to search, we dont want to concat(+) to innerHTML
    const filteredData = DATA.filter(
      post =>
        (post.title.toLowerCase().includes(InputValue) &&
          post.description.toLowerCase().includes(InputValue)) ||
        post.category.toLowerCase().includes(InputValue)
    );
    if (filteredData.length > 0) {
      creatPosts(filteredData);
    } else {
      $(
        ".main-content"
      ).innerHTML = `<p style="text-align: center;margin-top: 50px;">برنامه مورد نظر یافت نشد</p>`;
    }
  });
}
//==========================================================================
//                              setInterval for advers
//==========================================================================

let adverboxs = document.querySelectorAll(".ads-img-box");
let adverArray = Array.from(adverboxs).slice(0, 2);
function movingAdvers() {
  adverArray.forEach(item => {
    if (item.scrollLeft > 900) {
      item.scrollLeft = 0;
    } else {
      item.scrollLeft += 340;
    }
  });
  let adverInterval;
  return {
    start() {
      adverInterval = setInterval(movingAdvers, 1500);
    },
    stop() {
      clearInterval(adverInterval);
    },
  };
}

let adverIteration = movingAdvers();
adverIteration.start();

if (adverBox) {
  adverBox.addEventListener("mouseenter", () => {
    adverIteration.stop();
  });
  adverBox.addEventListener("mouseleave", () => {
    adverIteration.start();
  });
}

window.onload = () => {
  creatPosts(DATA);
};

//======================================================================
//        onload message
//======================================================================
// window.addEventListener('load', () => {
//with sessionStorage , we can show the message just once until browser will close
// if($('.onload') && sessionStorage.getItem('designer') === null){
//   $('.onload').classList.add('onloadbg');
//   $('.onload .message').classList.add('showmessage');
//   $('.onload .message p').classList.add('show-para-inmessage');
//   $('.onload .message button').classList.add('show-para-inmessage');
//   sessionStorage.setItem('designer', 'mokaram');
// }

// $('.onload button').addEventListener('click', () => {
//   $('.onload').classList.remove('onloadbg');
//   $('.onload .message').classList.remove('showmessage');
//   $('.onload .message p').classList.remove('show-para-inmessage');
//   $('.onload .message button').classList.remove('show-para-inmessage');
// })
// });
