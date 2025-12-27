import Link from 'next/link';

function PublicFooter() {
  return (
    <footer className="bg-foreground border-t border-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2 text-muted text-xl">
              Rani Health Care
            </h3>
            <p className="text-base text-muted/70 ">
              Your health is our priority. We are here to provide the best
              medical services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-muted">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted/70 hover:text-muted">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted/70 hover:text-muted">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-muted/70 hover:text-muted"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted/70 hover:text-muted"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-muted">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted/70 hover:text-muted">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-muted">Contact Us</h3>
            <p className="text-sm text-muted/70 ">
              123 Medical Lane
              <br />
              Health City, HC 12345
              <br />
              neelarany@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground pt-4 text-center text-base text-muted">
          &copy; {new Date().getFullYear()} Rani Health Care. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
export default PublicFooter;
