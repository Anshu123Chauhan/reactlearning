import React from "react";
import Form from "./Form";
import Img1 from './Images/cost1.png';
import Img2 from './Images/cost2.png';
import Img3 from './Images/cost3.png';
import Img4 from './Images/cost4.png';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Content=()=>{
    return(<>
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-info">
                        <h5 className="left-heading">Take your business to new customers and markets Mystore</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src={Img1} alt="logo"  className="icon1"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="icon-info">
                                            <h5>More Buyers</h5>
                                            <p>Access millions of buyers across India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src={Img2} alt="logo"  className="icon2"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="icon-info">
                                            <h5>More Buyers</h5>
                                            <p>Access millions of buyers across India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src={Img3} alt="logo" className="icon3"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="icon-info">
                                            <h5>More Buyers</h5>
                                            <p>Access millions of buyers across India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src={Img4} alt="logo"  className="icon4"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="icon-info">
                                            <h5>More Buyers</h5>
                                            <p>Access millions of buyers across India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <h5 className="head5">What you need to sell on Mystore</h5>
                        <div className="bottom-icon">
                            <p><CheckCircleOutlineIcon/> GSTIN</p>
                            <p><CheckCircleOutlineIcon/> Bank Account</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="right-form">
                <h5 className="right-heading">Welcome to Mystore</h5>
                <p className="right-para">Create your account to start selling</p>
                <Form/>

                </div>

                </div>
            </div>
        </div>
    </>)
}
export default Content;