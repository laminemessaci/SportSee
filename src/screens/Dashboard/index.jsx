// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { AverageSessionsChart } from '../../components/AverageSessions';
import DailyActivity from '../../components/DailyActivity';
import { Header } from '../../components/Header';
import Macros from '../../components/Macros';
import RadarActivities from '../../components/RadarActivities/index.jsx';
import Score from '../../components/ScoreUser';
import UserMessage from '../../components/UserMessage/index.js';
import VerticalNavBar from '../../components/VerticalNavBar';
import { user_message } from '../../constants/index.js';
import { getAllDataMocked } from '../../services/mockedAPI/index.js';
import { useNavigate, useParams } from 'react-router';
import {
  ChartsGrid,
  ContentGrid,
  DashboardContainer,
  MainChart,
  MainContent,
} from './index.style.js';
import { useSportSeeApi } from '../../services/hook/index.js';
import Loader from './../../components/Loader/index';

const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

/**
 * @file User Dashboard page
 */

function Dashboard() {
  const [state, setState] = useState(initialState);

  const { userId, api } = useParams();
  console.log('UseParams ::', api, userId);

  const {
    userApi,
    sessionsApi,
    performancesApi,
    averageApi,
    isApiLoading,
    errorApi,
  } = useSportSeeApi(userId);
  // console.log('userApi :', userApi);
  // console.log('sessionsApi :', sessionsApi);
  // console.log('pefApi :', performancesApi);
  // console.log('averageApi :', averageApi);
  // console.log('isApiLoading  ', isApiLoading, errorApi);

  // console.log('path: ', window.location.href);

  const navigate = useNavigate();
  if (!['12', '18'].includes(userId)) {
    navigate('/Page404');
  }

  const { isLoading, isDataLoaded, data: mockedData, error } = state;

  useEffect(() => {
    async function getMockedData() {
      try {
        const userData = await getAllDataMocked();

        setState({
          ...state,
          data: userData,
          isDataLoaded: true,
          error: '',
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, error, isLoading: false });
      }
    }
    getMockedData();
    setState({ ...state, isLoading: false });
    console.log('state: ', state);
  }, []);

  if (isLoading || isApiLoading) {
    return (
      <>
        <Loader
          type={'spinningBubbles'}
          color={'#ff6060'}
          width={200}
          height={200}
        />
      </>
    );
  }
  if (errorApi || error) {
    return (
      <div>
        <Header />
        <DashboardContainer>
          <VerticalNavBar />
          <MainContent>
            <UserMessage
              userId={userId}
              message={
                api ? errorApi : ' ): quelque chose ne tourne pas rond !'
              }
              isLoading={isLoading}
              data={mockedData}
            />
          </MainContent>
        </DashboardContainer>
      </div>
    );
  }
  if (isDataLoaded) {
    return (
      <>
        <Header />
        <DashboardContainer>
          <VerticalNavBar />
          <MainContent>
            <UserMessage
              userId={userId}
              message={user_message}
              isLoading={isLoading}
              data={mockedData}
              api={api}
              userApi={userApi}
            />
            <ContentGrid>
              <ChartsGrid>
                <MainChart>
                  <DailyActivity
                    userId={userId}
                    data={mockedData}
                    dailyActivityApi={sessionsApi?.sessions}
                    api={api}
                  />
                </MainChart>
                <AverageSessionsChart
                  userId={userId}
                  data={mockedData}
                  averageApi={averageApi}
                  api={api}
                />
                <RadarActivities
                  userId={userId}
                  data={mockedData}
                  performancesApi={performancesApi}
                  api={api}
                />
                <Score
                  userId={userId}
                  data={mockedData}
                  userApiScore={userApi.score}
                  api={api}
                />
              </ChartsGrid>
              <Macros
                userId={userId}
                data={mockedData.userMainData}
                keyData={userApi?.keyData}
                api={api}
              />
            </ContentGrid>
          </MainContent>
        </DashboardContainer>
      </>
    );
  }
}

export default Dashboard;
