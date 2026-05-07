import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { profile } from "../lib/content";

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Sidebar profile={profile} />
      <main
        id="main-content"
        className="main-content"
        tabIndex={-1}
        ref={mainRef}
      >
        <div className="content-frame">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
