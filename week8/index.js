//this code runs synchronously 
function showData(){ 
    console.log("showData function runnning");
}

//this code runs asynchronously
async function getRandomFact() { //compensates for delay 
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    //console.log(response);
    const data = await response.json(); //how we store and share data
    console.log(data.text);
    //console.log("getData finished");
}

async function getTodaysFact() { //compensates for delay 
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
    //console.log(response);
    const data = await response.json(); //how we store and share data
    console.log(data.text, "\n");
    //console.log("getData finished");
}

getRandomFact();
getTodaysFact();


//getData();
//showData();