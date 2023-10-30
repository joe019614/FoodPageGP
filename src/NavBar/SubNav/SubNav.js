import React from 'react'
import SubNavItem from './SubNavItem/SubNavItem'
import styles from './SubNav.module.css'

export default function SubNav() {
  return (
    <div className={styles.container}>
        <div className={styles['sub-nav']}>
            <div>
                <SubNavItem label='Restaurant' icon='fa-utensils'/>
                <SubNavItem label='Food Delivery' icon='fa-home'/>
                <SubNavItem label='Auto Services' icon='fa-car-side'/>
                <SubNavItem label='More' icon='fa-info-circle' showRightBorder/>
            </div>
        
            <div>
                <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                    <span className="icon">
                        <i className={`fas fa-pen ${styles['imgpen']}`}/>
                    </span>
                    <span>Write a review</span>
                </button>
                <button className={`button ${styles['subnav-button']}`}>
                    <span className="icon">
                        <i className={`fas fa-hotel ${styles['imghotel']}`}/>
                    </span>
                    <span>For Businesses</span>
                </button>
            </div>
        </div>
    </div>
  )
}
