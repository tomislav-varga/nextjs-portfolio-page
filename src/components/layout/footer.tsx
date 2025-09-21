export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="/impressum"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Legal Notice
          </a>
          <a
            href="/datenschutz"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cookie Settings
          </a>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tom Varga. All rights reserved.
        </p>
      </div>
    </footer>
  )
}