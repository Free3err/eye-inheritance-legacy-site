
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-eye-lightPurple/30 via-white to-white -z-10" />
      
      {/* Декоративные элементы */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-eye-purple/5 blur-3xl -z-10" />
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-eye-blue/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-eye-lightPurple/40 rounded-full animate-fade-in">
            <Eye className="w-5 h-5 text-eye-purple mr-2" />
            <span className="text-sm font-medium text-eye-darkPurple">Исследование наследования глаз</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in animate-delay-100">
            <span className="text-foreground">Удивительный мир </span>
            <span className="eye-gradient text-transparent bg-clip-text whitespace-nowrap">наследования глаз</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Изучите генетическую науку о цвете глаз, узнайте о закономерностях наследования 
            и статистических данных, собранных в нашем лицее.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button
              size="lg"
              className="bg-eye-purple hover:bg-eye-darkPurple text-white transition-all duration-300"
            >
              Узнать больше
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-eye-purple text-eye-purple hover:bg-eye-purple/10"
            >
              О проекте
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 w-full max-w-4xl mx-auto animate-fade-in animate-delay-400">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
              alt="Различные цвета человеческих глаз" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-semibold">Разнообразие цветов глаз</h3>
              <p className="text-white/80">От голубых до карих - генетическое чудо природы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
