// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../../model/User.js';
import { FirstName, Message, Title } from './index.styles.js';

/**
 * Component for showing  User Message
 *
 * @component UserMessage
 * @param   {string}  userId  User Id
 * @param   {string}  message    message
 * @param   {boolean}  isLoading
 * @param   {boolean}  api   is Api available?
 * @param   {Object}  userApi   User data from Api
 * @return {JSX.Element}
 */
function UserMessage({
  userId,
  message,
  isLoading,
  data,
  api = false,
  userApi,
}) {
  const firstName = new User(userId, data)._firstName || 'unknown user';

  return (
    <>
      <Title>
        Bonjour{' '}
        <FirstName>
          {!isLoading && api ? userApi?.userInfos?.firstName : firstName}
        </FirstName>
      </Title>
      <Message>
        <span>{!isLoading || firstName === 'unknown user' ? message : ''}</span>
      </Message>
    </>
  );
}

UserMessage.propTypes = {
  userId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  api: PropTypes.string,
  userApi: PropTypes.object,
};

export default UserMessage;
