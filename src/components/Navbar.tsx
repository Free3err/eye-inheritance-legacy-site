
import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3",
    {
      "bg-white/80 backdrop-blur-md shadow-md": scrolled,
      "bg-transparent": !scrolled,
    }
  );
  
  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Наследование глаз", href: "#inheritance" },
    { name: "Статистика", href: "#statistics" },
  ];

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Eye className="text-eye-purple w-6 h-6 mr-2" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-eye-purple">
                Наследование глаз
              </span>
              <span className="text-xs text-muted-foreground">by mogcommunity</span>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-eye-purple font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-60 mt-4": isMenuOpen,
              "max-h-0": !isMenuOpen,
            }
          )}
        >
          <div className="flex flex-col bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-eye-purple py-2 px-4 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
