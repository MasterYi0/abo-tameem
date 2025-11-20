import { Card, CardContent } from "@/components/ui/card";
import { 
  Construction, 
  Map, 
  Wrench, 
  Trash2, 
  ParkingCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Construction className="w-12 h-12" />,
      title: "رصف الطرق",
      description: "رصف احترافي للطرق الرئيسية والفرعية بأحدث المعدات وأعلى معايير الجودة"
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: "سفلتة المخططات",
      description: "تنفيذ سفلتة كاملة للمخططات السكنية والتجارية بدقة واحترافية عالية"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "ترميم وصيانة الأسفلت",
      description: "صيانة شاملة للطرق القائمة وإصلاح التشققات والتلفيات بكفاءة"
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "إزالة واستبدال الأسفلت",
      description: "إزالة الأسفلت التالف واستبداله بطبقات جديدة بمواصفات قياسية"
    },
    {
      icon: <ParkingCircle className="w-12 h-12" />,
      title: "تجهيز ساحات ومداخل",
      description: "تجهيز وتأهيل الساحات والمداخل بأسفلت عالي الجودة ومظهر احترافي"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات الأسفلت بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
