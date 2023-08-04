import React, { useRef } from 'react';
import styled from 'styled-components';

export default function ScrollTop() {
  const scrollButtonRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      scrollButtonRef.current.style.display = 'block';
    } else {
      scrollButtonRef.current.style.display = 'none';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollTopButton
      ref={scrollButtonRef}
      onClick={scrollToTop}
      isVisible={false}
    >
      ↑
    </ScrollTopButton>
  );
}

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 80px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #ccc;
  border-radius: 50%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
`;
