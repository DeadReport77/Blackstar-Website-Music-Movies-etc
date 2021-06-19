const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

// Button Event Handler methons/functions
//when the button of specific themed color is clicked run the method

darkButton.onclick = () => {
    // body.classList.remove('light');
    // body.classList.add('dark');

    //short hand to add and remove -- the replace
    body.classList.replace('light', 'dark');
    //set theme to lacal storage
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = ()=> {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');

};

solarButton.onclick = ()=> {

    if (body.classList.contains('solar')) {

        body.classList.remove('solar');
        solarButton.style.cssText = `
            --bg-solar: var(--yellow);
        `;

        solarButton.innerText = 'solarize';

        localStorage.removeItem('isSolar');


    } else { //when solar is selected do this

        solarButton.style.cssText = `
            --bg-solar: white;
        `;

        body.classList.add('solar');
        solarButton.innerText = 'normal';

        localStorage.setItem('isSolar', true);

    }

};
