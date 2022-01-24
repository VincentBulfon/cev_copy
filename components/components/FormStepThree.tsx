import RecapView from 'components/moleculs/RecapView';
import { NameEnum } from 'operations/__generated__/globalTypes';
import React, { useEffect, useMemo, useState } from 'react';

import { ColorsEnum, FinishStep } from 'alltypes';
import { useScrollIntoView } from 'hooks/userScrollIntoViewHook';
import Spinner from './Spinner';

const FormStepThree = ({
  handleFinish,
  handlePrevious,
  formContent,
  data,
  loading,
}: FinishStep) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [payNow, setPayNow] = useState<boolean | null>(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  /**
   * will always contains the correct value because elements are always at their defaut key inside the array
   */
  const childrenCount = formContent.childrenContent.length;
  /**
   * Count the number of voucher for this inscription
   */
  const voucherCount = () => {
    let count = 0;
    for (const child of formContent.childrenContent) {
      if (child.voucher) {
        count++;
      }
    }
    return count;
  };
  const optionPrice = useMemo(() => {
    let pricesObj = {
      MEMBERSH1PFEE1: 0,
      MEMBERSHIPFEE2: 0,
      INSSURANCE: 0,
    };
    data.data.options.forEach(opt => {
      if (opt.name === NameEnum.MEMBERSH1PFEE1) {
        pricesObj['MEMBERSH1PFEE1'] = opt.price.price;
      }
      if (opt.name === NameEnum.MEMBERSHIPFEE2) {
        pricesObj['MEMBERSHIPFEE2'] = opt.price.price;
      }
      if (opt.name === NameEnum.INSSURANCE) {
        pricesObj['INSSURANCE'] = opt.price.price;
      }
    });
    return pricesObj;
  }, [data]);

  return (
    <>
      <section
        className={
          isActive ? `form__step__three active` : `form__step__three inactive`
        }>
        <h3 className="form__subtitle">Mode de paiement :</h3>
        <p className="content__wrapper__text">
          Vous avez le choix entre{' '}
          <span className="content__wrapper__text--bold">
            payer directement par bancontact
          </span>{' '}
          ou{' '}
          <span className="content__wrapper__text--bold">en main propre.</span>{' '}
          Si votre paiement échoue ou que vous quittez la page de paiement vous
          pouvez toujours régler vos dus depuis l'onglet "vos inscriptions" une
          fois connecté.
        </p>
        <p className="content__wrapper__text">
          Votre compte sera créer et votre enfant inscrit une fois{' '}
          <span className="content__wrapper__text--bold">
            que vous aurez cliqué sur valider ou payer.
          </span>
        </p>
        <section className="content__wrapper__text">
          <div className="content__wrapper__content">
            <h4 className="content__wrapper__text--bold">Récapitulatif</h4>
            <RecapView
              children_count={childrenCount}
              voucher_count={voucherCount()}
              inssurance_price={optionPrice.INSSURANCE}
              semester1_price={optionPrice.MEMBERSH1PFEE1}
              semester2_price={optionPrice.MEMBERSHIPFEE2}
              voucher_value={25}
            />
          </div>
        </section>
        <div className="form__radio">
          <fieldset className="form__input__group">
            <legend className="field__label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 32 29"
                className="field__svg">
                <path
                  stroke="null"
                  d="M20.37.28l-.72.98-4.87 6.8H9.7c-1.7 0-2.9 1.02-4.06 2.02l-.42.37-5.24 4.37v3.16l6.8-5.66.46-.38c1.07-.92 1.7-1.45 2.46-1.45h3.35l-5.55 7.79-.23.34v2.7l1.79-.99 4.44-2.43c1.3-.7 2.1-1.33 3.3-1.33.8 0 1.41.63 1.41 1.56 0 .54-.12.75-.34 1.02-.22.28-.62.6-1.18.95a20.29 20.29 0 00-2.77 2.24l-.07.12-.08.07c-1.41 2.06-3.22 3.76-6.46 3.76H-.03v2.43H7.3c3.4 0 5.62-1.73 7.3-3.64l2.88 2.2.99.72.72-.98L31.34 10l.69-.99-.95-.72-9.72-7.3-1-.71zm.53 3.45l7.79 5.81-10.75 15-1.52-1.13c.5-.46 1-.9 1.56-1.26.6-.38 1.25-.79 1.78-1.44.53-.65.87-1.56.87-2.58 0-.13-.02-.26-.03-.38a2.71 2.71 0 001.97-1.3c1-1.53.4-3.83-1.37-5.12a3.95 3.95 0 00-2.39-.84c-1.03 0-2.02.47-2.58 1.33-.46.7-.56 1.54-.38 2.4-1.55.25-2.67 1.08-3.53 1.55L20.9 3.73zm1.97 3.8c-.39-.02-.74.11-.94.38-.4.54-.09 1.44.72 2.05.8.6 1.8.69 2.2.15.4-.53.08-1.48-.72-2.09a2.4 2.4 0 00-1.26-.49zm-4.06 5.4c.31 0 .62.13.95.37.8.6 1.02 1.52.8 1.86h-.04v.04c-.03.06-.1.1-.19.12l-1.94-1.14c-.2-.43-.23-.88-.11-1.07.12-.18.42-.19.53-.19z"
                />
              </svg>
              Sélectionnez un mode de paiement : *
            </legend>

            <label
              htmlFor="hand_paiement"
              className="field__label field__label--inline"
              title="En main propre">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="svg__csh">
                <path
                  stroke="null"
                  d="M17.3.1c-3 0-5.3 2.4-5.3 5.3 0 2 1.1 3.7 2.7 4.6v.7c0 3.6 3 6.6 6.6 6.6a6.6 6.6 0 001.1-13.1c-.5-2.3-2.6-4-5.1-4zm0 2.7c1 0 2 .6 2.4 1.5a6.7 6.7 0 00-4 3c-.7-.4-1-1-1-1.9 0-1.5 1.1-2.6 2.6-2.6zm4 4a4 4 0 014 4 4 4 0 01-4 3.9 4 4 0 01-4-4 4 4 0 014-4zM10 16C5.8 16 0 18.3 0 18.3l1 2.5s5.7-2.2 8.9-2.2c1.3 0 3.5.8 5.2 1.7a23.6 23.6 0 013 1.9l.2.1.2.3-.1 1a1 1 0 01-1.2.3h0l-5.7-2.8-1.2 2.4 6 2.8h0c1.6.6 3.3 0 4.2-1.2.5-.8.7-1.7.6-2.5l6.4-1.1c.7-.1 1.3.3 1.5 1 .3.7 0 1.4-.8 1.7a173.3 173.3 0 01-12.9 5H15s-.5 0-1-.4l-2.3-1.3L9.4 26c-.8-.4-1.5-.7-2.4-.7-2.2 0-4.1.8-4.1.8l1 2.4s1.6-.6 3-.6a36.5 36.5 0 013.3 1.8l2.4 1.4c.8.4 1.4.8 2.4.8l1.1-.2 1.5-.4 3.8-1.4c2.8-1 6-2.3 8-3.2 2-.9 3-3.1 2.2-5-.6-2-2.5-3.1-4.5-2.8L19.9 20s0 0 0 0l-.2-.1-.4-.3h0l-.3-.2a27 27 0 00-2.6-1.5c-2-1-4.2-2-6.4-2z"
                />
              </svg>{' '}
              <span className="sro">En main propre</span>
              <input
                defaultChecked={payNow === false && true}
                className="sro field__input"
                type="radio"
                name="paiement"
                id="hand_paiement"
                value="hand"
                onChange={() => {
                  setPayNow(false);
                }}
              />
              <span className="radiomark"></span>
            </label>

            <label
              htmlFor="card_paiement"
              className="field__label field__label--inline"
              title="En ligne par bancontact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 758.4 522.1"
                className="svg__bct">
                <defs>
                  <linearGradient
                    id="a"
                    x1="130.6"
                    x2="358.6"
                    y1="306.9"
                    y2="391.5"
                    gradientTransform="matrix(1 0 0 -1 0 568)"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#005ab9" />
                    <stop offset="1" stopColor="#1e3764" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="398.1"
                    x2="640.1"
                    y1="364.4"
                    y2="447"
                    gradientTransform="matrix(1 0 0 -1 0 568)"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fba900" />
                    <stop offset="1" stopColor="#ffd800" />
                  </linearGradient>
                </defs>
                <path
                  fill="#fff"
                  d="M26.1 0h706.1a26.1 26.1 0 0126.2 26.1V496a26.1 26.1 0 01-26.1 26.1H26A26.1 26.1 0 010 496V26.1A26.1 26.1 0 0126.1 0z"
                />
                <path
                  fill="#1e3764"
                  d="M67.5 453v-90h27.8c20.2 0 33.2 7.6 33.2 23.3a21 21 0 01-10 18.6 22.3 22.3 0 0113.3 21.5c0 18.2-13.2 26.6-33.8 26.6zm18-52.6h13.2c8 0 11.5-4 11.5-11.3 0-7.9-6.3-10.5-14.8-10.5h-10zm0 37h11c10.8 0 17-2.8 17-11.3s-5.3-11.8-15.5-11.8H85.4zm81 17.1c-17.6 0-26.5-8.6-26.5-20.1 0-12.8 10.4-20.2 25.9-20.4a81.2 81.2 0 0111.4 1v-3c0-7.8-4.5-11.6-13.1-11.6a45.3 45.3 0 00-17 3.1l-3.2-13.9a63.7 63.7 0 0122.3-3.8c18.9 0 28.2 10 28.2 27.4v35.7a64.5 64.5 0 01-28 5.7zm10.8-14.5v-13.7a43.1 43.1 0 00-9.1-1c-6 0-10.6 2.3-10.6 8.3 0 5.4 3.9 8.3 10.7 8.3a20.2 20.2 0 009-1.8zm29.7 13v-61.6a78.5 78.5 0 0129-5.6c18.8 0 29.7 9.2 29.7 26.3V453H248v-39.6c0-8.8-4.1-13-12-13a27.1 27.1 0 00-11.3 2.3V453zm120.7-63.4l-3.4 14a39.1 39.1 0 00-14.5-3.2c-10.4 0-16 7.3-16 19.4 0 13.2 5.8 20 17 20a36.3 36.3 0 0014.2-3.2l2.8 14.2a43.2 43.2 0 01-18.5 3.8c-21.3 0-33.7-13.3-33.7-34.2s12.2-34.6 32.7-34.6a49.6 49.6 0 0119.4 3.8zm38.3 65c-19.8 0-32.1-13.8-32.1-34.5s12.3-34.4 32.1-34.4 32 13.8 32 34.4-12 34.4-32 34.4zm0-14.7c9.2 0 14-7.6 14-19.8s-4.8-19.7-14-19.7-14 7.6-14 19.7 5 19.8 14 19.8zm42.4 13.1v-61.6a78.5 78.5 0 0129-5.6c18.8 0 29.6 9.2 29.6 26.3V453h-17.7v-39.6c0-8.8-4.2-13-12-13a27 27 0 00-11.3 2.4V453zm98.7 1.5c-15.4 0-23.2-8.3-23.2-25.3v-27.7h-8.7v-14.2h8.7V373l17.8-1v15.3h14.2v14.1h-14.3V429c0 7.5 3.1 11 9 11a31.9 31.9 0 006.7-.8l1 14.2a48.4 48.4 0 01-11.2 1.2zm44.7 0c-17.6 0-26.4-8.6-26.4-20.1 0-12.8 10.4-20.2 25.8-20.4a81.2 81.2 0 0111.4 1v-3c0-7.8-4.4-11.6-13-11.6a45.2 45.2 0 00-17 3.1l-3.3-13.9a63.7 63.7 0 0122.3-3.8c18.9 0 28.3 10 28.3 27.4v35.7a64 64 0 01-28 5.7zm10.9-14.5v-13.7a43 43 0 00-9.2-1c-5.9 0-10.5 2.3-10.5 8.3 0 5.4 3.8 8.3 10.7 8.3a20.2 20.2 0 009-1.8zm78-50.4l-3.4 14a39.1 39.1 0 00-14.5-3.2c-10.4 0-16.1 7.3-16.1 19.4 0 13.2 6 20 17 20a36.4 36.4 0 0014.3-3.3l2.8 14.3a43.3 43.3 0 01-18.5 3.7c-21.4 0-33.7-13.2-33.7-34.2s12.2-34.6 32.6-34.6a49.6 49.6 0 0119.5 3.9zm39 65c-15.4 0-23.2-8.4-23.2-25.4v-27.7h-8.8v-14.2h8.8V373l17.8-1v15.3h14.2v14.1h-14.3V429c0 7.5 3.1 11 9 11a31.9 31.9 0 006.7-.8l1 14.2a48.4 48.4 0 01-11.3 1.2z"
                />
                <path
                  fill="url(#a)"
                  d="M191.3 318c94 0 141-62.6 187.9-125.2H67.5V318z"
                />
                <path
                  fill="url(#b)"
                  d="M567 67.5c-94 0-140.9 62.6-187.8 125.3h311.6V67.5z"
                />
              </svg>
              <span className="sro">Par bancontact</span>
              <input
                className="sro field__input"
                type="radio"
                name="paiement"
                id="card_paiement"
                value="card"
                onChange={() => {
                  setPayNow(true);
                }}
              />
              <span className="radiomark"></span>
            </label>
          </fieldset>
        </div>
        <p className="form__mandatory">*Champs obligatoires</p>
        <div className="form__button__wrapper">
          <button
            onClick={() => {
              handlePrevious();
              useScrollIntoView('sub_title');
            }}
            type="button"
            className="form__button form__button--secondary form__button--half">
            <svg
              className="svg svg--left svg--reverse"
              xmlns="http://www.w3.org/2000/svg"
              fill="#004546"
              viewBox="0 0 32 18">
              <path
                stroke="null"
                d="M22.97.04l-1.88 1.91 5.7 5.71H.07v2.67H26.8l-5.7 5.7 1.87 1.92 8.95-8.96L22.97.04z"
              />
            </svg>
            <span className="input__value">Précédent</span>
          </button>
          <button
            onClick={() => {
              handleFinish(payNow);
              useScrollIntoView('sub_title');
            }}
            type="button"
            className="form__button form__button--main form__button--half">
            {payNow == false ? (
              <>
                {loading ? (
                  Spinner(ColorsEnum.White)
                ) : (
                  <>
                    <span className="input__value">Valider</span>
                    <svg
                      className="svg svg--right"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 26 26">
                      <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
                    </svg>
                  </>
                )}
              </>
            ) : (
              <>
                {loading ? (
                  Spinner(ColorsEnum.White)
                ) : (
                  <>
                    <span className="input__value">Payer</span>
                    <svg
                      className="svg svg--right"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 32 23.3">
                      <path
                        stroke="null"
                        d="M12.3 0c-1 0-2 .5-2.8 1.2-1.5.1-2.6 1.1-3.8 2l-.4.4L0 8.1v3.2L7 5.5l.5-.4 1.2-1v8.3l-1.3.7 1.1 2.2 5.3-2.9c1.3-.7 2.1-1.3 3.3-1.3.8 0 1.5.6 1.5 1.5 0 .6-.2.8-.4 1a5 5 0 01-1.2 1c-1.3.9-2.8 2.3-2.8 2.3v.1H14c-1.5 2.2-3.3 3.9-6.6 3.9H0v2.4h7.4c4.1 0 6.8-2.3 8.4-4.6l1.7-1.5h10.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7h-16zm0 2.5h16c.7 0 1.2.5 1.2 1.2v1.2H12.3v2.5h17.2v6.1c0 .7-.5 1.2-1.2 1.2h-8A4 4 0 0017 8.6c-2 0-3.4 1-4.5 1.7l-1.4.7V3.7c0-.7.5-1.2 1.2-1.2z"
                      />
                    </svg>
                  </>
                )}
              </>
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default FormStepThree;
