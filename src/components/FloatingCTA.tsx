import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const phoneNumber = "0573539707"; // Replace with actual number
  const whatsappNumber = "0573539707"; // Replace with actual number
  const email = "alymohsen63@gmail.com"; // Replace with actual email
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-110"
        onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
      >
        <MessageCircle className="h-7 w-7" />
      </Button>

      {/* Phone Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-primary text-white shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-110"
        onClick={() => window.location.href = `tel:${phoneNumber}`}
      >
        <Phone className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
