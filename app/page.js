"use client"
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import SideBarMenu from '../components/Sidebar';
import Header from '../components/Header';
import pImg from '/public/images/product.png'
import Image from 'next/image';

const Home = () => {

   return (
      <div className="page-wrapper">
         <Header />
         <SideBarMenu />
         <div className="content-area">
            <div className="container-fluid">
               <div className="product-area">
                  <div className="row">
                     <div className="col-12">
                        <div className="top-title">
                           <h3>All Products</h3>
                        </div>
                     </div>
                  </div>
                  <PerfectScrollbar>
                     <div className="product-wrap">
                        <div className="product-items">
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="product-item-wrap">
                              <div className="product-item">
                                 <div className="product-img">
                                    <Image src={pImg} alt="" />
                                 </div>
                                 <div className="product-text">
                                    <h3>EcoPump9 GW 20…</h3>
                                    <ul>
                                       <li>Part Number: N24290154</li>
                                       <li>Manufacturer: Durr</li>
                                       <li>List Price: $4,165.00</li>
                                       <li>Net Price: <strong>$3,765.98</strong></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </PerfectScrollbar>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;