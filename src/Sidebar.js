import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isShowSidebar, toggleSidebar, sublinks } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isShowSidebar && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
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
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
