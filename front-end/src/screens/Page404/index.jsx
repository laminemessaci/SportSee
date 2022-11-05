import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, MainContainer, StatusCode } from './index.style.js';

function Page404() {
  return (
    <MainContainer>
      <StatusCode>404</StatusCode>

      <ErrorMessage>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorMessage>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </MainContainer>
  );
}

export default Page404;
