import Title from 'components/atoms/Title';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ConfirmButton from 'components/moleculs/ConfirmButton';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import Head from 'next/head';
import React, { useState } from 'react';

function payments() {
  //TODO:Add function here
  const [isLoading, _setIsLoading] = useState(false);
  const [isSent, _setIsSent] = useState(true);

  let weeks: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    weeks.push(
      <option value={i + 1} key="i">
        {i + 1} {i + 1 > 1 ? 'semaine' : 'semaines'}
      </option>,
    );
  }
  return (
    useIsAdmin() && (
      //Display the name of the title inside the page header.
      <>
        <Head>
          <title>CEV - gestion payements</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Rappel de payements">
              <svg
                width="25"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                className="title__svg">
                <path
                  d="M17.853 0c-1.573 0-2.906 1.055-3.368 2.48a2.647 2.647 0 00-.778-.111 2.982 2.982 0 00-2.96 2.96c0 .829.365 1.569.925 2.11a3.599 3.599 0 00-1.555 1.332 3.492 3.492 0 00-1.739-.48A3.551 3.551 0 005.38 9.955a3.492 3.492 0 00-1.74-.481 3.572 3.572 0 00-3.552 3.553v10.659c0 4.566 3.724 8.29 8.29 8.29h6.255a8.269 8.269 0 006.217-2.813l2.813-3.183c1.633-1.86 1.735-4.668.222-6.625l-2.48-3.182V8.216c.181.042.366.074.593.074 1.619 0 2.96-1.341 2.96-2.96 0-1.62-1.341-2.961-2.96-2.961-.3 0-.541.041-.777.11C20.758 1.056 19.426 0 17.853 0h0zm0 2.369c.606 0 1.06.425 1.147.999-.62.3-.842.463-1.147.63-.306-.167-.528-.33-1.148-.63.088-.574.542-1 1.148-1zm-4.146 2.368c-.11 0 .246.037.63.185.263.102.583.269.888.407-.305.14-.625.306-.888.408-.384.148-.74.185-.63.185a.579.579 0 01-.592-.593c0-.337.255-.592.592-.592zm8.29 0c.339 0 .593.255.593.592a.579.579 0 01-.592.593c.11 0-.245-.037-.63-.185-.263-.102-.582-.269-.888-.408.306-.138.625-.305.889-.407.384-.148.74-.185.629-.185zm-4.144 1.925c.314.171.546.32 1.184.629v14.027h2.369V20.06l.592.777a2.769 2.769 0 01-.111 3.553l-2.813 3.22a5.887 5.887 0 01-4.441 1.998H8.378a5.904 5.904 0 01-5.922-5.921v-10.66c0-.67.514-1.184 1.185-1.184.67 0 1.184.514 1.184 1.185v1.184h2.369v-2.369c0-.67.513-1.184 1.184-1.184.67 0 1.184.513 1.184 1.184v2.369h2.369v-3.553c0-.67.514-1.184 1.184-1.184.671 0 1.185.513 1.185 1.184v3.553h2.368V7.29c.639-.31.87-.458 1.185-.63h0z"
                  stroke="null"
                />
              </svg>
            </Title>
            <ContentWrapperDiv className="content__wrapper--fw">
              <form action="">
                <div className="form__field">
                  <label
                    htmlFor="child"
                    className="field__label field__label--left">
                    Envoyer un rappel automatique "X" semaines après
                    l'inscription :
                  </label>
                  <select className="select field__input" id="child">
                    {weeks.map(week => week)}
                  </select>
                </div>
                <ConfirmButton
                  validate="Valider"
                  cancel="Annuler"
                  className="form__button__wrapper--small"></ConfirmButton>
              </form>
            </ContentWrapperDiv>
            <ContentWrapper className="content__wrapper--nt content__wrapper--fw">
              <h4 className="form__subtitle">
                Envoyer un rappel à tous les mauvais payeurs :
              </h4>
              <p className="field__info">
                (Inclus tous ceux qui n’ont pas encore payé leur abonnement pour
                l’année en cours)
              </p>
              <button className="cta cta--secondary cta--smallTop">
                {!isLoading && !isSent && 'Envoyer un rappel'}
                {isLoading && !isSent && (
                  <>
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="sro">Chargement</span>
                  </>
                )}
                {!isLoading && isSent && (
                  <>
                    <svg
                      className="svg--sent svg--left"
                      width="26"
                      height="26"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#004546">
                      <path d="M13 0C5.8 0 0 5.8 0 13s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L23.688 10.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S2 19.102 2 13 6.898 2 13 2c3 0 5.695 1.195 7.594 3.094L22 3.687C19.7 1.388 16.5 0 13 0zm11.281 4.281L13 15.563 8.719 11.28 7.28 12.72l5 5 .719.687.719-.687 12-12L24.28 4.28z" />
                    </svg>
                    <span>Envoyé</span>
                  </>
                )}
              </button>
            </ContentWrapper>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
}

export default payments;
