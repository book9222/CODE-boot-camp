
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("All done");
//     console.log(this);
// }

// req.onerror = function () {
//     console.log("ERROR!!!")
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, Wait for parse", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data parsed", data)
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("Fail Error", e)
//     })

// const fetchBitPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json();
//         console.log(daya.ticker.price)
//     }
//     catch {
//         console.log('Something went wrong', e)
//     }
// }



const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("Submitted");
    //console.log(form.elements.query.value);
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.log(res.data[0].show.image.medium);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}