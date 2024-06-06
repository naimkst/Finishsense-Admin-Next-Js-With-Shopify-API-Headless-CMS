"use client"
import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Link from 'next/link'
import 'react-perfect-scrollbar/dist/css/styles.css';
import SideBarMenu from '../../components/Sidebar';
import Header from '../../components/Header';
import pImg from '/public/images/product-single.png'
import Image from 'next/image';
import Documentation from './documentation';
import Productinfo from './Productinfo';

const Maintain = () => {

   const [qty, setQty] = useState(1);

   return (
      <div className="page-wrapper">
         <Header />
         <SideBarMenu />
         <div className="content-area">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="card-design product-details">
                        <div className="product-details-top-text">
                           <h3>EcoPump9 GW 20 F300 P D13 1 S A N</h3>
                           <span>Part Number: N24290154</span>
                           <span>Manufacturer: Durr</span>
                           <h4>In Stock</h4>
                        </div>
                        <div className="product-details-bottom">
                           <div className="product-details-img">
                              <span>
                                    <Image src={pImg} alt="" />
                              </span>
                           </div>
                           <div className="product-details-text">
                              <ul>
                                 <li>List Price: $4,165.00</li>
                                 <li>Net Price: <strong>$3,765.98</strong></li>
                              </ul>
                              <p>Estimated Delivery: Wed, October 4th</p>

                              <div className="pro-single-btn">
                                 <Grid className="quantity cart-plus-minus">
                                    <Button
                                       className="dec qtybutton"
                                       onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                                    >
                                       -
                                    </Button>
                                    <input
                                       value={qty}
                                       onChange={() => setQty(qty)}
                                       type="text"
                                    />
                                    <Button
                                       className="inc qtybutton"
                                       onClick={() => setQty(qty + 1)}
                                    >
                                       +
                                    </Button>
                                 </Grid>
                              </div>
                              <Link href="/" className="cart-btn">Add To Cart</Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Documentation/>
                  <Productinfo/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Maintain;