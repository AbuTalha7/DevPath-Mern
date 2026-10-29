import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const accountItems = [
  {
    icon: UserIcon,
    title: "Account",
    description: "Settings and billing",
    href: "/account",
    color: "#ddd6fe",
  },
  {
    icon: ContactIcon,
    title: "My Profile",
    description: "See how others view you",
    href: "/profile",
    color: "#fbcfe8",
  },
  {
    icon: UsersIcon,
    title: "Friends",
    description: "Learn alongside others",
    href: "/friends",
    color: "#bae6fd",
  },
  {
    icon: MapIcon,
    title: "Roadmaps",
    description: "Pick up where you left off",
    href: "#roadmaps",
    color: "#d9f27a",
  },
  {
    icon: UsersIcon,
    title: "Teams",
    description: "Collaborate with your team",
    href: "#community",
    color: "#fde68a",
    trailingIcon: ChevronRightIcon,
  },
  {
    icon: ZapIcon,
    title: "Upgrade to Pro",
    description: "Unlock every feature",
    href: "#community",
    color: "#fde047",
    emphasized: true,
  },
  {
    icon: GiftIcon,
    title: "Gift Roadmap Pro",
    description: "Give a friend Pro access",
    href: "#community",
    color: "#fed7aa",
    emphasized: true,
  },
  {
    icon: LogOutIcon,
    title: "Logout",
    description: "Sign out of this device",
    href: "/",
    color: "#e9d5ff",
  },
];

function AccountMenu() {
  const location = useLocation();
  const locationKey = `${location.pathname}${location.search}${location.hash}`;

  return <AccountMenuContent key={locationKey} />;
}

function AccountMenuContent() {
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

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
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

  function renderItem({
    icon: Icon,
    title,
    description,
    href,
    color,
    emphasized,
    trailingIcon: TrailingIcon,
  }) {
    const contents = (
      <>
        <span
          className="account-menu-icon"
          style={{ "--account-icon-bg": color }}
          aria-hidden="true"
        >
          <Icon />
        </span>
        <span className="account-menu-copy">
          <span className={emphasized ? "account-menu-title emphasized" : "account-menu-title"}>
            {title}
          </span>
          <span className="account-menu-description">{description}</span>
        </span>
        {TrailingIcon && (
          <TrailingIcon className="account-menu-trailing-icon" />
        )}
      </>
    );

    return (
      <Link
        className="account-menu-item"
        key={title}
        role="menuitem"
        to={href}
        onClick={() => setIsOpen(false)}
      >
        {contents}
      </Link>
    );
  }

  return (
    <div
      className="account-menu-control"
      ref={menuRef}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <span className="account-reward" aria-label="2 rewards">
        <ZapIcon />
        <span>2</span>
      </span>
      <button
        className="account-trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="account-menu-panel"
        onClick={() => setIsOpen((open) => !open)}
        ref={triggerRef}
      >
        <span>Account</span>
        <ChevronUpIcon className={isOpen ? "is-open" : ""} />
      </button>
      <div
        className="account-dropdown-panel"
        id="account-menu-panel"
        role="menu"
        aria-label="Account menu"
        hidden={!isOpen}
      >
        {accountItems.map(renderItem)}
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2.5" />
      <path d="M5.5 17a4 4 0 0 1 7 0M15 9h3M15 13h3" />
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

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13 2-3 8h7l-6 12 1-9H6z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12v10H4V12M2 7h20v5H2zM12 7v15" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 2.5-2.5V7ZM12 7h4.5A2.5 2.5 0 1 0 14 4.5V7Z" />
    </svg>
  );
}

function LogOutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 17l5-5-5-5M15 12H3" />
      <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
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

function ChevronUpIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

export default AccountMenu;
