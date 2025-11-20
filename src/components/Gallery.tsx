import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const projects = [
    {
      image: gallery1,
      title: "ترميم طريق رئيسي",
      location: "أبها",
      description: "قبل وبعد: تحويل طريق متضرر إلى طريق بحالة ممتازة"
    },
    {
      image: gallery2,
      title: "سفلتة مخطط سكني",
      location: "خميس مشيط",
      description: "سفلتة كاملة لمخطط سكني جديد بمساحة 5000 متر مربع"
    },
    {
      image: gallery3,
      title: "تجهيز ساحة ومدخل",
      location: "أحد رفيدة",
      description: "تجهيز ساحة واسعة ومدخل بأسفلت عالي الجودة"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            شاهد بعضاً من مشاريعنا المنجزة بنجاح في مختلف المناطق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-darker via-industrial-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                  <p className="text-primary font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
