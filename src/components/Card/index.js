import styled from 'styled-components';

const Card = styled.div`
  background: #202020;
  border: 2px solid #00FF99;
  box-shadow: 0 0 100px 50px rgba(0,0,0,1);
  margin-bottom: 30px;
  padding: 75px 10px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 10px;
  }
`;

export default Card;