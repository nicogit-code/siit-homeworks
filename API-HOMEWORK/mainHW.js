const apiUrl = 'https://games-world.herokuapp.com/games/';

(async function() {
    const url = apiUrl;

    const games = await fetch(apiUrl)
    .then(res => res.json());
    displayGames(games);
    attachEventListeners();
    
})()
    .catch(err => console.warn('The URL is incorrect', err));


function displayGames(games) {
    const fragment = document.createDocumentFragment();
    
    for(const game of games) {
        const gameHtml = createHtml(game);
        fragment.append(gameHtml);
    }

    document.body.append(fragment);
}


function createHtml(game) {
    const wrapper = document.createElement('article');

    const title = document.createElement('h2');
    title.innerHTML = game.title;

    const a = document.createElement('a');
    a.href = apiUrl + game._id;
    a.innerHTML = game.title;
    a.appendChild(title);

    const description = document.createElement('div');
    // title.append(description);
    description.innerHTML = game.description;

    const image = document.createElement('img');
    image.src = game.imageUrl;

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.classList.add('js-edit-button');
    editBtn.setAttribute('data-game-id', game._id);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('js-delete-button');
    deleteBtn.setAttribute('data-game-id', game._id);

    wrapper.append(title, a, description, image, editBtn, deleteBtn);

    return wrapper;
}

function attachEventListeners() {
    document.addEventListener('click', handleClick);

    function handleClick(e) {
        const gameId = e.target.getAttribute('data-game-id', '_id');
        
        if(e.target.classList.contains('js-edit-button')) {
            handleEdit(gameId);
        } else if(e.target.classList.contains('js-delete-button')) {
            handleDelete(gameId);
        }
    }
}


function handleEdit(id) {
    fetch(apiUrl + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'Change name'
    })
    .then(res => res.json())
    .then(console.log);
}

function handleDelete(id) {
    fetch(apiUrl + id, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(console.log);
}


function addGame(game) {
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
}


document.querySelector('.create-new-entry').addEventListener('click', () => {
    addGame({
        "title" : "Call of Duty®: WWII Returned",
                "releaseDate" : 1333929600,
                "genre" : "First Person Shooter",
                "publisher" : "Activision",
                "imageUrl" :
                "https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$"
    });
});



