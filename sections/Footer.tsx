const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-base-content/10">
      <p className="text-base-content/60">
        © {new Date().getFullYear()} Mostakim. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
