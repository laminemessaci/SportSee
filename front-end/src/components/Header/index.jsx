import React from 'react';
import { icons } from '../../constants/index.js';
import {
  HeaderContainer,
  HeaderLink,
  ImageLogo,
  LinkedList,
  Logo,
} from './index.styles.js';

/**
 * Header component app
 *
 * @component Header
 * @return {JSX.Element}
 */

export function Header() {
  return (
    <HeaderContainer>
      <Logo href="/">
        <ImageLogo
          // style={{ width: '20px' }}
          src={icons.SportSeeLogo}
          alt="SportSee"
        />
      </Logo>

      <nav>
        <LinkedList>
          <li style={{ margin: '8px' }}>
            <HeaderLink href="/">Accueil</HeaderLink>
          </li>
          <li style={{ margin: '8px' }}>
            <HeaderLink href="/">Profil</HeaderLink>
          </li>
          <li style={{ margin: '8px' }}>
            <HeaderLink href="/">Réglages</HeaderLink>
          </li>
          <li style={{ margin: '8px' }}>
            <HeaderLink href="/">Communauté</HeaderLink>
          </li>
        </LinkedList>
      </nav>
    </HeaderContainer>
  );
}
