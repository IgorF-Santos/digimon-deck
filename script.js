const urlAPI = 'https://digimon-api.vercel.app/api/digimon/';

const showDigimons = async() => {
    //const img = document.getElementById('img')
    try{
        const DATA = await fetch(urlAPI);
        const DATA_JSON =  await DATA.json();

        for(let i = 0; i < DATA_JSON.length; i++){
            const container = document.getElementById('container');
            const img = document.createElement('img');
            img.setAttribute('width', '300px');
            img.src = DATA_JSON[i].img;

            container.appendChild(img)
            //return DATA_JSON[i].img;
        }
        
        //console.log(DATA_JSON[0].img)
    }
    catch(error){
        console.log(error.message);
    }
}

const IMAGE = async() => {
    const container = document.getElementById('container');
    const img = document.createElement('img');
    img.setAttribute('width', '300px');
    img.src = await showDigimons();

    container.appendChild(img)
}

showDigimons();