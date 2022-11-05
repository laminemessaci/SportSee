// @ts-nocheck
import PropTypes from 'prop-types';
import IconComponent from '../IconComponent/index.jsx';
import { MacroContainer } from './index.styles.js';
import { User } from '../../model/User.js';
import React from 'react';

/**
 * Component that displays a list of Nutrition values
 *
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @param   {boolean} api   is Api available?
 * @param  {Object}  keyData   User data from Api
 *
 * @return {JSX.Element}
 */
function Macros({ userId, data, api = false, keyData }) {
  // console.log(data);
  const { nutriments, values } = new User(userId, data)._keyData;
  const { nutrimentsApi, valuesApi } = new User(userId, data, keyData)
    ._keyDataApi;

  return (
    <MacroContainer>
      {(api ? nutrimentsApi : nutriments).map((nutriment, index) => (
        <IconComponent
          type={nutriment}
          value={(api ? valuesApi : values)[index]}
          key={index}
        />
      ))}
    </MacroContainer>
  );
}

Macros.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  keyData: PropTypes.object,
  api: PropTypes.string,
};

export default Macros;
