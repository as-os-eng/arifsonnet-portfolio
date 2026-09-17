import { SERVICES, PROFILE } from "@/lib/data";

export function Services() {
  return (
    <section id="about" className="px-5 sm:px-10 py-20 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14">
        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-6">About</h2>
          <p className="text-[17px] sm:text-[19px] leading-relaxed text-[var(--ivory-300)] max-w-[60ch]">{PROFILE.bio}</p>
        </div>
        <div id="services">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-6">Services</h2>
          <div className="flex flex-col">
            {SERVICES.map((s) => (
              <div key={s.title} className="py-4 border-t border-[var(--clay-line)] first:border-t-0">
                <h3 className="text-[16px] font-medium">{s.title}</h3>
                <p className="text-[13px] text-[var(--ivory-500)] mt-1">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
