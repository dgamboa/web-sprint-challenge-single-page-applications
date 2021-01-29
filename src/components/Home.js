import React from 'react';
import pizzaHero from '../Assets/Pizza.jpg';
import styled from 'styled-components';

const HeroBanner = styled.section`
  border: 1px solid black; /* Delete */
  width: 99.9%;
  .hero-container {
    position: relative;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    button {
      background-color: red;
      color: white;
      position: absolute;
      width: 12rem;
      height: 3.6rem;
      top:65%;
      left:50%;
      margin: -1.8rem 0 0 -6rem;
      font-size: 1.8rem;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #f66;
      }
    }
  }
`;

export default function Home(props) {
  return (
    <HeroBanner className='hero-banner'>
      <div className="hero-container">
        <img
          className='hero-image'
          src={pizzaHero}
          alt="Pizza"
        />
        <button
          className='hero-button'
          onClick={() => console.log('clicked!')}
        >
          Pizza?
        </button>
      </div>
    </HeroBanner>
  )
}