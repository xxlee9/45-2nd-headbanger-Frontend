import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mixin } from 'react';
import { flexSort } from '../../../../../styles/mixin';
import styled from 'styled-components';
import HeartIcon from '../../../../../assets/images/components/Common/HeartIcon';
import { PRODUCT_LIST_API } from '../../../../../config';
const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const TOKEN = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${PRODUCT_LIST_API}/wishs`, {
        headers: {
          authorization: TOKEN,
        },
      })
      .then(res => setWishList(res.data.result));
  }, []);

  const { camp_name, camp_id, address, thumbnail } = wishList;

  return (
    <Container>
      <ViewBox>
        {wishList.map(({ camp_id, camp_name, thumbnail, address }) => {
          return (
            <WishListBox key={camp_id}>
              <ImgBox>
                <WishImg src={thumbnail} alt="캠핑장 사진" />
              </ImgBox>
              <ListInfo>
                <CampName>{camp_name}</CampName>
                <CampLocation>{address}</CampLocation>
              </ListInfo>
              <HeartIcon />
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
  ${flexSort('space-between', 'center')}
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.borderGrey};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  width: 150px;
  height: 190px;
`;

const WishImg = styled.img`
  width: 150px;
  height: 190px;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ListInfo = styled.div`
  ${flexSort('start', 'start')}
  flex-direction: column;
  width: 100%;
  padding-left: 12px;
  gap: 24px;
`;

const LikeUnLike = styled.div`
  width: 100%;
  height: 100%;
`;

const CampName = styled.h3`
  font-size: 24px;
`;

const CampLocation = styled.p`
  font-size: 16px;
`;
