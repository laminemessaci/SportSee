// @ts-nocheck
import PropTypes from 'prop-types';
import { TooltipContainer, TooltipLine } from './index.styles.js';

import { theme } from '../../constants/index.js';
import React from 'react';

/**
 * Component for showing  tooltip  pop-up
 *
 * @component CustomTooltip
 * @param   {boolean}  active
 * @param   {Array} payload
 * @return {JSX.Element}
 */
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine
          // @ts-ignore
          background={`${theme.colors.neutral800}`}
        >
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine
          // @ts-ignore
          background={`${theme.colors.primary500}`}
        >
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomTooltip;
