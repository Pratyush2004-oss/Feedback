const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary/50 text-base-content p-4 z-10">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Pratyush Mishra
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
