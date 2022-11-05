// @ts-nocheck
import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ColorBullet,
  DailyActivityContainer,
  DailyActivityLegend,
  DailyActivityTitle,
  LegendDetail,
} from './index.styles.js';
import { theme } from '../../constants/index.js';
import CustomTooltip from '../CustomTooltip/index.js';
import { Activity } from '../../model/DailyActivity.js';
import React from 'react';

/**
 * Component for showing  Daily Activities
 *
 * @component DailyActivity
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @param   {boolean} api   is Api available?
 * @param  {Object}  dailyActivityApi   User data from Api
 * @return {JSX.Element}
 */
function DailyActivity({ userId, data, api = false, dailyActivityApi }) {
  const dailyActivity = new Activity(userId, data?.userActivities)._activities;
  const dailyActivitiesApi = new Activity(
    userId,
    data?.userActivities,
    dailyActivityApi
  )._activitiesApi;

  return (
    <DailyActivityContainer>
      <DailyActivityTitle>Activité quotidienne</DailyActivityTitle>

      <DailyActivityLegend>
        <LegendDetail>
          <ColorBullet background={`${theme.colors.neutral800}`}></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background={`${theme.colors.primary500}`}></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </DailyActivityLegend>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={api ? dailyActivitiesApi : dailyActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${theme.colors.neutral200}`}
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke={`${theme.colors.neutral400}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={['dataMin - 1', 'dataMax + 2']}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke={`${theme.colors.neutral400}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, 'dataMax + 50']}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${theme.colors.neutral800}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${theme.colors.primary500}`}
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            wrapperStyle={{ outlineStyle: 'none' }}
            content={<CustomTooltip />}
            cursor={{
              fill: 'rgba(0, 0, 0, 0.1)',
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </DailyActivityContainer>
  );
}

DailyActivity.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.bool,
  dailyActivityApi: PropTypes.object,
};

export default DailyActivity;
