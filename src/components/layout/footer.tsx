export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tom. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}