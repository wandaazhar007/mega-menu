'use client'
import Link from 'next/link';
import './navbar.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBroadcastTower, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faClose, faLock, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import TopBar from '../topBar/TopBar';

const Navbar: React.FC = () => {
  const [menuId, setMenuId] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const dropdownRef = useRef<any>(null);

  const handleToogleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
    console.log(isToggleMenu)
  }
  const handleClick = (id: number) => {
    setMenuId(id);
    setIsActive(!isActive);

  }


  const handleClickOutsideDropdownMenu = (e: any) => {
    if (isActive && !dropdownRef.current?.contains(e.target as Node)) {
      setIsActive(!isActive)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("click", handleClickOutsideDropdownMenu)
  }
  return (
    <>
      <TopBar isToggleMenu={isToggleMenu} />
      <div className="header">
        <div className="wrapContainer">
          <div className="boxHeader" ref={dropdownRef}>

            <div className="logo">
              <Link href="/">
                <Image src="./apple-pay.svg" width={50} height={50} alt='logo' />
              </Link>
            </div>

            <nav className="navigation" >
              <ul className={`navUl ${isToggleMenu ? 'on' : ''}`}>
                <li className='navLi'>
                  <Link href="#" className="navLink">
                    <span className="titleMenu">Credit</span>
                  </Link>
                </li>

                <li className='navLi' onClick={() => handleClick(1)}>
                  <Link href="#" className="navLink">
                    <span className="titleMenu">Protection</span>
                    {menuId === 1 && isActive === true ?
                      (<FontAwesomeIcon icon={faChevronUp} className="iconNavLi" />) : (
                        <>
                          <FontAwesomeIcon icon={faChevronDown} className="iconNavLi" />
                          <FontAwesomeIcon icon={faChevronRight} className="iconNavLiMobile" />
                        </>
                      )}
                  </Link>
                  <div className={`masterBoxChild ${menuId === 1 && isActive === true ? 'on' : ''}`}>
                    <div className="parentIconBack" onClick={() => handleClick(1)}>
                      <FontAwesomeIcon icon={faChevronLeft} className="iconBack" />
                    </div>
                    <ul className="boxChildUlOne">
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Identify Theft and Fraud</h3>
                            <p>ID Monitoring, alert and protection</p>
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faBroadcastTower} className="iconBoxChild" />
                          <div className="title">
                            <h3>Free dark web scan</h3>
                            <p>Scan your SSN, phone and email</p>
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Free personal privacy scan</h3>
                            <p>Find your info on people finder sites</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="boxChildUlTwo">
                      <li className="boxChildLiTwo title">IDENTITY THEFT SUPPORT</li>
                      <li className="boxChildLiTwo"><Link href="#">Security freeze</Link></li>
                      <li className="boxChildLiTwo">Fraud alert</li>
                      <li className="boxChildLiTwo">Disputes</li>
                      <li className="boxChildLiTwo">Contact us</li>
                    </ul>

                    <div className="boxChildThree">
                      <div className="boxImageChildThree">
                        <Image src="/choose-1.png" width={100} height={100} alt='image' />
                      </div>
                      <h5 className="subTitleBoxThree">PRIVACY SCAN</h5>
                      <h4 className="titleBoxThree">Is your personal info at risk?</h4>
                      <p className="descBoxThree">See if your address, email and more are exposed on people finder sites.</p>
                      <button className="btnBoxThree">Scan for free</button>
                    </div>

                  </div>
                </li>

                <li className='navLi' onClick={() => handleClick(2)}>
                  <Link href="#" className="navLink">
                    <span className="titleMenu">
                      Credit Cards
                    </span>
                    {menuId === 2 && isActive === true ?
                      (<FontAwesomeIcon icon={faChevronUp} className="iconNavLi" />) : (
                        <>
                          <FontAwesomeIcon icon={faChevronDown} className="iconNavLi" />
                          <FontAwesomeIcon icon={faChevronRight} className="iconNavLi iconNavLiMobile" />
                        </>
                      )}</Link>
                  <div className={`masterBoxChild ${menuId === 2 && isActive === true ? 'on' : ''}`}>
                    <div className="parentIconBack" onClick={() => handleClick(1)}>
                      <FontAwesomeIcon icon={faChevronLeft} className="iconBack" />
                    </div>
                    <ul className="boxChildUlOne">
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>All credit card types</h3>
                            {/* <p>ID Monitoring, alert and protection</p> */}
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Balance Transfer</h3>
                            {/* <p>Scan your SSN, phone and email</p> */}
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Cash Back</h3>
                            {/* <p>Find your info on people finder sites</p> */}
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="boxChildUlTwo">
                      <li className="boxChildLiTwo title">CREDIT CARD ADVICE</li>
                      <li className="boxChildLiTwo">How to use a credit card to build credit</li>
                      <li className="boxChildLiTwo">Best instant-use credit cards</li>
                      <li className="boxChildLiTwo">Best credit cards with no annual fee</li>
                      <li className="boxChildLiTwo">How to choose a credit card</li>
                    </ul>

                    <div className="boxChildThree">
                      <div className="boxImageChildThree">
                        <Image src="/choose-2.png" width={100} height={100} alt='image' />
                      </div>
                      <h5 className="subTitleBoxThree">CREDIT CARDS</h5>
                      <h4 className="titleBoxThree">Get matched before you apply</h4>
                      <p className="descBoxThree">We’ll find the best credit cards for you based on your credit profile.</p>
                      <button className="btnBoxThree">See your matches</button>
                    </div>

                  </div>
                </li>

                <li className='navLi' onClick={() => handleClick(3)}>
                  <Link href="#" className="navLink">
                    <span className="titleMenu">
                      Loans
                    </span>
                    {menuId === 3 && isActive === true ?
                      (<FontAwesomeIcon icon={faChevronUp} className="iconNavLi" />) : (
                        <>
                          <FontAwesomeIcon icon={faChevronDown} className="iconNavLi" />
                          <FontAwesomeIcon icon={faChevronRight} className="iconNavLi iconNavLiMobile" />
                        </>
                      )}</Link>
                  <div className={`masterBoxChild ${menuId === 3 && isActive === true ? 'on' : ''}`}>
                    <div className="parentIconBack" onClick={() => handleClick(1)}>
                      <FontAwesomeIcon icon={faChevronLeft} className="iconBack" />
                    </div>
                    <ul className="boxChildUlOne">
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>All loan types</h3>
                            {/* <p>ID Monitoring, alert and protection</p> */}
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Debt Consolidation</h3>
                            {/* <p>Scan your SSN, phone and email</p> */}
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Personal</h3>
                            {/* <p>Find your info on people finder sites</p> */}
                          </div>
                        </div>
                      </li>
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Student</h3>
                            {/* <p>Find your info on people finder sites</p> */}
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="boxChildUlTwo">
                      <li className="boxChildLiTwo title">CREDIT CARD ADVICE</li>
                      <li className="boxChildLiTwo">Best personal loans for bad credit</li>
                      <li className="boxChildLiTwo">What to know before applying for a loan</li>
                      <li className="boxChildLiTwo">How does a personal loan impact your credit score?</li>
                      <li className="boxChildLiTwo">How to get an emergency loan</li>
                      <li className="boxChildLiTwo">How cosigning a loan affects your credit</li>
                    </ul>

                    <div className="boxChildThree">
                      <div className="boxImageChildThree">
                        <Image src="/choose-3.png" width={100} height={100} alt='image' />
                      </div>
                      <h5 className="subTitleBoxThree">CREDIT CARDS</h5>
                      <h4 className="titleBoxThree">Get matched before you apply</h4>
                      <p className="descBoxThree">We’ll find the best credit cards for you based on your credit profile.</p>
                      <button className="btnBoxThree">See your matches</button>
                    </div>

                  </div>
                </li>

                <li className='navLi' onClick={() => handleClick(4)}>
                  <Link href="#" className="navLink">
                    <span className="titleMenu">
                      Auto
                    </span>
                    {menuId === 4 && isActive === true ?
                      (<FontAwesomeIcon icon={faChevronUp} className="iconNavLi" />) : (
                        <>
                          <FontAwesomeIcon icon={faChevronDown} className="iconNavLi" />
                          <FontAwesomeIcon icon={faChevronRight} className="iconNavLi iconNavLiMobile" />
                        </>
                      )}</Link>
                  <div className={`masterBoxChild ${menuId === 4 && isActive === true ? 'on' : ''}`}>
                    <div className="parentIconBack" onClick={() => handleClick(1)}>
                      <FontAwesomeIcon icon={faChevronLeft} className="iconBack" />
                    </div>
                    <ul className="boxChildUlOne">
                      <li className="boxChildLiOne">
                        <div className="boxChild">
                          <FontAwesomeIcon icon={faLock} className="iconBoxChild" />
                          <div className="title">
                            <h3>Auto Insurance</h3>
                            <p>Compare, switch and save</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="boxChildUlTwo">
                      <li className="boxChildLiTwo title">AUTO ADVICE</li>
                      <li className="boxChildLiTwo">How to save on car insurance</li>
                      <li className="boxChildLiTwo">Factors that impact car insurance rates</li>
                      <li className="boxChildLiTwo">What is liability insurance?</li>
                      <li className="boxChildLiTwo">What is gap insurance?</li>
                      <li className="boxChildLiTwo">Do you need insurance for a rental car?</li>
                      <li className="boxChildLiTwo">Cheapest states for car insurance</li>
                    </ul>

                    <div className="boxChildThree">
                      <div className="boxImageChildThree">
                        <Image src="/choose-4.png" width={100} height={100} alt='image' />
                      </div>
                      <h5 className="subTitleBoxThree">CREDIT CARDS</h5>
                      <h4 className="titleBoxThree">Get matched before you apply</h4>
                      <p className="descBoxThree">We’ll find the best credit cards for you based on your credit profile.</p>
                      <button className="btnBoxThree">See your matches</button>
                    </div>

                  </div>
                </li>

              </ul>
            </nav>

            <div className="action">
              <Link href="#" className="navLink">Sign in</Link>
              <div className="search"><FontAwesomeIcon icon={faSearch} className="iconSearch" /></div>
              <div className="menuToogle" onClick={handleToogleMenu}>
                {isToggleMenu ? (
                  <FontAwesomeIcon icon={faClose} className='icon' />
                ) : (
                  <FontAwesomeIcon icon={faBars} className='icon' />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default Navbar;