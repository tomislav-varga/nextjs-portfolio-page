export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="/impressum"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Datenschutz
          </a>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tom. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}