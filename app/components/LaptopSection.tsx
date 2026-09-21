import Image from "next/image";

export default function LaptopSection() {
  return (
    <section className="laptop-section section-padding">
      <div className="container">
        <div className="laptop-image-wrapper">
          <Image
            src="/second-image.webp"
            alt="Business team working on laptop"
            width={1200}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
