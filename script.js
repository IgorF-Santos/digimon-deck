const BASE_URL = 'https://digimon-api.vercel.app/api/digimon/level/';

const getDigimonByLevel = async(levelStatus, imgDigimon) => {
    const DATA = await fetch(BASE_URL + levelStatus);
    const DATA_JSON = await DATA.json();
    for(let i = 0; i < DATA_JSON.length; i++){                
        newImg = document.createElement('img');
        newImg.src = DATA_JSON[i].img;
        imgDigimon.appendChild(newImg)
    }        
}

const showDigimons = async() => {    
    const levels = [
        'intraining',
        'rookie',
        'fresh',
        'ultimate',
        'champion',
        'mega'
    ]
    
    const container = document.getElementById('container');
    const img = document.createElement('img');

    const inTraining = document.getElementById('in-training');
    const rookie = document.getElementById('rookie');
    const fresh = document.getElementById('fresh');
    const ultimate = document.getElementById('ultimate');    
    const champion = document.getElementById('champion');    
    const mega = document.getElementById('mega');

    try{               
        getDigimonByLevel(levels[0], inTraining);
        getDigimonByLevel(levels[1], rookie);
        getDigimonByLevel(levels[2], fresh);
        getDigimonByLevel(levels[3], ultimate);
        getDigimonByLevel(levels[4], champion);
        getDigimonByLevel(levels[5], mega);
    }
    catch(error){
        console.log(error.message);
    }
}

showDigimons();