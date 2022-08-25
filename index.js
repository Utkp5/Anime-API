let anime = document.querySelector(".Anime");
let charact = document.querySelector(".Character");
let quote = document.querySelector(".Quote");
let btn = document.querySelector("#button");


const colorChange = () => 
{
    let colorChange = Math.floor(Math.random()*16777215).toString(16);
    btn.style.backgroundColor = "#" + colorChange;
}

const clickNext = async () => 
{
    colorChange();
    let url = await fetch("https://animechan.vercel.app/api/random");
    let data = await url.json();
    anime.innerHTML = `&#128073; ${data.anime}`
    charact.innerHTML = `&#128073; ${data.character}`
    quote.innerHTML = `&#9996; ${data.quote}`
    // console.log(data);
}

btn.addEventListener("click", clickNext);