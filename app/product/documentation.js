"use client"
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Grid, Button } from "@mui/material";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


const Documentation = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="col-lg-6">
            <div className="card-design doc-details">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            PRODUCT INFO
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            MANUALS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            SOFTWARE
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >

                            TRAINING
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
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
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="2">
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
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="3">
                    <PerfectScrollbar>
                            <div className="table-wrap">
                                <table className="table-responsive cart-wrap">
                                    <tbody>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="4">
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
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Brochure</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Placemat</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-ico'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Exploded View</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/23/21</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-photos-icon'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 Product Photos</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>09/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product">
                                                <div className="info">
                                                    <div className="icon">
                                                        <i className='icon-box'></i>
                                                    </div>
                                                    <div className="text">
                                                        <h4>EcoPump9 3D Model</h4>
                                                        <span>.pdf</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="date">
                                                <b>07/21/2023</b>
                                                <span>Last Modified</span>
                                            </td>
                                            <td className="download-btn"><button><i className='icon-download'></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default Documentation;