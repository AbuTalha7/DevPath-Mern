import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const exploreItems = [
  {
    icon: DatabaseIcon,
    title: "SQL Course",
    description: "Our premium SQL course",
    href: "#roadmaps",
    tile: "var(--explore-lavender)",
  },
  {
    icon: ArrowRightIcon,
    title: "Get Started",
    description: "Pick a path and get started",
    href: "#roadmaps",
    tile: "var(--explore-lime-pale)",
  },
  {
    icon: FolderIcon,
    title: "Projects",
    description: "Skill-up with real-world projects",
    href: "#community",
    tile: "var(--explore-pink)",
  },
  {
    icon: BookIcon,
    title: "Guides",
    description: "In-depth articles and tutorials",
    href: "#guides",
    tile: "var(--explore-sky)",
  },
  {
    icon: UsersIcon,
    title: "Teams",
    description: "Collaborate with your team",
    href: "#community",
    tile: "var(--explore-yellow)",
  },
  {
    icon: MenuIcon,
    title: "Advertise",
    description: "Promote your product or service",
    href: "#",
    tile: "var(--explore-violet)",
  },
];

function ExploreMenu() {
  const location = useLocation();
  const locationKey = `${location.pathname}${location.search}${location.hash}`;

  return <ExploreMenuContent key={locationKey} />;
}

function ExploreMenuContent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  function focusMenuItem(index) {
    window.requestAnimationFrame(() => {
      const item = menuRef.current?.querySelectorAll('[role="menuitem"]')[index];
      item?.focus();
    });
  }

  function handleTriggerKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      focusMenuItem(event.key === "ArrowDown" ? 0 : exploreItems.length - 1);
    }
  }

  function handleMenuKeyDown(event) {
    const menuItems = [...menuRef.current.querySelectorAll('[role="menuitem"]')];
    const currentIndex = menuItems.indexOf(document.activeElement);

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + menuItems.length) % menuItems.length;
      menuItems[nextIndex].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      menuItems[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      menuItems[menuItems.length - 1].focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  }

  function renderItems(className) {
    return exploreItems.map(({ icon: Icon, title, description, href, tile }) => (
      <Link
        className={className}
        key={title}
        role="menuitem"
        to={href}
        onClick={() => setIsOpen(false)}
      >
        <span
          className="explore-item-icon"
          style={{ "--explore-tile-color": tile }}
          aria-hidden="true"
        >
          <Icon />
        </span>
        <span className="explore-item-copy">
          <span className="explore-item-title">{title}</span>
          <span className="explore-item-description">{description}</span>
        </span>
        <ChevronRightIcon className="explore-mobile-chevron" />
      </Link>
    ));
  }

  return (
    <>
      <div className="explore-menu-control" ref={menuRef} onBlur={handleBlur}>
        <button
          className="explore-trigger"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="explore-menu-panel"
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={handleTriggerKeyDown}
          ref={triggerRef}
        >
          Explore
          <MenuIcon />
        </button>
        <div
          className="explore-dropdown-panel"
          id="explore-menu-panel"
          role="menu"
          aria-label="Explore"
          hidden={!isOpen}
          onKeyDown={handleMenuKeyDown}
        >
          {renderItems("explore-dropdown-item")}
        </div>
      </div>
      <div className="explore-mobile-items" role="menu" aria-label="Explore">
        {renderItems("explore-mobile-item")}
      </div>
    </>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M3 10h18" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7v14" />
      <path d="M3 18V5a1 1 0 0 1 1-1h3a5 5 0 0 1 5 5v12a5 5 0 0 0-5-5H4a1 1 0 0 0-1 1Z" />
      <path d="M21 18V5a1 1 0 0 0-1-1h-3a5 5 0 0 0-5 5v12a5 5 0 0 1 5-5h3a1 1 0 0 1 1 1Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default ExploreMenu;
