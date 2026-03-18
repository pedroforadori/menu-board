import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  /* overflow: hidden; */
  /* margin-top: 1rem; */
`;

export const Slide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 8px 0 0 0;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
  pointer-events: none; /* Permite clicar no slide se necessário, exceto nos botões */
`;

export const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  pointer-events: auto; /* Reativa os cliques para os botões */
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &:active {
    background: rgba(255, 255, 255, 0.7);
  }
`;