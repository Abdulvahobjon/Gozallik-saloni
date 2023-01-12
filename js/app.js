let btn = document.querySelector("#menu-main-menu-1");
let btnItem = document.querySelectorAll("#menu-main-menu-1 li");

function removeItem() {
    btnItem.forEach((item)=>{
        item.classList.add("menu-item-has-children");
        item.classList.add("menu-item-48");
      
        item.classList.remove("current-menu-ancestor");
        item.classList.remove("current-menu-parent");
        item.classList.remove("menu-item-has-children");
        item.classList.remove("menu-item-47");
    }) 
}

function addItem(addList) {
  addList.classList.remove("menu-item-has-children");
  addList.classList.remove("menu-item-48");

  addList.classList.add("current-menu-ancestor");
  addList.classList.add("current-menu-parent");
  addList.classList.add("menu-item-has-children");
  addList.classList.add("menu-item-47");
}



btnItem.forEach((item) => {
    item.addEventListener("click", function () {
    removeItem();
    addItem(item);
  });
});
