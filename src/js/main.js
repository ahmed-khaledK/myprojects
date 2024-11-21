const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd88889d5a7mshc2954c7fc075c25p1f11bfjsn7804b3f12958',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}}
  
async function getGames(id) { 
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id ? id :"MMORPG"}`, options);
        const data = await response.json();
        // console.log(data);
    displayCard(data)
      }
      
      function displayCard(array) {
        let cartona = "";
        for (let index = 0; index < array.length; index++) {
           cartona +=`<div class="card border-2 border-neutral-900 rounded-lg flex flex-col justify-between opacity-60 hover:opacity-100 ease-out duration-300 hover:scale-105" id="card">
        <div class="img px-2 pt-2 flex justify-centre">
            <img src="${array[index].thumbnail}" alt="${array[index].title}" class="w-full h-auto">
        </div>
        <div class="header flex justify-between py-3 px-2">
        <div>
            <h1 class="font-semibold">${array[index].title}</h1>
        </div>
        <div>
            <h4 class="border border-blue-950 rounded-md bg-blue-950 font-semibold px-2 shadow-md">Free</h4>
        </div>
        </div>
        <p class="text-center px-2 h-20 overflow-y-auto no-scrollbar">
        ${array[index].short_description}
        </p>
        <div class="Footer flex justify-between py-3 px-2 border-t-2 border-neutral-900">
            <h6 class="text-[10px] border border-gray-500 text-white rounded-lg px-2 py-1">${array[index].genre}</h6>
            <h6 class="text-[10px] border border-gray-500 text-white rounded-lg px-2 py-1">${array[index].platform}</h6>
        </div>
        </div>`}

    document.getElementById('game').innerHTML = cartona;

    let gameDetails = document.getElementById("gam-det");
    let gameCards = document.querySelectorAll(".card");
    let landPage = document.getElementById('land');

    gameCards.forEach((card,index) => {
    card.addEventListener('click', () => {
      getGame(array[index].id)
    gameDetails.classList.add("w-full", "h-screen", "z-50");
    gameDetails.classList.remove("hidden");
    landPage.classList.add("hidden");
  });
});
}    

      let btns = document.querySelectorAll('.nav-link');
      // console.log(btns);
      for (var btn = 0; btn < btns.length; btn++) { 
        btns[btn].addEventListener('click', function(e) {
       getGames(e.target.innerHTML);
        });
      }

async function getGame(id) { 
  const respon = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
  const dat = await respon.json();
  console.log(dat);
  detailCard(dat);
}

function detailCard(arr) {
  let details = "";
     details +=`<div>
<div class="mx-24 my-10 text-white text-[32px] font-bold flex justify-between">
    <h1>Game Details</h1>
    <a class="text-[36px] btn"><i class="fa-regular fa-circle-xmark" style="color: #ffffff;"></i></a>
</div>
    <div class="details flex text-white mx-24 gap-8">
        <div class="h-60 w-1/3">
            <img src="${arr.thumbnail}" class="w-full" alt="">
        </div>
        <div class="w-2/3">
            <h1 class="font-bold text-[30px]">${arr.title}</h1>
            <ul>
                <li class="font-semibold py-2">Category:<span class="border rounded-md border-blue-500 bg-blue-500 text-black font-semibold px-2">${arr.genre}</span></li>
                <li class="font-semibold py-2">Platform:<span class="border rounded-md border-blue-500 bg-blue-500 text-black font-semibold px-2">${arr.platform}</span></li>
                <li class="font-semibold py-2">Status:<span class="border rounded-md border-blue-500 bg-blue-500 text-black font-semibold px-2">Live</span></li>
            </ul>
            <p class="py-5">${arr.short_description}</p>
            <a href="" class="border-2 border-yellow-500 px-2 py-2 my-2 rounded-lg hover:bg-yellow-500 ease-out duration-200">Show Game</a>
        </div>
    </div>
</div>`

document.getElementById('gam-det').innerHTML = details;

addCloseListener();

function addCloseListener() {
  let closeBtn = document.querySelector('.btn');
  let gameDetails = document.getElementById('gam-det');
  let landPage = document.getElementById('land');
  if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        gameDetails.classList.add("hidden");
        gameDetails.classList.remove("w-full", "h-screen", "z-50");
        landPage.classList.remove("hidden");
})
};
}
}
  
getGames ();
