"use client"
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import SideBarMenu from '../../components/Sidebar';
import Header from '../../components/Header';
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
                           <h3>Order Detail</h3>
                        </div>
                     </div>
                  </div>
                  <PerfectScrollbar>
                     <div className="product-wrap order-details">
                        <h2>Order 1654436</h2>
                     </div>
                  </PerfectScrollbar>
               </div>
               <div className="product-area doc-details mt-3 order-details">
                  <div className="row">
                     <div className="col-12">
                        <div className="top-title">
                           <h3>Order History</h3>

                           <div className="open-order">
                              <h4>Open Orders</h4>
                              <div class="center">
                                 <input type="checkbox" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <PerfectScrollbar>
                     <div className="table-wrap">
                        <table className="table-responsive cart-wrap">
                           <tbody>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span className='complete'>Shipped</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Service</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$2,458.00</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>21 Sep 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>NA</b>
                                    <span>Onsite</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="product">
                                    <div className="info">
                                       <div className="icon">
                                          <i className='icon-ico'></i>
                                       </div>
                                       <div className="text">
                                          <h4>PO 138765</h4>
                                          <span>Sales</span>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="date">
                                    <b>$54.13</b>
                                    <span>Amount</span>
                                 </td>
                                 <td className="date">
                                    <b>05 Oct 2018</b>
                                    <span>Date</span>
                                 </td>
                                 <td className="date">
                                    <b>1654436</b>
                                    <span>Order Number</span>
                                 </td>
                                 <td className="date">
                                    <b>Drew Heemstra</b>
                                    <span>Purchaser</span>
                                 </td>
                                 <td className="date">
                                    <b>1XRT26567N3N000001</b>
                                    <span>UPS</span>
                                 </td>
                                 <td className="action-btn">
                                    <span>Pending</span>
                                    <button><i className="fa fa-eye" aria-hidden="true"></i></button>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </PerfectScrollbar>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;