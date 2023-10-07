'use client'
import Link from 'next/link';
import './topBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

const TopBar = ({ isToggleMenu }: any) => {
  const [isActiveTopBar, setIsActiveTopBar] = useState<boolean>(false);
  const dropdownRef = useRef<any>(null);
  const handleClickDropDown = () => {
    setIsActiveTopBar(!isActiveTopBar)
  }

  const handleClickOutsideDropdown = (e: any) => {
    if (isActiveTopBar && !dropdownRef.current?.contains(e.target as Node)) {
      setIsActiveTopBar(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("click", handleClickOutsideDropdown)
  }


  return (
    <section className={`topBar ${isToggleMenu ? 'on' : ''}`}>
      <div className="wrapContainer">
        <div className="boxTopBar">
          <div className="topbarLeft">
            <ul className="topBarUl">
              <li className="topBarLi"><Link href="#" className="topBarlink">Consumer</Link></li>
              <li className="topBarLi"><Link href="#" className="topBarlink">Small Business</Link></li>
              <li className="topBarLi"><Link href="#" className="topBarlink">Business</Link></li>
            </ul>
          </div>

          <div className="topbarRight">
            <ul className="topBarUl">
              <li className="topBarLi"><Link href="#" className="topBarlink">About Experian</Link></li>
              <li className="topBarLi" ref={dropdownRef}>
                <span onClick={handleClickDropDown}>
                  Credit Support
                  {!isActiveTopBar ? (
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                  ) : (
                    <FontAwesomeIcon icon={faChevronUp} className="icon" />
                  )}
                </span>
                <ul className={`topBarUlChild ${isActiveTopBar ? 'on' : ''}`}>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Free Anual Credit Report</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Disputes</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Fraud Alert</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Security Freeze</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Denied Credit</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">ID Theft Victim Assistence</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Opt out of prescreen offers</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">Contact us</Link></li>
                  <li className="topBarLiChild"><Link href="#" className="topBarLinkChild">See all credit support</Link></li>
                </ul>
              </li>
              <li className="topBarLi"><Link href="#" className="topBarlink">Credit Advice</Link></li>
              <li className="topBarLi"><Link href="#" className="topBarlink">Global Sites</Link></li>
            </ul>
          </div>
        </div>
      </div >
    </section >
  );
}

export default TopBar;