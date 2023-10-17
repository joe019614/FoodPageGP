import React from 'react'
import styles from './SubNavItem.module.css';

export default function SubNavItem(props) {
    const borderClass = props.showRightBorder ? styles['right-border'] : '';
  return (
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
                <div className={`${styles['sub-nav-item']} ${borderClass}`}>
                <span className="icon is-small">
                    <i className={`fas ${props.icon}`} ></i>
                </span>
                <span>{props.label}</span>
                <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </div>
            </div>
            <div  className="dropdown-menu imgright" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                <div className="dropdown-item">
                    <p>NTH</p>
                </div>
                </div>
            </div>
        </div>
  )
}
