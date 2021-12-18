import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { sublinks, location, isShowSubmenu } = useGlobalContext();
  const submenuContainer = useRef(null);

  useEffect(() => {
    const submenu = submenuContainer.current;
    submenu.style.top = `${location.position.top}px`;
    submenu.style.left = `${location.position.left}px`;
  }, [location]);

  return (
    <div
      className={`submenu ${isShowSubmenu && "show"}`}
      ref={submenuContainer}
    >
      {sublinks.map((item, index) => {
        if (item.page === location.page) {
          const { page, links } = item;
          return (
            <div key={index}>
              <h4>{page}</h4>
              <div
                className={`submenu-center col-${
                  links.length < 3 ? 2 : links.length === 3 ? 3 : 4
                }`}
              >
                {links.map((sublink, index) => {
                  const { label, icon, url } = sublink;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Submenu;
