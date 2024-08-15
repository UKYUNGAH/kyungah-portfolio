import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrap">
                    <div className="footer_inner footer_inner1">
                        <p className="footer_info ">
                            <span>React</span> 기반으로 제작된 사이트입니다.
                        </p>
                    </div>
                    <div className="footer_inner footer_inner2">
                        <h4>Email Address</h4>
                        <div className="footer_mail">
                            <a href="mailto:ukyunga0.1@gmail.com">ukyunga0.1@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer_inner footer_inner2">
                        <h4>Social Links</h4>
                        <ul className="">
                            <li>
                                <a href="https://github.com/UKYUNGAH" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://my.surfit.io/w/989694903" target="_blank" rel="noopener noreferrer">
                                    Surfit Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="footer_inner">
                        <p className="footer_text">마지막 문구</p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
