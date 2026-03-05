'use client';

export default function TopNav() {
  return (
    <nav className="top-nav">
      <div className="top-nav-logo">
        <div className="top-nav-dot"></div>
        <span>CM Trading & Exports</span>
      </div>
      <ul className="top-nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#markets">Markets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <style jsx>{`
        .top-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 1.2rem 4.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: box-shadow 0.3s ease;
        }

        .top-nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .top-nav-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--yellow);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .top-nav-logo span {
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--white);
          letter-spacing: -0.2px;
        }

        .top-nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }

        .top-nav-links a {
          font-size: 0.82rem;
          color: var(--grey-1);
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }

        .top-nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--yellow);
          transition: width 0.3s ease;
        }

        .top-nav-links a:hover,
        .top-nav-links a.active {
          color: var(--yellow);
        }

        .top-nav-links a:hover::after,
        .top-nav-links a.active::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .top-nav {
            padding: 1rem 2rem;
          }

          .top-nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
