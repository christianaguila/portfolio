export default function Footer() {
  return (
    <footer className="py-6 border-t border-border-light">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-text-tertiary text-xs">
          © {new Date().getFullYear()} Christian Rhomel Aguila
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/christianaguila"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary text-xs hover:text-text-primary transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christianrhomel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary text-xs hover:text-text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:christianrhomel@gmail.com"
            className="text-text-tertiary text-xs hover:text-text-primary transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
