const apiUrl = 'https://games-world.herokuapp.com/games/';

class GameDetailsView {
    constructor() {
        const model = new GameModel();
        const queryParams = location.search.split('&');
        const gameId = queryParams
            .find(param => param.includes('gameId='))
            .split('=')[1];

        this.game = model.findById(gameId);
    }

    async displayGame() {
        const article = document.querySelector('.js-game-details');
        article.append(await this.createHtml());
    }


    async createHtml() {
        const game = await this.game;
        const wrapper = document.createElement('article');
    
        const title = document.createElement('h2');
        // title.innerHTML = game.title;
    
        const a = document.createElement('a');
        a.href = apiUrl + game._id;
        a.innerHTML = game.title;
        a.appendChild(title);
    
        const description = document.createElement('div');
        description.innerHTML = game.description;
    
        const image = document.createElement('img');
        image.src = game.imageUrl;

    
        wrapper.append(title, a, description, image);
    
        return wrapper;
    }
}



const view = new GameDetailsView();
view.displayGame();