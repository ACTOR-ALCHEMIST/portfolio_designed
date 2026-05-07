import { Github, Globe, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "CV", to: "/cv" },
  { label: "Research", to: "/research" },
  { label: "Project", to: "/projects" },
  { label: "Blog", to: "/blog" }
];

const socialIcons = {
  github: Github,
  website: Globe,
  email: Mail
};

export default function Sidebar({ profile }) {
  return (
    <aside className="sidebar" aria-label="Primary">
      <section className="profile-card" aria-label="Profile summary">
        <img className="profile-avatar" src={profile.avatar} alt={profile.name} />
        <div>
          <h1>{profile.name}</h1>
          <p className="profile-cn">{profile.chineseName}</p>
          <p className="profile-title">{profile.title}</p>
        </div>
      </section>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-meta" aria-label="External links and location">
        {profile.socialLinks.map((link) => {
          const Icon = socialIcons[link.type] ?? Globe;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="meta-link"
            >
              <Icon aria-hidden="true" size={20} strokeWidth={2} />
              <span>{link.label}</span>
            </a>
          );
        })}
        <p className="meta-link meta-location">
          <MapPin aria-hidden="true" size={20} strokeWidth={2} />
          <span>{profile.location}</span>
        </p>
      </div>
    </aside>
  );
}
