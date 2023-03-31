import React from 'react';

import { CenterContainer } from '@base/CenterContainer';
import { Information } from '@ui/Information/Information';

import { MessageInformation } from '@frontendTypes';

interface Props {
  message: MessageInformation;
}
export const StatusMessage = ({ message }: Props) => {
  if (message.subTitle) {
    const { title, subTitle, description, to, buttonName, type } = message;
    return (
      <CenterContainer>
        <Information
          title={title}
          subTitle={subTitle}
          description={description}
          to={to}
          buttonName={buttonName}
          type={type}
        />
      </CenterContainer>
    );
  } else {
    const { title, description, to, buttonName, type } = message;
    return (
      <CenterContainer>
        <Information title={title} description={description} to={to} buttonName={buttonName} type={type} />
      </CenterContainer>
    );
  }
};
