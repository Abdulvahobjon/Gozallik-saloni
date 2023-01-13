// let btn = document.querySelector("#menu-main-menu-1");
// let btnItem = document.querySelectorAll("#menu-main-menu-1 li");

// function removeItem() {
//     btnItem.forEach((item)=>{
//         item.classList.add("menu-item-has-children");
//         item.classList.add("menu-item-48");
      
//         item.classList.remove("current-menu-ancestor");
//         item.classList.remove("current-menu-parent");
//         item.classList.remove("menu-item-has-children");
//         item.classList.remove("menu-item-47");
//     }) 
// }

// function addItem(addList) {
//   addList.classList.remove("menu-item-has-children");
//   addList.classList.remove("menu-item-48");

//   addList.classList.add("current-menu-ancestor");
//   addList.classList.add("current-menu-parent");
//   addList.classList.add("menu-item-has-children");
//   addList.classList.add("menu-item-47");
// }



// btnItem.forEach((item) => {
//     item.addEventListener("click", function () {
//     removeItem();
//     addItem(item);
//   });
// });

// $(document).ready(function(){
//     $('#menu-main-menu-1  li ').click(function(event){
//         $('#menu-main-menu-1  li').addClass('menu-item-has-children');
//         $('#menu-main-menu-1  li').addClass('menu-item-48');
//         $(this).removeClass("current-menu-ancestor")
//         $(this).removeClass("current-menu-parent")
//         $(this).removeClass("menu-item-has-children")
//         $(this).removeClass("menu-item-47")
//         thisAttrHref = $(this).attr('href')
//         thisAttrHrefOffset = $(thisAttrHref).affset().top+50
//         $("html , body").animate({scrollTop: thisAttrHrefOffset});
//         // event.preventDefa
//     })
// })

// $(window).scroll(function(){
//     $("#menu-main-menu-1 li").each(function(){
//         containerRowTop  = $(this).offset().top;
//         if($(document).scrollTop() > containerRowTop){
//             thisOfs = $(this).attr("id")
//             $(".menu-main-menu-1 li").removeClass('menu-item-has-children')
//             $(".menu-main-menu-1 li").removeClass('menu-item-48')
//             ActiveID = $(this).addClass("current-menu-ancestor").attr('id')
//             ActiveID = $(this).addClass("current-menu-parent").attr('id')
//             ActiveID = $(this).addClass("menu-item-has-children").attr('id')
//             ActiveID = $(this).addClass("menu-item-47").attr('id')
//         }
//     })
// })


let section  = document.querySelectorAll('section')
let navLink  = document.querySelectorAll('#menu-main-menu-1 li')
window.addEventListener('scroll' , function(){
  section.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop
    let height  = sec.offsetHeight
    let id = sec.getAttribute('id')
    if(top >= offset && top < offset + height){
      navLink.forEach(links =>{
        links.classList.remove('active')
        document.querySelector('#menu-main-menu-1 a[href*=' + id + ']')
        links.classList.add('active')
      })
    }
});
})


let bgGif = document.querySelector('#bg-gif')
let num  = 1
setInterval(function(){
  if(num <= 7){
    bgGif.style.backgroundImage = `url(./img/img-gif/${num++}.png)`
  }else{
    num = 1
  }
} , 1000)