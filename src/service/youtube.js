import axios from 'axios';
export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  };

  async mostPopular() {
    const response = await this.youtube('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25
      }
    });

    return response.data.items;
    // try {
    //   const response = await fetch(
    //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result = await response.json();
    //   return result.items;
    // } catch (err) {
    //   return console.log(err);
    // }
  }

  async search(query) {
    const response = await this.youtube('search', {
      params: {
        part: 'snippet',
        type: 'video',
        q: query,
        maxResults: 25
      }
    });

    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    // try {
    //   const response = await fetch(
    //     `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&type=video&maxResults=25&q=${query}&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result = await response.json();
    //   return result.items.map(item => ({ ...item, id: item.id.videoId }));
    // } catch (err) {
    //   return console.log(err);
    // }
  }
}