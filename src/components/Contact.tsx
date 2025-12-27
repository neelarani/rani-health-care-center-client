'use client';

const Contact = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-4xl font-bold text-muted mb-3">
            Contact Rani Health Care
          </h1>
          <p className="text-muted/70 text-base max-w-xl mx-auto">
            We are here to support your health needs. Reach out to us anytime.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="border border-muted-foreground/70 p-6 rounded-2xl shadow text-muted">
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-muted/70">
                Rani Health Care <br />
                Gazipur, Dhaka, Bangladesh
              </p>
            </div>

            {/* Phone */}
            <div className="border border-muted-foreground/70 text-muted p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted/70">+880 1938759588</p>
            </div>

            {/* Email */}
            <div className="border border-muted-foreground/70 text-muted p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted/70">info@ranihealthcare.com</p>
            </div>

            {/* Working Hours */}
            <div className="border border-muted-foreground/70 p-6 rounded-2xl shadow text-muted">
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-muted/70">
                Saturday – Thursday <br />
                9:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="border border-muted-foreground/70 text-muted p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  // rows="4"
                  placeholder="Write your message"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary -white py-3 rounded-lg font-medium hover:bg-primary/80 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
