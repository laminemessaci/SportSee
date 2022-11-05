// @ts-nocheck
import PropTypes from 'prop-types';
import React from 'react';
import { icons_type_infos, icons_unit_infos } from '../../constants/index.js';
import { toFrenchIntegerFormat } from '../../utils/index.js';
import {
  IconContainer,
  IconInfos,
  IconInfoType,
  IconInfoValue,
} from './index.styles.js';

/**
 * Micronutrient
 * @param   {string}  type   type of nutriment
 * @param   {number}  value  value of nutriment
 *
 * @return {JSX.Element}
 */
const IconComponent = ({ type, value }) => {
  return (
    <IconContainer>
      <img src={icons_type_infos[type]} alt={type} width="60" height="60" />

      <IconInfos>
        <IconInfoValue data-testid="card-measure">{`${toFrenchIntegerFormat(
          value
        )} ${icons_unit_infos[type]}`}</IconInfoValue>

        <IconInfoType data-testid="card-type">{type}</IconInfoType>
      </IconInfos>
    </IconContainer>
  );
};

IconComponent.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default IconComponent;
