import { 
  Shield, 
  Award, 
  Users, 
  Zap, 
  ThumbsUp 
} from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "جودة مضمونة",
      description: "نستخدم أفضل المواد والمعدات لضمان جودة عالية ومتانة طويلة الأمد"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "خبرة 15+ سنة",
      description: "فريق محترف بخبرة تزيد عن 15 عاماً في مجال أعمال الأسفلت والرصف"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد ونضمن إنجاز المشاريع في الوقت المحدد دون تأخير"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "فريق متخصص",
      description: "فنيون ومهندسون مدربون على أعلى مستوى لتقديم خدمة احترافية متكاملة"
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: "رضا العملاء",
      description: "نسبة رضا 100% من عملائنا وسمعة ممتازة في جميع أنحاء منطقة عسير"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            لماذا تختار شركة أبو تميم؟
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نفخر بتقديم خدمات استثنائية تميزنا عن المنافسين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
