import styled from 'styled-components';

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px inset white;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  width: 100%;

  border: 3px outset #3b3b3b;
  padding: 25px 12px 18px;
  background: #265a5e;
  margin: 35px auto;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`;
export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;
export const Description = styled.p`
  color: #fff;
  font-weight: 300;
`;

export const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
