
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Eye, BarChart3, Users, Percent } from "lucide-react";

const COLORS = ["#9b87f5", "#7E69AB", "#33C3F0", "#1EAEDB"];

const StatisticCard = ({ 
  icon, 
  title, 
  value, 
  suffix = "", 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  value: string | number;
  suffix?: string;
  description: string;
}) => (
  <Card className="glass border-0 h-full">
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="rounded-full p-2 bg-eye-lightPurple">
          {icon}
        </div>
        <span className="text-3xl font-bold text-eye-purple">
          {value}{suffix}
        </span>
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const StatisticsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const eyeColorData = [
    { name: "Карий", value: 55, color: "#7E69AB" },
    { name: "Голубой", value: 25, color: "#33C3F0" },
    { name: "Зеленый", value: 15, color: "#1EAEDB" },
    { name: "Серый", value: 5, color: "#9b87f5" }
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section id="statistics" className="section-padding bg-eye-lightPurple/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Статистика цвета глаз в лицее</h2>
          <p className="text-lg text-muted-foreground">
            Мы собрали данные о распространенности различных цветов глаз среди учащихся 
            и представляем вам интересную статистику.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatisticCard 
            icon={<Eye className="w-5 h-5 text-eye-purple" />}
            title="Изучено учеников"
            value={320}
            description="Общее количество учеников, принявших участие в исследовании"
          />
          <StatisticCard 
            icon={<BarChart3 className="w-5 h-5 text-eye-purple" />}
            title="Преобладающий цвет"
            value="Карий"
            description="Самый распространенный цвет глаз среди учеников лицея"
          />
          <StatisticCard 
            icon={<Users className="w-5 h-5 text-eye-purple" />}
            title="Редкий цвет"
            value="Серый"
            description="Наиболее редко встречающийся цвет глаз в нашем лицее"
          />
          <StatisticCard 
            icon={<Percent className="w-5 h-5 text-eye-purple" />}
            title="Цветовое разнообразие"
            value={4}
            description="Количество различных цветов глаз, встречающихся среди учеников"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="glass border-0 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Распределение цветов глаз</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={eyeColorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                        onMouseLeave={onPieLeave}
                      >
                        {eyeColorData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                            stroke={activeIndex === index ? "#fff" : "none"}
                            strokeWidth={2}
                            className={cn(
                              "transition-all duration-300",
                              activeIndex === index ? "opacity-100 transform scale-105" : "opacity-80"
                            )}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Процент учеников"]} />
                      <Legend 
                        verticalAlign="bottom" 
                        height={36} 
                        formatter={(value, entry, index) => (
                          <span className="text-sm font-medium">{value}</span>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Интересные факты о цвете глаз в нашем лицее</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Региональные особенности:</span> Распределение 
                цветов глаз в нашем лицее отражает генетические особенности населения нашего региона с преобладанием 
                карих глаз.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Гендерные различия:</span> Наше исследование 
                не выявило значительных различий в распределении цветов глаз между мальчиками и девочками, что 
                подтверждает отсутствие гендерной связи с этим признаком.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Редкие сочетания:</span> У 2% 
                учеников наблюдается гетерохромия — разный цвет глаз, что является редким генетическим 
                явлением.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Семейные связи:</span> В ходе исследования 
                мы также собрали данные о цвете глаз родителей, что позволило проследить закономерности 
                наследования этого признака в семьях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
