const body = document.querySelector(".body");
const linkContainer = document.querySelector(".link-container");
const pictureElement = document.querySelector(".picture");
const myName = document.querySelector(".my-name");
const infoText = document.querySelector(".info-text");
const link1 = document.querySelector(".project-folder-link-1");
const link2 = document.querySelector(".project-folder-link-2");
const link3 = document.querySelector(".project-folder-link-3");
const infoFlex = document.querySelector(".information-flex")
const list1 = document.querySelector(".list1");
const link1content = link1.innerHTML;
const list2 = document.querySelector(".list2");
const link2content = link2.innerHTML;
const list3 = document.querySelector(".list3");
const link3content = link3.innerHTML;

const HOST_ADDRESS = "127.0.0.1:5000"

var images = {
    img0: "static/863992.png",
    img1: "717608.png",
    img2: "996677.jpg",
    img3: "1067764.png"
};

body.addEventListener("mouseover", e => {
    pictureElement.src = images.img0;
    list1.style.opacity = 1;
    link1.innerHTML = link1content;
    list2.style.opacity = 1;
    link2.innerHTML = link2content;
    list3.style.opacity = 1;
    link3.innerHTML = link3content;

});



link1.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img0;
    list1.style.opacity = 0;
    link1.innerHTML = 
    '<a class="button-link" href="http://' + HOST_ADDRESS + '/web"><button class="link-button">Web Applications</button></a>';
    
});

link1.addEventListener("mouseleave", e => {
    list1.style.opacity = 1;
    link1.innerHTML = link1content;
});

link2.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img0;
    list2.style.opacity = 0;
    link2.innerHTML = 
    '<a class="button-link" href="http://' + HOST_ADDRESS + '/games"><button class="link-button">Games</button></a>';
});

link2.addEventListener("mouseleave", e => {
    list2.style.opacity = 1;
    link2.innerHTML = link2content;
});

link3.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img0;
    list3.style.opacity = 0;
    link3.innerHTML = 
    '<a class="button-link" href="http://' + HOST_ADDRESS + '/bash"><button class="link-button">Bash Scripts</button></a>';
});

link3.addEventListener("mouseleave", e => {
    list3.style.opacity = 1;
    link3.innerHTML = link3content;
});


