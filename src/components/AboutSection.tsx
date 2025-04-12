
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Book, MessageSquare } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О проекте</h2>
          <p className="text-lg text-muted-foreground">
            Наш проект посвящен изучению генетики цвета глаз и особенностям его наследования.
            Мы собрали информацию и статистические данные, чтобы сделать эту область науки 
            понятной и доступной для всех.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass border-0 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-eye-lightPurple flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-eye-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Научный подход</h3>
              <p className="text-muted-foreground flex-grow">
                Мы опираемся на современные научные исследования в области генетики и 
                наследования признаков. Вся представленная информация базируется на 
                проверенных источниках.
              </p>
              <Button variant="outline" className="mt-4 w-full border-eye-purple text-eye-purple hover:bg-eye-purple/10">
                Подробнее
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-eye-lightPurple flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-eye-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Образовательная ценность</h3>
              <p className="text-muted-foreground flex-grow">
                Наш проект имеет образовательную ценность и может быть использован 
                учениками и учителями для изучения генетики и биологии человека 
                на практических примерах.
              </p>
              <Button variant="outline" className="mt-4 w-full border-eye-purple text-eye-purple hover:bg-eye-purple/10">
                Материалы
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-eye-lightPurple flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-eye-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Обратная связь</h3>
              <p className="text-muted-foreground flex-grow">
                Мы всегда открыты для вопросов, предложений и дополнений. 
                Если у вас есть интересная информация или вы хотите принять 
                участие в наших исследованиях, свяжитесь с нами.
              </p>
              <Button variant="outline" className="mt-4 w-full border-eye-purple text-eye-purple hover:bg-eye-purple/10">
                Связаться
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-eye-lightPurple/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Присоединяйтесь к нашему исследованию</h3>
              <p className="text-muted-foreground mb-6">
                Мы продолжаем собирать данные о цвете глаз и закономерностях их наследования. 
                Ваше участие поможет расширить нашу базу данных и сделать результаты 
                исследования более точными и репрезентативными.
              </p>
              <Button className="bg-eye-purple hover:bg-eye-darkPurple text-white transition-all duration-300">
                Участвовать в исследовании
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-eye-purple/20 to-eye-blue/20 rounded-lg filter blur-2xl opacity-70 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Исследование цвета глаз" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
