import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className="my-24">
      {/* Hero */}
      <div className="">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-xl md:text-5xl font-bold mb-4 text-muted">
            AboutPage Rani Health Care
          </h1>
          <p className="max-w-2xl mx-auto text-muted/70 text-base">
            Caring for life with trust, compassion, and quality healthcare.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="max-w-6xl mx-auto px-4 py-16 mt-12 md:mt-24">
        <h2 className="text-3xl font-semibold mb-4 text-muted">Who We Are</h2>
        <p className="text-muted/70 max-w-3xl leading-relaxed">
          Rani Health Care is committed to delivering patient-focused medical
          services with professionalism and care. We aim to ensure every patient
          receives reliable treatment in a safe and supportive environment.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className=" py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-muted p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-accent-foreground text-base font-medium">
              To provide accessible, affordable, and high-quality healthcare
              services focused on patient well-being.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-accent-foreground text-base font-medium">
              To build a healthier future by becoming a trusted name in
              healthcare excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-muted">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl hover:bg-background">
            <h4 className="font-bold text-xl mb-2">Patient Care</h4>
            <p className="text-muted/70">
              Compassionate treatment focused on comfort and safety.
            </p>
          </div>
          <div className="p-6 border rounded-xl text-muted hover:bg-background">
            <h4 className=" mb-2 font-bold text-xl">Trusted Services</h4>
            <p className="text-muted/70">
              Ethical practices with transparent healthcare solutions.
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:bg-background">
            <h4 className="font-bold text-xl mb-2">Modern Approach</h4>
            <p className="text-muted/70">
              Updated medical practices and clean facilities.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-background py-16 text-center text-muted">
        <h2 className="text-3xl font-bold mb-4 ">Your Health, Our Priority</h2>
        <p className="text-muted/70 mb-6">
          Contact Rani Health Care for trusted and compassionate medical
          support.
        </p>
        <Link
          href={'/contact'}
          className="px-8 py-3 bg-white text-emerald-700 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
