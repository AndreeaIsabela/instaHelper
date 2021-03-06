import { AxiosResponse, AxiosStatic } from 'axios'

export class InstagramApi {
  private http: AxiosStatic;

  /**
   * Inject http module into constructor.
   *
   * @param {AxiosStatic} http
   */
  constructor (http: AxiosStatic) {
    this.http = http
  }

  /**
   * Get all Instagram media for the given user.
   *
   * @param {string} token
   * @returns {Promise<AxiosResponse>}
   */
  async getUserMedia (token: string): Promise<AxiosResponse> {
    const fields = 'id,media_type,media_url,timestamp,caption,username'
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

    const { data } = await this.http.get(url)

    return data
  }
  /**
   * Get Instagram media details for the given user.
   *
   * @param {string} token
   * @returns {Promise<AxiosResponse>}
   */

  async getUserMediaDetails (token: string, mediaID: string): Promise<AxiosResponse> {
    const fields = 'id,media_type,media_url,timestamp,caption,username,children{media_url,thumbnail_url}'
    const url = `https://graph.instagram.com/${mediaID}?fields=${fields}&period=lifetime&access_token=${token}`

    const { data } = await this.http.get(url)

    return data
  }
}
