import styled from 'styled-components';


export const NewGiftContainer = styled.div`
  background: rgba(0, 0, 0, .1);
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: 100;
`;
export const Overlay = styled.button`
  background: none;
  border: none;
  height: 100%;
  outline: none;
  position: absolute;
    top: 0;
    left: 0;
  width: 100%;

  &::after {
    align-items: center;
    background: #fff;
    border-radius: 20px;
    box-shadow: 5px 0 30px rgba(0, 0, 0, .2);
    content: 'Cancel fun';
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    padding: 0 30px;
    position: absolute;
      top: 24px;
      right: calc(65% + 30px);
  }
`;
export const NewGiftCard = styled.div`
  background: #fff;
  border-radius: 14px 0 0 14px;
  box-shadow: 0 -10px 60px rgba(0, 0, 0, .2);
  padding: 40px 40px 80px 80px;
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 35%;
`;
