// @ts-nocheck
/**Constructor Pattern - Average session
 * @constructor
 * @param {string} userId
 * @param {object} data - A average session with a day
 * @param {object} dataApi contains data from Api
 */

/**Constructor Pattern - Sessions Chart
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 */
export class SessionsAverage {
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data;
    this._dataApi = dataApi?.sessions;
    // console.log('sessions  ' + data);
  }

  /**
   * Formats User sessions from initial data
   *
   * @return  {{day: string, sessionLength:number}}   formatted sessions
   */
  get _sessions() {
    let sessions = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    this._data.map((user) => {
      if (user.userId === parseInt(this._userId)) {
        const item = user.sessions;
        // console.log('item=> ', item);
        item.map((session) => {
          sessions.push({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
          });
        });
      }
    });

    return sessions;
  }

  /**
   * Formats User sessions  provided from Api
   *
   * @return  {{day: string, sessionLength:number}}   formatted sessions
   */
  get _sessionsApi() {
    let sessions = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    this._dataApi.map((session) => {
      sessions.push({
        day: days[session.day - 1],
        sessionLength: session.sessionLength,
      });
    });

    return sessions;
  }
}
