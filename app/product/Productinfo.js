"use client"
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


const Productinfo = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="col-lg-12">
            <div className="card-design doc-details details-bottom">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            PRODUCT DETAILS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            SPECIFICATIONS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            SPARE PARTS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >

                            ACCESSORIES
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <PerfectScrollbar>
                            <div className="details-wrap">
                                <p>The EcoPump9 GW is a highly efficient gear wheel pump, cavity-free in a compact configuration, achieving a perfect color change with a very low purging time. It has been manufactured and tested in compliance to Dürr’s well-proven quality standards. Based on decades of experience in the area of paint application, the EcoPump9 GW has emerged as the perfect device for 1K and 2K dosing of water and solvent-borne paint. </p>
                                <ul>
                                    <li>Low space required due to small design </li>
                                    <li>Minimal purging time by reduced clearance volume </li>
                                    <li>Targeted purging of the shafts and bearing bore by patented wash-up system </li>
                                    <li>Fast pre-paint by bypass valve (with purgeable pump) </li>
                                    <li>High stability due to patented construction </li>
                                    <li>Usage of hardened stainless steel with DLC coating to reduce friction and abrasion </li>
                                    <li>Modular pump concept </li>
                                    <li>Quick disassembly of paint hoses through Dürr paint fittings</li>
                                    <li>Large operating range </li>
                                    <li>Simplified service & maintenance</li>
                                </ul>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="2">
                        <PerfectScrollbar>
                            <div className="details-wrap">
                                <ul>
                                    <li>Dangerous Good - false</li>
                                    <li>Pressure purging material - 109 psi</li>
                                    <li>Ambient temperature - 10 - 40 °C</li>
                                    <li>Rpm range - 0 - 200 rpm</li>
                                    <li>Typical rpm - 20 - 170 rpm</li>
                                    <li>Pressure difference, max. - 44 psi</li>
                                    <li>Ambient temperature US - 50 - 104 °F</li>
                                </ul>
                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="3">
                        <PerfectScrollbar>
                            <div className="table-wrap">

                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                    <TabPane tabId="4">
                        <PerfectScrollbar>
                            <div className="table-wrap">

                            </div>
                        </PerfectScrollbar>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default Productinfo;