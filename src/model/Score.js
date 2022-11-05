import { theme } from '../constants/index.js';

/**Constructor Pattern - Score
 * @constructor
 * @param {object} score - A score
 * @param {object} data contains Users data
 * @param {object} dataApi contains data from Api
 */
export class Score {
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data.userMainData;
    this._dataApi = dataApi;
  }

  /**
   * Get the name
   *
   * @return  {string} name
   */
  get name() {
    return 'score';
  }

  /**
   * Get  user score
   *
   * @return  {number} score number
   */
  get score() {
    let score = 0;
    this._data.forEach((element) => {
      if (element.userId === parseInt(this._userId)) {
        score = element.todayScore;
      }
    });
    //console.log('score::', score);
    return score;
  }

  get scoreApi() {
    return this._dataApi;
  }
  /**
   * Get color
   *
   * @return  {string}
   */
  get fill() {
    return `${theme.colors.primary500}`;
  }
}
