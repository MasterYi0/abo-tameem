import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const phoneNumber = "0573539707"; // Replace with actual number
  const whatsappNumber = "0573539707"; // Replace with actual number
  const email = "alymohsen63@gmail.com"; // Replace with actual email
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-darker/90 via-industrial-dark/80 to-industrial-darker/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm">الرائدون في أعمال الأسفلت بمنطقة عسير</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            <span className="block mb-2">شركة أبو تميم</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              لأعمال الأسفلت
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 font-semibold max-w-2xl mx-auto leading-relaxed">
            رصف وسفلتة احترافية للطرق والمخططات في أبها، خميس مشيط وجميع مناطق عسير
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="ml-2 h-6 w-6" />
              اتصل الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              واتساب
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">15+</div>
              <div className="text-gray-400 font-semibold">سنة خبرة</div>
            </div>
            <div className="text-center border-x border-gray-700">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
              <div className="text-gray-400 font-semibold">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">100%</div>
              <div className="text-gray-400 font-semibold">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
