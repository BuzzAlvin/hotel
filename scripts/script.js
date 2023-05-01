var menu_btn = document.querySelector(".hamburger");
var nav_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function(){
    menu_btn.classList.toggle('is-active');
    nav_menu.classList.toggle('is-active');
}); 

/* $(menu_btn).click(function(){
    $(".hamburger").addClass("is-active");
    
}) 
 */