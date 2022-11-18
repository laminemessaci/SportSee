// @ts-nocheck
import React, { Suspense, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Switch from 'react-switch';
import { useLoaderData, defer, Await } from 'react-router-dom';

import { getAllDataMocked } from '../../services/mockedAPI/index.js';

import { Header } from '../../components/Header/index.jsx';
import UserProfile from '../../components/UserProfile/index.js';
import VerticalNavBar from '../../components/VerticalNavBar/index.jsx';
import { theme } from '../../constants/index.js';

import {
  ApiText,
  DashboardContainer,
  LabelContainer,
  MainContent,
} from './index.style.js';
import Loader from '../../components/Loader/index.js';

const Home = () => {
  const data = useLoaderData();

  const [checked, setChecked] = useState(false);

  const handleChange = (prev) => {
    setChecked(prev, !prev);
  };

  return (
    <>
      <DashboardContainer>
        <VerticalNavBar />
        <MainContent>
          <LabelContainer>
            <label>
              <ApiText>Api</ApiText>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor={theme.colors.primary500}
              />
            </label>
          </LabelContainer>
          <Suspense
            fallback={
              <>
                <Loader
                  type={'spinningBubbles'}
                  color={'#ff6060'}
                  width={200}
                  height={200}
                />
              </>
            }
          >
            <Await
              resolve={data}
              errorElement={<p>Error loading user data. </p>}
            >
              {data?.userMainData.map((user) => (
                <UserProfile
                  key={user.userId}
                  userId={user.userId}
                  imageSource={`/images/${user.userInfos.firstName}.jpg`}
                  data={user}
                  api={checked}
                />
              ))}
            </Await>
          </Suspense>
        </MainContent>
      </DashboardContainer>
    </>
  );
};

export default Home;

export function loader() {
  return getAllDataMocked();
}
