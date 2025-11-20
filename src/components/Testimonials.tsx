import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "محمد العمري",
      role: "مالك مخطط سكني",
      location: "أبها",
      rating: 5,
      text: "خدمة احترافية من البداية للنهاية. أنجزوا المشروع في الوقت المحدد وبجودة تفوق التوقعات. أنصح بهم بشدة"
    },
    {
      name: "أحمد القحطاني",
      role: "مقاول",
      location: "خميس مشيط",
      rating: 5,
      text: "تعاونت معهم في عدة مشاريع، دائماً يقدمون أفضل النتائج. فريق محترف ومتعاون وأسعار منافسة جداً"
    },
    {
      name: "عبدالله الشهري",
      role: "صاحب مشروع تجاري",
      location: "بيشة",
      rating: 5,
      text: "سفلتوا ساحة المشروع الخاص بي بكل احترافية. العمل نظيف ومتقن والنتيجة ممتازة. شكراً لفريق العمل المميز"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            آراء عملائنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
