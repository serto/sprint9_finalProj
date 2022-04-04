import styled from 'styled-components';
const tablet_point = 750;
const tablet = `@media (min-width: ${tablet_point}px)`;

export const DetailGameStyle = styled.div`

  display: flex;
  flex-direction: column;

  .detail {
    background-color: #d7dbdf;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #3c3c3c;

    ${tablet} {
      flex-direction: row;
    }

    &__image {
      width: 100%;
      ${tablet} {
        width: 55%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }

    &__content {
      width: 100%;
      padding: 8px 12px;
      box-sizing: border-box;
      
      ${tablet} {
        width: 45%;
      }

      .t-title {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
      }

      p {
        font-size: 0.8rem;
        span {
          font-weight: bold;
        }
      }
    }
  }

`

export const TagGroupStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagStyle = styled.div`
  background-color: white;
  border: 2px solid #22AAB8;
  padding: 4px;
  font-size: 0.75rem;
  margin: 0 4px 4px 0;

`