const clients = [
  "NASCAR",
  "Google",
  "Red Bull",
  "3M",
  "Facebook",
  "Amazon",
  "EA",
  "Autodesk",
  "Bosch",
  "Dow Jones",
  "Hulu",
  "Grey",
  "ExxonMobil",
  "Intuit",
];

export default function ClientLogos() {
  return (
    <section className="py-10 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <span
              key={index}
              className="text-dark/40 hover:text-dark/80 font-bold text-lg md:text-xl uppercase tracking-wider transition-opacity duration-200 cursor-default select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
