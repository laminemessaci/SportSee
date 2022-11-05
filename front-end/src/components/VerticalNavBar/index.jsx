import React from 'react';
import { icons } from '../../constants';

import {
  Activities,
  ActivityIcon,
  Copyright,
  VerticalBarContainer,
} from './index.style.js';

/**
 * Navigation Bar Component
 *
 * @return {JSX.Element}
 */
function VerticalNavBar() {
  return (
    <VerticalBarContainer>
      <nav>
        <Activities>
          <li>
            <a href="/">
              <ActivityIcon src={icons.Meditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={icons.Swimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={icons.Cycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={icons.bodybuilding} alt="Musculation" />
            </a>
          </li>
        </Activities>
      </nav>

      <Copyright>Copyright SportSee 2022</Copyright>
    </VerticalBarContainer>
  );
}

export default VerticalNavBar;
