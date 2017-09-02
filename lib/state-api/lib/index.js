class StateApi {
  constructor(rawData) {
    this.data = {
      authors: this.mapIntoObject(rawData.authors),
      articles: this.mapIntoObject(rawData.articles),
      searchTerm: '',
      timestamp: ''
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;

    setTimeout(() => {
      const fakeArticle = {
        ...rawData.articles[0],
        id: 'fakeArticleId'
      };
      // this.data.articles[fakeArticle.id] = fakeArticle;

      this.data = {
        ...this.data,
        articles: {
          ...this.data.articles,
          [fakeArticle.id]: fakeArticle
        }
      };
    }, 1000);
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  };

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({ searchTerm });
  };

  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  getState = () => {
    return this.data;
  };

  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };
}

export default StateApi;
