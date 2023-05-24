import React, { useEffect, useState } from 'react';
import theme from '../../../../../styles/theme';
import { Mixin } from 'react';
import { flexSort } from '../../../../../styles/mixin';
import styled from 'styled-components';

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch('/data/WishList.json')
      .then(res => res.json())
      .then(data => {
        setWishList(data);
      });
  }, []);

  return (
    <Container>
      <ViewBox>
        {wishList.map(({ id, camp, thumbnail, location }) => {
          return (
            <WishListBox key={id}>
              <WishImg src={thumbnail} alt="캠핑장 사진" />
              <ListInfo>
                <CampName>{camp}</CampName>
                <CampLocation>{location}</CampLocation>
              </ListInfo>
            </WishListBox>
          );
        })}
      </ViewBox>
    </Container>
  );
};

export default WishList;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewBox = styled.ul`
  ${flexSort('start', 'start')}
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const WishListBox = styled.li`
  ${flexSort('start', 'start')}
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => theme.borderGrey};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WishImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ListInfo = styled.div`
  ${flexSort('start', 'start')}
  flex-direction: column;
  padding-left: 12px;
  gap: 24px;
`;

const CampName = styled.h3`
  font-size: 24px;
`;

const CampLocation = styled.p`
  font-size: 16px;
`;
