import React from 'react';

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () =>{
    return <button className={classes.button}><span className={classes.icon}></span>Button <span className={classes.badge}>1</span></button>
}

export default HeaderCartButton;