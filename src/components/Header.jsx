import React from 'react';

const Header = ({ changeMood }) => {
    return (
        <div className="header">
            <div className="header_wrap">
                <div className="hl">Publisher - Frontend</div>
                <div className="hm">
                    <button type="button" onClick={changeMood}>
                        change the mood
                    </button>
                </div>
                <div className="hr">
                    <button>contact</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
