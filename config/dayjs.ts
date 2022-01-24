import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import isBetween from 'dayjs/plugin/isBetween';
require('dayjs/locale/fr');
// import 'dayjs/locale/de' // ES 2015

dayjs.locale('fr');

dayjs.extend(isBetween);
dayjs.extend(updateLocale);
dayjs.updateLocale('fr', {
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aôut',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  weekdays: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
});

export default dayjs;
