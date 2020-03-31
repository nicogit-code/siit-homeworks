const apiUrl = 'https://games-world.herokuapp.com/games/';

class GameListView {
    constructor(){ 
        const model = new GameModel();
        this.games = model.getAll();
    }

    async createGameList() {
        const fragment = document.createDocumentFragment();

        for(const game of await this.games) {
            const gameHtml = this.createGameHtml(game);
            fragment.append(gameHtml);
        }

        document.querySelector('.js-game-list').append(fragment);
    }

    createGameHtml(game) {
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.innerHTML = game.title;
        a.href = 'gameDetails.html?gameId=' + game._id;

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.classList.add('js-edit-button');
        editBtn.setAttribute('data-game-id', game._id);
    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('js-delete-button');
        deleteBtn.setAttribute('data-game-id', game._id);
        
        p.append(a, editBtn, deleteBtn);

        return p;
    }
}


function attachEventListeners() {
    document.addEventListener('click', handleClick);

    function handleClick(e) {
        const gameId = e.target.getAttribute('data-game-id', game._id);
        
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


const view = new GameListView();

view.createGameList();