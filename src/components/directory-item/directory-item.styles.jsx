import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 180px;
  justify-content: center;
  position: absolute;

  h2 {
      font-weight: bold;
      margin: -150px -6px 0 -4px;
      font-size: 22px;
      color: brown;
      text-transform: uppercase;
    }

    p {
      font-weight: bold;
      font-size: 16px;
    }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 650px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  border: 5px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.15, 0.35, 0.35, 0.85);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  }
`;