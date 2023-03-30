import { Box } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DescriptionInformation,
  ErrorIcon,
  InfoIcon,
  SubTitleInformation,
  SuccessIcon,
  TitleInformation,
  WarningIcon,
} from '@ui/Information/components';
import { ButtonInformation } from '@ui/Information/components/ButtonInformation';

import { InfoType, MessageInformation } from '@frontendTypes';

type Props = MessageInformation;

export const Information = ({ title, description, to, buttonName, subTitle, type }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (typeof to === 'number') {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  const renderIcon = (type: InfoType) => {
    switch (type) {
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
      default:
        return <InfoIcon />;
    }
  };

  return (
    <Box textAlign='center'>
      {renderIcon(type)}
      <TitleInformation>{title}</TitleInformation>
      {subTitle && <SubTitleInformation>{subTitle}</SubTitleInformation>}
      <DescriptionInformation>{description}</DescriptionInformation>
      <ButtonInformation onClick={handleClick}>{buttonName}</ButtonInformation>
    </Box>
  );
};
