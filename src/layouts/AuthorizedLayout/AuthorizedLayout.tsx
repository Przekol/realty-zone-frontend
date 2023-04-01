import React from 'react';

import { ContentWrapper } from '@base/ContentWrapper';
import { PrivateRoute } from '@routes/PrivateRoute';

export const AuthorizedLayout = () => {
  return (
    <ContentWrapper>
      <PrivateRoute />
    </ContentWrapper>
  );
};
