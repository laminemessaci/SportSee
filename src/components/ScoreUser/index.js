// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  ScoreContainer,
  ScoreLabel,
  ScoreTitle,
  ScoreValue,
} from './index.styles.js';
import { Score } from '../../model/Score.js';
import { theme } from '../../constants';

/**
 * Component for showing  User score
 *
 * @component ScoreUser
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @param   {boolean}  api   is Api available?
 * @param   {Object}  userApiScore   User data from Api
 * @return {JSX.Element}
 */
function ScoreUser({ userId, data, api = false, userApiScore }) {
  const scoreData = new Score(userId, data);
  const scoreDataApi = new Score(userId, data, userApiScore);
  //console.log(scoreData);
  const pieData = [
    {
      name: 'completed',
      value: api ? scoreDataApi.scoreApi : scoreData.score,
      fillColor: scoreData.fill,
    },
    {
      name: 'not-completed',
      value: 1 - scoreData.score,
      fillColor: `${theme.colors.transparent}`,
    },
  ];

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={67}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <ScoreLabel>
        <ScoreValue>{100 * scoreData.score}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreContainer>
  );
}

ScoreUser.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.string,
  userApiScore: PropTypes.number,
};
export default ScoreUser;
