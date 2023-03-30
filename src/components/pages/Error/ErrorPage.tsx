import React from 'react';
import { useRouteError } from 'react-router-dom';

import { ContentWrapper } from '@base/ContentWrapper';
import { Information } from '@ui/Information/Information';

import { DefaultLayout } from '../../../layouts/DefaultLayout';

export const ErrorPage = () => {
  const error = useRouteError() as any;
  const title = error?.status === 404 ? '404' : 'Wystąpił błąd';
  const subTitle = error?.status === 404 ? 'Strona nie istnieje' : `Status błędu: ${error?.status}`;
  const description = error?.status === 404 ? 'Wygląda na to, żę strona, której szukasz, nie istnieje' : error?.message;
  return (
    <DefaultLayout>
      <ContentWrapper>
        <Information
          title={title}
          subTitle={subTitle}
          description={description}
          buttonName={'Powrót'}
          type={'error'}
          to={-1}
        />
      </ContentWrapper>
    </DefaultLayout>
  );
};
