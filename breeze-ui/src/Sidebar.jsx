import PropTypes from 'prop-types';

import React, { useState, useEffect } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid, LiaArrowRightSolid } from "react-icons/lia";


const Sidebar = ({
  items = [],
  isOpen,
  bgColor = "#111",
  textColor = "#fff",
  logo,
  tileColor = "orange",
  showLogout,
  logoutFn,
  radius = "10px",
}) => {
  const [open, setIsOpen] = useState(isOpen);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const toggleSubMenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Styles object
  const styles = {
    sidebar: {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000000,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    animatedSide: {
      width: '350px',
      height: '100vh',
      position: 'absolute',
      animation: 'animateSidebar 0.5s linear',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      gap: '20px',
      flexDirection: 'column',
      backgroundColor: bgColor,
      color: textColor
    },
    logo: {
      width: '200px',
      marginTop: '20px'
    },
    navigation: {
      gap: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'inherit',
      flexDirection: 'column'
    },
    navTile: {
      width: '280px',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      color: 'inherit',
      textDecoration: 'none',
      flexDirection: 'column'
    },
    leftMain: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 10px',
      width: 'calc(100% - 20px)',
      alignItems: 'center',
      background: tileColor,
      borderRadius: radius,
      cursor: 'pointer'
    },
    leftWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
    },
    icon: {
      display: 'flex',
      fontSize: '1rem',
      justifyContent: 'center',
      alignItems: 'center'
    },
    subMenu: {
      width: '100%',
      gap: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '5px'
    },
    subLink: {
      width: 'calc(80% - 20px)',
      height: '45px',
      padding: '0 10px',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      marginLeft: '20%',
      textDecoration: 'none',
      color: 'inherit',
      gap: '10px',
      background: tileColor,
      borderRadius: radius
    },
    logoutBtn: {
      width: '320px',
      height: '55px',
      fontSize: '1rem',
      textTransform: 'uppercase',
      background: 'red',
      border: 'none',
      color: 'white',
      fontWeight: 600,
      position: 'absolute',
      bottom: '20px',
      cursor: 'pointer',
      borderRadius: radius
    },
    subIcon: {
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  // Animation styles
  const animationStyles = `
    @keyframes animateSidebar {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      {open && (
        <div
          onClick={() => setIsOpen(false)}
          style={styles.sidebar}
        >
          <div
            style={styles.animatedSide}
            onClick={(e) => e.stopPropagation()}
          >
            {logo && <img style={styles.logo} src={logo} alt="Logo" />}
            <div style={styles.navigation}>
              {items?.map((item, i) => {
                const ItemIcon = item?.icon;
                const hasSubLinks = item?.subLinks?.length > 0;
                const hasLink = item?.link;

                if (hasSubLinks) {
                  return (
                    <div key={i} style={styles.navTile}>
                      <div
                        style={styles.leftMain}
                        onClick={() => toggleSubMenu(i)}
                      >
                        <div style={styles.leftWrap}>
                          <div style={styles.icon}>
                            {ItemIcon && <ItemIcon />}
                          </div>
                          <p>{item?.text}</p>
                        </div>
                        <div style={styles.icon}>
                          {openSubmenus[i] ? (
                            <LiaAngleUpSolid />
                          ) : (
                            <LiaAngleDownSolid />
                          )}
                        </div>
                      </div>

                      {openSubmenus[i] && (
                        <div style={styles.subMenu}>
                          {item.subLinks.map((sub, idx) => {
                            const SubIcon = sub?.icon;
                            return (
                              <a
                                key={idx}
                                href={sub.link}
                                style={styles.subLink}
                                rel="noopener noreferrer"
                              >
                                {SubIcon && (
                                  <div style={styles.icon}>
                                    <SubIcon />
                                  </div>
                                )}
                                <p>{sub.text}</p>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (hasLink) {
                  return (
                    <a
                      key={i}
                      href={item.link}
                      style={{
                        ...styles.navTile,
                        background: tileColor,
                        borderRadius: radius
                      }}
                      rel="noopener noreferrer"
                    >
                      <div style={styles.leftMain}>
                        <div style={styles.leftWrap}>
                          <div style={styles.icon}>
                            {ItemIcon && <ItemIcon />}
                          </div>
                          <p>{item?.text}</p>
                        </div>
                        <div style={styles.icon}>
                          <LiaArrowRightSolid />
                        </div>
                      </div>
                    </a>
                  );
                }
              })}
            </div>

            {showLogout && (
              <button
                style={styles.logoutBtn}
                onClick={logoutFn}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Sidebar.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      text: PropTypes.string.isRequired,
      subLinks: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.elementType,
          text: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired
        })
      ),
      link: PropTypes.string
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  logo: PropTypes.string,
  tileColor: PropTypes.string,
  showLogout: PropTypes.bool,
  logoutFn: PropTypes.func,
  radius: PropTypes.string
};

export default Sidebar;
