import React, { useState } from 'react';
import {
  StyledPhoto,
  CardContainer,
  Title,
  Date,
  Description,
  Actions,
  ActionButton
} from './CardStyles';

const Card = ({
  title,
  date,
  description,
  comments,
  likes,
  views,
  actions,
  images
}) => {
  const [count, setCount] = useState(0);

  return (
    <CardContainer>
      <StyledPhoto
        src={images ? images[2].urls.regular : 'image coming'}
        alt="dream"
      />

      <Title>
        {images ? `Photographer: ${images[2].user.name}` : 'Beautiful photo'}
      </Title>
      <Date>{date}</Date>
      <Description>{images ? images[0].user.bio : 'description'}</Description>
      <Actions>
        {actions.map(({ label, ...props }) => (
          <ActionButton {...props}>{label}</ActionButton>
        ))}
      </Actions>
    </CardContainer>
  );
};
export default Card;
