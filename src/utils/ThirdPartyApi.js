class Api {
  constructor(option = {}) {
    this._option = option;
    this._header = new Headers();
    // this._header.append("Content-Type", "application/json");
  }

  fetchData(categoria, requestOptions) {
    return fetch(
      `${this._option.url}${categoria}&lenguaje=es&apiKey=${this._option.token}`,
      requestOptions
    ).then((response) => {
      return response.json(this._option.url, categoria);
    });
  }

  getCards(categoria) {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };

    return this.fetchData(categoria, requestOptions);
  }

  //   deleteCards(id) {
  //     const requestOptions = {
  //       method: "DELETE",
  //       headers: this._header,
  //     };
  //     return this.fetchData(`/cards/${id}`, requestOptions);
  //   }

  //   addCard(options) {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: this._header,
  //       body: JSON.stringify({
  //         name: options.name,
  //         link: options.link,
  //         owner: options.owner,
  //       }),
  //     };
  //     return this.fetchData("cards", requestOptions);
  //   }

  //   like() {
  //     const requestOptions = {
  //       method: "GET",
  //       headers: this._header,
  //     };
  //     return this.fetchData("cards", requestOptions);
  //   }

  //   updateLike(cardId) {
  //     const requestOptions = {
  //       method: "PUT",
  //       headers: this._header,
  //     };
  //     return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  //   }

  //   removeLike(cardId) {
  //     const requestOptions = {
  //       method: "DELETE",
  //       headers: this._header,
  //     };
  //     return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  //   }

  //   getUserInfo() {
  //     const requestOptions = {
  //       method: "GET",
  //       headers: this._header,
  //     };
  //     return this.fetchData(`users/me`, requestOptions);
  //   }

  //   updateUserInfo(options) {
  //     const requestOptions = {
  //       method: "PATCH",
  //       headers: this._header,
  //       body: JSON.stringify({
  //         name: options.name,
  //         about: options.about,
  //       }),
  //     };
  //     return this.fetchData(`users/me`, requestOptions);
  //   }

  //   updateProfilePhoto(options) {
  //     const requestOptions = {
  //       method: "PATCH",
  //       headers: this._header,
  //       body: JSON.stringify({
  //         avatar: options.avatar,
  //       }),
  //     };
  //     return this.fetchData(`users/me/avatar`, requestOptions);
  //   }

  //   changeLikeCardStatus(cardId, status) {
  //     return status ? this.updateLike(cardId) : this.removeLike(cardId);
  //   }
}

const api = new Api({
  token: "3b2b72ec47ae472aacacf3d6c9f3d894",
  url: "https://newsapi.org/v2/everything?q=",
});

export default api;
