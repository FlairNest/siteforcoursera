const reviews = [{
    id:1,
    name:"Brad Pitt",
    job: "Actor",
    img:"images/1.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores facilis consectetur ab cupiditate voluptate pariatur, sint sunt cum earum quae, veniam a fuga magnam eveniet nesciunt. Aliquid, dignissimos officiis.",
},
{
    id:2,
    name:"I don't know his name",
    job: "I don't know his job",
    img:"images/2.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique enim odio, at dolores vel unde voluptatibus sapiente id illo doloribus quis tenetur ex porro consequuntur, perferendis libero saepe totam sint?",
},
{
    id:3,
    name:"Also Brad Pitt",
    job: "Cool Actor",
    img:"images/3.jfif",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusamus excepturi distinctio aliquam esse, doloribus adipisci vel facere labore nisi suscipit corrupti vitae impedit accusantium sint? Non maiores nihil aut? ",
},
{
    id:4,
    name:"Another Brad Pitt",
    job: "Real Actor",
    img:"images/4.jfif",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, obcaecati, est quis voluptate veritatis eligendi consectetur perspiciatis fugit exercitationem explicabo hic incidunt, architecto modi totam in sunt perferendis officiis praesentium!",
}]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem =  2;

window.addEventListener("DOMContentLoaded", function(){
showPerson(currentItem);  
});

function showPerson(person){
const item = reviews[person];
img.src = item.img;
author.textContent=item.name;
job.textContent = item.job;
info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
currentItem++;

if(currentItem > reviews.length - 1){
    currentItem = 0;
}
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
currentItem--;
if(currentItem < 0){
currentItem = reviews.length -1;
}
showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
currentItem = Math.floor(Math.random() * reviews.length);
showPerson(currentItem);
});