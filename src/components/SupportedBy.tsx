import nasLogo from "@/assets/nas-logo.png";
import itfLogo from "@/assets/itf-logo.jpg";
import nitdaLogo from "@/assets/nitda-logo.png";
import nfjpLogo from "@/assets/nfjp-logo.png";

const partners = [
  { name: "Nasarawa State Govt", logo: nasLogo },
  { name: "Industrial Training Fund (ITF)", logo: itfLogo },
  { name: "National Information Tech Development Agency", logo: nitdaLogo },
  { name: "The Nigeria Jubilee Fellows Programme", logo: nfjpLogo },
];

export const SupportedBy = () => {
  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="container-tight">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-3 group">
              <img
                src={p.logo}
                alt={p.name}
                className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-[10px] md:text-xs font-medium text-center max-w-[120px]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
