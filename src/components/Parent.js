import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { StyledRoot, StyledContainer } from './ParentStyles';
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa';

const Parent = () => {
  const date = new Date().toLocaleString();

  const onCommentClick = () => {
    alert('You Clicked comments button');
  };
  const onLikesClick = () => {
    alert('You Clicked comments button');
  };
  const onViewsClick = () => {
    alert('You Clicked comments button');
  };

  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick
    },
    {
      label: (
        <>
          <FaThumbsUp /> 0 Likes
        </>
      ),
      onClick: onLikesClick
    },
    {
      label: (
        <>
          <FaRegEye /> 0 Views
        </>
      ),
      onClick: onViewsClick
    }
  ];
  const title = 'Beauty of Dreaming';

  const description =
    'Goals provide the energy source that powers our lives. One of the best ways we can get the most from the energy we have is to for us concentrate our energy.';
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.unsplash.com/photos/?client_id=4ec682deb43de5995c7abca19b794b5630b901863d2b7ebd30cc57b3608f8fa5'
      )
      .then(data => setState(data));
  }, []);
  console.log(state.data);
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          images={state.data}
          title={title}
          date={date}
          description={description}
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  );
};

export default Parent;
