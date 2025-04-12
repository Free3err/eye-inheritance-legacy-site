
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UsersRound, 
  GraduationCap, 
  LineChart, 
  Dna 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="glass border-0 hover:shadow-md transition-all duration-300 h-full">
    <CardContent className="p-6">
      <div className="w-12 h-12 rounded-lg bg-eye-lightPurple flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const InheritanceSection = () => {
  return (
    <section id="inheritance" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наследование цвета глаз</h2>
          <p className="text-lg text-muted-foreground">
            Цвет глаз — это генетическая черта, которая наследуется от родителей. 
            Мы исследовали данное явления и сделали несколько кратких тезисов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Dna className="w-6 h-6 text-eye-purple" />}
            title="Генетика цвета глаз"
            description="Цвет глаз определяется несколькими генами, главным из которых являются OCA2 и HERC2 на хромосоме 15."
          />
          <FeatureCard
            icon={<UsersRound className="w-6 h-6 text-eye-purple" />}
            title="Родительское наследование"
            description="Дети наследуют гены цвета глаз от обоих родителей, но проявление зависит от доминантности."
          />
          <FeatureCard
            icon={<GraduationCap className="w-6 h-6 text-eye-purple" />}
            title="Научные исследования"
            description="Современные исследования показывают, что наследование цвета глаз сложнее, чем простая доминантность."
          />
          <FeatureCard
            icon={<LineChart className="w-6 h-6 text-eye-purple" />}
            title="Статистические данные"
            description="Карий цвет глаз самый распространенный в мире, голубой и зеленый встречаются реже."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">Как происходит наследование цвета глаз?</h3>
            <ScrollArea className="h-[320px] rounded-md border p-4">
              <div className="space-y-4 pr-4">
                <p>
                  <strong>Цвет глаз и генетика:</strong> Наследование цвета глаз — это сложный процесс, 
                  который зависит от множества генов. Эти гены контролируют количество, тип и распределение 
                  пигмента меланина в радужной оболочке глаза.
                </p>
                <p>
                  <strong>Доминантные и рецессивные гены:</strong> Исторически считалось, что карий цвет глаз 
                  доминирует над голубым, но современная генетика показывает, что это намного сложнее. Цвет глаз 
                  зависит от нескольких генов, работающих вместе.
                </p>
                <p>
                  <strong>Ключевые гены:</strong> Основными генами, влияющими на цвет глаз, являются OCA2 и HERC2. 
                  Вариации в этих генах влияют на количество меланина в радужке, что и определяет цвет глаз.
                </p>
                <p>
                  <strong>Влияние меланина:</strong> Меланин — это пигмент, который придает цвет глазам, коже и волосам. 
                  Люди с высоким содержанием меланина в радужке имеют карие глаза, а с низким — голубые.
                </p>
                <p>
                  <strong>Неожиданные комбинации:</strong> Двое кареглазых родителей могут иметь голубоглазого ребенка, 
                  если оба являются носителями рецессивного гена голубых глаз. Это показывает, насколько сложным может быть 
                  процесс наследования.
                </p>
                <p>
                  <strong>Изменение цвета глаз:</strong> У многих младенцев глаза при рождении голубые, но с возрастом они 
                  могут потемнеть по мере накопления меланина в радужке.
                </p>
              </div>
            </ScrollArea>
          </div>
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-eye-lightPurple/50 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-eye-blue/30 rounded-full filter blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Наследование цвета глаз"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InheritanceSection;
