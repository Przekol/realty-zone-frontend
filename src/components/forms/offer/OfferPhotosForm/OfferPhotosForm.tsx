import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
// eslint-disable-next-line import/order
import React, { useEffect, useState } from 'react';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import { CustomError } from '@utils/exceptions';

interface Props {
  offerNumber: number | null;
}
const uppy = new Uppy();
export const OfferPhotosForm = ({ offerNumber }: Props) => {
  const navigate = useNavigate();
  const [uppy, setUppy] = useState<Uppy>();

  useEffect(() => {
    if (offerNumber) {
      const newUppy = new Uppy({
        autoProceed: false,
        restrictions: {
          maxNumberOfFiles: 10,
          allowedFileTypes: ['image/*'],
        },
      }).use(XHRUpload, {
        endpoint: `${import.meta.env.VITE_BACKEND_API}/offers/${offerNumber}/pictures`,
        fieldName: 'pictures',
        headers: {},
        withCredentials: true,
        bundle: true,
        limit: 10,
        getResponseData: () => {
          navigate(ROUTES.myAccount.successful.addOffer);
        },
        getResponseError: (responseText, response) => {
          navigate(`${ROUTES.myAccount.base}/delete-offer/${offerNumber}`);
          return new CustomError('Error', 400);
        },
      });

      setUppy(newUppy);

      return () => {
        if (newUppy) {
          newUppy.close();
        }
      };
    }
  }, [offerNumber]);

  if (!uppy) {
    return null;
  }

  return (
    <div>
      <Dashboard uppy={uppy} />
    </div>
  );
};
