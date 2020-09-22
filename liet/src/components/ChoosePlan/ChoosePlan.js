import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import ChoosePlanGrid from './ChoosePlanGrid';

const Styles = styled.div`


.pricing-wrap {
    padding-bottom: 20rem;
    padding-top: 7rem; }
    @media (max-width: 1199.98px) {
      .pricing-wrap {
        padding-bottom: 7em; } }
    .pricing-wrap .section-desc {
      color: rgba(255, 255, 255, 0.7); }
  
  .pricing {
    margin-top: -70%;
    background: #fff;
    padding: 30px;
    -webkit-box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    text-align: center;
    z-index: 1;
    position: relative; }
    .pricing em {
      font-style: normal; }
    @media (max-width: 1199.98px) {
      .pricing {
        margin-top: 0;
        margin-bottom: 7rem; }
        .pricing:first-child {
          margin-top: -70px; } }
    .pricing.pricing-popular {
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      z-index: 2; }
      @media (max-width: 1199.98px) {
        .pricing.pricing-popular {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1); } }
    .pricing h3 {
      color: #352961;
      font-weight: 300;
      margin-bottom: 1.5rem; }
    .pricing .description, .pricing .description-2 {
      font-size: 15px; }
    .pricing .price {
      margin: 30px 0; }
      .pricing .price span {
        display: block;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: #352961; }
      .pricing .price strong {
        font-weight: 300;
        font-family: "Oswald", sans-serif;
        color: #352961;
        font-size: 4rem; }
    .pricing .btn {
      border-width: 2px; }
`;


export const ChoosePlan = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const  result = await axios(
          `https://linton-iet-on-campus.github.io/linton-iet-on-campus/backend/data/choose-plan/index.json`
        )
        console.log(result.data)

        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems()
    },[])

  return(
    <Styles>

    <section id="team" class="pb-5">
        <div class="container">
             <ChoosePlanGrid isLoading={isLoading} items={items}/>
        </div>
    </section>

  </Styles>
  )

}