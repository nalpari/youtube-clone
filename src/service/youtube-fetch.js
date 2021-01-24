export default class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (err) {
      return console.log(err);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&type=video&maxResults=25&q=${query}&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (err) {
      return console.log(err);
    }
  }
}
