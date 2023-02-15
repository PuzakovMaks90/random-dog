const doc = document;
const getRndBtn = doc.querySelector(".random-dog button");
const select = doc.querySelector(".random-dog select");
const urls = {
    rnd: 'https://dog.ceo/api/breeds/image/random',
    all: 'https://dog.ceo/api/breeds/list/all'
}
let dogImgWindow = doc.querySelector(".dog-img-window");

getList();

getRndBtn.onclick = () => getRandomDog(dogImgWindow);
select.onchange = () => getDog();



async function getRandomDog(img) {
    let res = await fetch(urls.rnd);
    let data = await res.json();
    let json = await data;
    let picture = json.message;
    img.innerHTML = `<img src="${picture}" alt="" class="picture">`;
}


async function getList(){
    let listAllBreedsURL = await fetch(urls.all);
    let data = await listAllBreedsURL.json();
    let result = await data;
    console.log(result.message);
    for(let key in result.message){
        let option = select.appendChild(doc.createElement("option"));
        option.innerText = key;
    }
}

function getDog() {
    console.log(this.html);
}
