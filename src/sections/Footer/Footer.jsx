function Footer() {
  return (
    <footer id="footer" className="border-t border-border">
      <p className="mx-auto max-w-5xl px-5 py-8 text-center font-mono text-xs text-text-muted sm:px-8">
        &copy; {new Date().getFullYear()} Sai Cherish Potluri. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
