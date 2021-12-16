// jquery start 1 to 8 line
$(document).ready(function(){

    $('#profile-ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });
});

/**progress bar */

const bars = document.querySelectorAll('.progress-bar');
//console.log(bars);

bars.forEach(function(bar){
    //console.log(bar);
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';
    //console.log(percentage);
});

/**counter */
const counters = document.querySelectorAll('.counter');
//console.log(counters);

function runCounter(){
    counters.forEach(counter =>{
        counter.innerText = 0; 

        let target = +counter.dataset.count;
        let step = target / 100
        //console.log(target);

        let countIT = function(){
            let displayedCount =  +counter.innerText;
            if(displayedCount < target){
                counter.innerText = Math.ceil(displayedCount + step);
                //console.log(displayedCount);
                //countIT();
                setTimeout(countIT, 1);
            }
            else{
                counter.innerText = target;
            }
        }
        countIT();
    });
}
//runCounter();

let counterSection = document.querySelector(".counter-section");

let options = {
    rootMargin: '0px 0px -50px 0px'
}
let done = 0;
const sectionObserver = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting && done!==1){
        
        done = 1;
        runCounter();
        //console.log('intersecting trigger....');
    }
}, options)

sectionObserver.observe(counterSection);

/**portfolio section */
const menu = [
    {
      id: 1,
      title: "Menu",
      category: "JavaScript",
      img: "./images/arr-images/item-1.jpeg",
      link: "https://muhammadfuzail.github.io/FirstProject/",
    },
    {
      id: 2,
      title: "Ecommerce",
      category: "Wordpress",
      img: "./images/arr-images/item-11.jpg",
      link: "https://muhammadfuzail.github.io/ApptakTestDemoSite/",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "HTML",
      img: "./images/arr-images/item-3.jpeg",
    },
    {
      id: 4,
      title: "country delight",
      category: "CSS",
      img: "./images/arr-images/item-4.jpeg",
    },
    {
      id: 5,
      title: "egg attack",
      category: "PHP",
      img: "./images/arr-images/item-5.jpeg",
    },
    {
      id: 6,
      title: "oreo dream",
      category: "bootstrap",
      img: "./images/arr-images/item-6.jpeg",
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "illustrator",
      img: "./images/arr-images/item-7.jpeg",
    },
    {
      id: 8,
      title: "Muhammad Fuzail CV",
      category: "JavaScript",
      img: "./images/arr-images/cv-template.png",
	  link: "https://muhammadfuzail.github.io/MuhammadFuzailCV.github.io/",
    },
    /*{
      id: 9,
      title: "Muhammad Fuzail CV",
      category: "JavaScript",
      img: "./images/arr-images/cv-template.png",
	  link: "https://muhammadfuzail.github.io/MuhammadFuzailCV.github.io/",
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      img: "./images/arr-images/item-10.jpeg",
    },*/
  ];

  const sectionWork = document.querySelector(".work");
  const buttonContainer =  document.querySelector(".btn-container");
  const pWrapper = document.querySelector(".portfolio-wrapper");

  /* load item */
  window.addEventListener("DOMContentLoaded", function(){
      //console.log("heloo");
      displayMenuItem(menu);
      displayMenuButtons();
      
  });

 

// first 
  function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(item){
      //console.log(item);
      return `<div class="portfolio-wrapper">
      <div class="item design">
        <a href= ${item.link}>
          <img src=${item.img} alt="${item.title}">
        </a>
        <h2>${item.title}</h2>
      </div>
              </div>`;
    });
    displayMenu = displayMenu.join("");
    //sectionWork.innerHTML = displayMenu;
    pWrapper.innerHTML =displayMenu;
    //console.log(displayMenu);
  }

  function displayMenuButtons(){

    /*const categories = menu.map(function(item){
        return item.category
      });*/
      const categories = menu.reduce(function(values, item){
        
        if(!values.includes(item.category)){
          values.push(item.category)
        }
        return values
      },['all']);
      //console.log(categories);
      const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn" data-id= ${category}>
          ${category}
      </button>`;

      })
      .join("");
      //console.log(categoryBtns);
      buttonContainer.innerHTML = categoryBtns;
      const filterBtns = buttonContainer.querySelectorAll('.filter-btn');
       // filter btns second
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.id;
      console.log(category);
      
      
      
      const menuCategory =  menu.filter(function (menuItem){
        //console.log(menuItem.category);
        if(menuItem.category === category){
          return menuItem
        }
        //return menuItem;
      });
      //console.log(menuCategory);
      if(category === 'all'){
        displayMenuItem(menu);
      }
      else{
        displayMenuItem(menuCategory);
      }
    });
  });
  }

  $('.slider').slick({
    arrows: false,
    autoplay: true
  });

