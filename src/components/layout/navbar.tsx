"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { jetbrainsMono } from "@/components/ui/fonts"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const NavItems = ({ isMobile = false }) => (
    <>
      <Link
        href="/"
        className={`transition-colors hover:text-foreground/80 ${
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        } ${isMobile ? "py-2 border-b" : ""}`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        Startseite
      </Link>
      <Link
        href="/about"
        className={`transition-colors hover:text-foreground/80 ${
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        } ${isMobile ? "py-2 border-b" : ""}`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        Über mich
      </Link>
      <Link
        href="#contact-form"
        className={`transition-colors hover:text-foreground/80 ${
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        } ${isMobile ? "py-2 border-b" : ""}`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        Kontakt
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className={`${jetbrainsMono.className} font-bold flex items-center leading-none`}>
              <span className="relative text-xl tracking-tight">
                <span className="absolute -bottom-0.5 left-0.5 text-foreground/30">codecrafter</span>
                <span className="relative">codecrafter</span>
              </span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavItems isMobile={false} />
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Always visible mode toggle */}
          <ModeToggle />
          
          {/* Mobile Menu (hamburger) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto max-h-[300px] pt-16">
                <div className="flex flex-col text-base font-medium border-t">
                  <NavItems isMobile={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}