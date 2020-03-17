class GameModel {
    apiUrl = 'https://games-world.herokuapp.com/games/';

    getAll() {
        return fetch(this.apiUrl).then(res => res.json());
    }

    findById(id) {
        return fetch(apiUrl + id).then(res => res.json());
    }
}

