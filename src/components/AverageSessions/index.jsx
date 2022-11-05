// @ts-nocheck
import PropTypes from 'prop-types';
import React from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SessionsAverage } from '../../model/SessionsAverage.js';

import {
  AverageSessionsContainer,
  AverageSessionsTitle,
  TooltipContainer,
} from './index.styles.js';

/**
 * Component for showing  average sessions in a chart
 *
 * @component AverageSessionsChart
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @param   {boolean}  api   is Api available?
 * @param  {Object}  averageApi   User data from Api
 * @return {JSX.Element}
 */
export function AverageSessionsChart({
  userId,
  data,
  api = false,
  averageApi,
}) {
  const sessions = new SessionsAverage(userId, data.userAverageSession)
    ._sessions;

  const sessionsApi = new SessionsAverage(
    userId,
    data.userAverageSession,
    averageApi
  )._sessionsApi;
  console.log('averageApi: ', averageApi);

  return (
    <AverageSessionsContainer>
      <AverageSessionsTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsTitle>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, 'dataMax + 60']}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            type={`${userId === '18' ? 'step' : 'monotone'}`}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outlineStyle: 'none' }}
            cursor={{
              stroke: 'rgba(0, 0, 0, 0.1)',
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionsContainer>
  );
}

AverageSessionsChart.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.string,
  averageApi: PropTypes.object,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
