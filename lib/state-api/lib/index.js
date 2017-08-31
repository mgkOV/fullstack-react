class StateApi {
  constructor(rawData) {
    this.data = {
      authors: this.mapIntoObject(rawData.authors),
      articles: this.mapIntoObject(rawData.articles)
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  };

  // getArticles() {
  //   return this.mapIntoObject(this.rawData.articles);
  // }
  //
  // getAuthors() {
  //   return this.mapIntoObject(this.rawData.authors);
  // }

  getState = () => {
    return this.data;
  };
}

export default StateApi;
