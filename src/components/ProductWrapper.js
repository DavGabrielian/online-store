import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    min-height: 200px;  
      transition: all 0.6s linear;
  }

  .card-footer {
    border-top: transparent;
    transition: all 0.6s linear;
    /* position:absolute;
    top:0;
    padding: 0.8rem auto; */
  }

  &:hover {
    .card {
      border: 0.08rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
  }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.6s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.25);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 1.2rem;
    background: var(--lightBlue);
    border: none;
    color: white;
    font-size:1.5rem;
    border-radius:1.1rem 0 0 0;
    transform:translate(100%,100%);
    transition: all 0.6s linear;

  }
  .img-container:hover .cart-btn {
      transform:translate(0,0)
  }

  .cart-btn:hover {
      color:var(--mainDark);
      cursor:pointer;
  }
`;
