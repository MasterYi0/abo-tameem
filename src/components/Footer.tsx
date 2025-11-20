import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const phoneNumber = "0573539707"; // Replace with actual number
  const whatsappNumber = "0573539707"; // Replace with actual number
  const email = "alymohsen63@gmail.com"; // Replace with actual email

  return (
    <footer className="bg-industrial-darker text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent">
              شركة أبو تميم
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              شركة رائدة في مجال رصف وسفلتة الطرق بمنطقة عسير. نقدم خدمات احترافية بأعلى معايير الجودة.
            </p>
            <div className="flex gap-3">
              <Button
                size="sm"
                className="bg-gradient-primary hover:shadow-glow"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="w-4 h-4 ml-2" />
                اتصل
              </Button>
              <Button
                size="sm"
                className="bg-[#25D366] hover:bg-[#20BD5A]"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-primary transition-colors">
                  لماذا نحن
                </a>
              </li>
              <li>
                <a href="#areas" className="text-gray-400 hover:text-primary transition-colors">
                  مناطق الخدمة
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  معرض الأعمال
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  آراء العملاء
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-3 text-gray-400">
              <li>رصف الطرق</li>
              <li>سفلتة المخططات</li>
              <li>ترميم وصيانة الأسفلت</li>
              <li>إزالة واستبدال الأسفلت</li>
              <li>تجهيز ساحات ومداخل</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">اتصل بنا</div>
                  <a href={`tel:${phoneNumber}`} className="text-white hover:text-primary transition-colors font-semibold">
                    {phoneNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">البريد الإلكتروني</div>
                  <a href={`mailto:${email}`} className="text-white hover:text-primary transition-colors font-semibold">
                    {email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">الموقع</div>
                  <div className="text-white font-semibold">
                    أبها، منطقة عسير
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              جميع الحقوق محفوظة © {new Date().getFullYear()} شركة أبو تميم لأعمال الأسفلت
            </p>
            <p className="text-gray-500 text-sm">
              صُمم بـ ❤️ لخدمة منطقة عسير
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
