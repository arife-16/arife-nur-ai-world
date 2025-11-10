import { Card } from "@/components/ui/card";
import arifeNur from "../../certificates/Arife Nur Ayaz.png";
import qPoland from "../../certificates/QPoland.jpg";
import harvard from "../../certificates/harvard.jpg";
import quantumExcellence from "../../certificates/quantum excellence.jpg";

const Certificates = () => {
  const items = [
    { src: arifeNur, alt: "Certificate - Arife Nur Ayaz" },
    { src: qPoland, alt: "Certificate - Quantum Poland" },
    { src: harvard, alt: "Certificate - Harvard" },
    { src: quantumExcellence, alt: "Certificate - Quantum Excellence" },
  ];

  return (
    <section id="certificates" className="py-16 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Certificates</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, idx) => (
            <Card key={idx} className="p-3 bg-card/50 backdrop-blur overflow-hidden">
              <div className="w-full h-56 md:h-72 flex items-center justify-center bg-muted">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block w-full h-full object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Certificates };