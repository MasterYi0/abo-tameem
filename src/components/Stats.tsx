import { Target, Users, Smile, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Target className="w-12 h-12" />,
      number: "500+",
      label: "مشروع منجز",
      suffix: "بنجاح"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "300+",
      label: "عميل راضٍ",
      suffix: "عن خدماتنا"
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "15+",
      label: "سنة خبرة",
      suffix: "في المجال"
    },
    {
      icon: <Smile className="w-12 h-12" />,
      number: "100%",
      label: "نسبة الرضا",
      suffix: "من العملاء"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            أرقامنا تتحدث عنا
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            إنجازات حقيقية وأرقام تعكس التزامنا بالتميز والجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xl font-bold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.suffix}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
