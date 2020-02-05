import React ,{ Fragment,useEffect } from'react';
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

const Modal = (props) => {
    useEffect(() => {
        console.log('update')
      }, [props.show]); // Only re-run the effect if count changes
    return (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modelClosed}/>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? 1 : 0
            }}>
            {props.children}
        </div>
    </Fragment>
)}

export default Modal