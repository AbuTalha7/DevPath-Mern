import { useState } from "react";

function FriendsPanel() {
  const [copyStatus, setCopyStatus] = useState("");
  const inviteLink = `${window.location.origin}/friends?invite=AbuTalha`;

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink).then(
      () => setCopyStatus("Invite link copied."),
      () => setCopyStatus("Could not copy the invite link. Please copy it manually."),
    );
  }

  return (
    <section className="account-friends-panel" aria-labelledby="friends-title">
      <div className="account-friends-invite">
        <FriendsInviteIcon />
        <h1 id="friends-title">Invite your Friends</h1>
        <p>
          Share the unique link below with your friends to track their skills and
          progress.
        </p>
        <div className="account-friends-link">
          <input
            type="text"
            value={inviteLink}
            readOnly
            aria-label="Your unique invite link"
            onFocus={(event) => event.target.select()}
          />
          <button type="button" onClick={copyInviteLink}>
            <CopyIcon />
            Copy
          </button>
        </div>
        <p className="account-friends-copy-status" aria-live="polite">
          {copyStatus}
        </p>
      </div>
    </section>
  );
}

function FriendsInviteIcon() {
  return (
    <svg
      className="account-friends-invite-icon"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <circle cx="42" cy="30" r="18" />
      <path d="M13 82c2-20 13-31 29-31 10 0 18 4 23 12" />
      <path d="M78 57v28M64 71h28" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

export default FriendsPanel;
