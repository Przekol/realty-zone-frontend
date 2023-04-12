import { ROUTES } from '@routes/routes';

import { MessageInformation } from '@frontendTypes';

type OfferMessages = {
  successfulAddOffer: MessageInformation;
  warningAddOffer: MessageInformation;
};

export const offerMessages: OfferMessages = {
  successfulAddOffer: {
    title: 'Dziękujemy za dodanie oferty',
    description: 'Oferta została dodana do bazy danych.',
    buttonName: 'Wróć do swojego konta',
    to: ROUTES.myAccount.base,
    type: 'success',
  },
  warningAddOffer: {
    title: 'Błąd podczas dodawania oferty',
    description: 'Oferta nie została dodana do bazy danych.',
    buttonName: 'Wróć do swojego konta',
    to: ROUTES.myAccount.base,
    type: 'warning',
  },
};
