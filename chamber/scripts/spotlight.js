const URL = "https://nicholas-28.github.io/wdd230/chamber/json/data.json";


const requestSpotlights = async(URL) =>{
    const aresponse = await fetch(URL);
    console.log(aresponse);

    if (aresponse.status === 200){
        const data = await aresponse.json();
        console.log(data);
        let spotlights = data.companies;
        console.log(spotlights);
        displaySpotlight(spotlights[2],'.spot1');
        displaySpotlight(spotlights[5],'.spot2');
        displaySpotlight(spotlights[3],'.spot3');

        
    }
    else{
        console.log('Something is malfungtioning with the URL sheck it out')
    }
};

const displaySpotlight = (spotlights,sectionCLass)=>{
    
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let membershipLevel = document.createElement('p');

    h3.textContent = `${spotlights.name}`;
    address.textContent = `📍${spotlights.address}`;
    website.textContent = `🌐 ${spotlights.name} site`;
    phone.textContent = `☎️ ${spotlights.phone}`;
    membershipLevel.textContent = `👥 ${spotlights.membership}`;

    website.setAttribute('href', spotlights.url);
    image.setAttribute('src', spotlights.image);
    image.setAttribute('alt',`Logo of ${spotlights.name}`);
    image.setAttribute('loading', 'lazy');


    document.querySelector(sectionCLass).appendChild(h3);
    document.querySelector(sectionCLass).appendChild(image);
    document.querySelector(sectionCLass).appendChild(phone);
    document.querySelector(sectionCLass).appendChild(website)
    document.querySelector(sectionCLass).appendChild(membershipLevel);
    
    




}


requestSpotlights(URL);



