import Image from "next/image";

export default function Footer() {
  return (
    <section>
      <section>
        <section>
          <h1>LizaMart</h1>

          <h3>Contact Us</h3>
          <ul>
            <li>
              <Image src={} width="50" height="50" alt="whatsapp logo" />
              <div>
                <p>Whatsapp</p>
                <p>+234 808 039 2216</p>
              </div>
            </li>

            <li>
              <Image src={} width="50" height="50" alt="Call logo" />
              <div>
                <p>Call Us</p>
                <p>+234 808 039 2216</p>
              </div>
            </li>
          </ul>
          <div>
            <h3>Download App</h3>
            <div>
              <Image
                src={}
                width="50"
                height="50"
                alt="App store download banner"
              />
              <div>
                <h5>
                  DOWNLOAD ON THE <br />
                  <span> App Store </span>
                </h5>
              </div>
            </div>
            <div>
              <Image
                src={}
                width="50"
                height="50"
                alt="Google play download banner"
              />
              <div>
                <h5>
                  GET IT ON <br />
                  <span> Gooogle Play </span>
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Most Popular Categories</h2>
          <ul>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Diary & Bakery</li>
          </ul>
        </section>
        <section>
          <h2>Customer Services</h2>
          <ul>
            <li>About us</li>
            <li>Terms & condition</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </section>
      </section>
      <p> &copyright; 2025 All rights reserved. Reliance Retail Ltd.</p>
    </section>
  );
}
