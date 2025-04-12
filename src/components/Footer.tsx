
import { Eye } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Eye className="text-eye-purple w-6 h-6 mr-2" />
            <span className="font-bold text-xl text-eye-purple">Мир Глаз</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-eye-purple transition-colors">
              Главная
            </a>
            <a href="#inheritance" className="text-muted-foreground hover:text-eye-purple transition-colors">
              Наследование глаз
            </a>
            <a href="#statistics" className="text-muted-foreground hover:text-eye-purple transition-colors">
              Статистика
            </a>
            <a href="#about" className="text-muted-foreground hover:text-eye-purple transition-colors">
              О проекте
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Проект по наследованию цвета глаз. Все права защищены.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-eye-purple transition-colors text-sm"
              aria-label="Политика конфиденциальности"
            >
              Политика конфиденциальности
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-eye-purple transition-colors text-sm"
              aria-label="Условия использования"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
