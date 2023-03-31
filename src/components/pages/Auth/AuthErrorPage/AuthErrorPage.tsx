import React from 'react';
import { To, useRouteError } from 'react-router-dom';

import { ContentWrapper } from '@base/ContentWrapper';
import { Information } from '@ui/Information';
import { CustomError } from '@utils/exceptions';

interface Props {
  buttonName?: string;
  to?: To | number;
}

export const AuthErrorPage = ({ buttonName = 'Powrót', to = -1 }: Props) => {
  const error = useRouteError() as CustomError;
  const title = error?.status === 404 ? '404' : 'Wystąpił błąd';
  const subTitle = error?.status === 404 ? 'Strona nie istnieje' : `Status błędu: ${error?.status}`;
  const description = error?.status === 404 ? 'Wygląda na to, żę strona, której szukasz, nie istnieje' : error?.message;
  return (
    <ContentWrapper>
      <Information
        title={title}
        subTitle={subTitle}
        description={description}
        buttonName={buttonName}
        type={'error'}
        to={to}
      />
    </ContentWrapper>
  );
};
