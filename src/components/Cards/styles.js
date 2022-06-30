import styled from "styled-components";

const StyledProductCard = styled.article`
  width: 250px;
  padding: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 20px 1px var(--n40);
  display: grid;
  grid-template-rows: 1fr auto;
`;

const StyledProductDataContainer = styled.div``;

const StyledProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
`;

const StyledProductName = styled.p`
  margin: 24px 0 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: var(--n900);
`;

const StyledProductCategory = styled.p`
  margin: 8px 0 0;
  color: var(--n400);
  text-align: center;
`;

const StyledProductPrice = styled.p`
  margin-top: 16px;
  text-align: center;
  color: var(--n900);
`;

const StyledProductButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCartCard = styled.article`
  max-width: 600px;
  padding: 24px 0;
  border-top: 1px solid var(--n40);
  border-bottom: 1px solid var(--n40);
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: repeat(2, auto);
  column-gap: 16px;
`;

const StyledCartImageContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
`;

const StyledCartImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledCartCardDataContainer = styled.div``;

const StyledCartName = styled.p`
  color: var(--n900);
`;

const StyledCartPrice = styled.p`
  color: var(--n400);
  font-size: 14px;
`;

const StyledCartCardInputsContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledCartTotalPrice = styled.p`
  text-align: right;
  font-weight: bold;
  color: var(--n900);
`;

const StyledCartCardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export {
  StyledProductCard,
  StyledProductDataContainer,
  StyledProductImage,
  StyledProductName,
  StyledProductCategory,
  StyledProductPrice,
  StyledProductButtonsContainer,
  StyledCartCard,
  StyledCartImageContainer,
  StyledCartImage,
  StyledCartCardDataContainer,
  StyledCartName,
  StyledCartPrice,
  StyledCartCardInputsContainer,
  StyledCartTotalPrice,
  StyledCartCardButtonsContainer,
};
