import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServiceAreas = () => {
  const areas = [
    "أبها",
    "خميس مشيط",
    "وادي بن هشبل",
    "طريب",
    "تندحة",
    "بيشة",
    "أحد رفيدة",
    "الواديين",
    "سراة عبيدة",
    "الحرجة",
    "ظهران الجنوب",
    "بللحمر",
    "بللسمر",
    "تنومة",
    "النماص",
    "سبت العلايا",
    "الباحة",
    "محايل عسير",
    "جازان",
    "نجران"
  ];

  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            مناطق خدمتنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نغطي جميع مناطق عسير والمناطق المجاورة بخدماتنا المتميزة
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-lg px-6 py-3 border-2 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default font-bold hover:scale-110"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {area}
              </Badge>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-primary text-white text-center shadow-elevated">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              نصل إليك أينما كنت
            </h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              نوفر خدماتنا في جميع أنحاء منطقة عسير والمناطق المجاورة. اتصل بنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
