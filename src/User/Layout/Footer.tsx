import React from "react";

const Footer :React.FC = () =>{
return (
    <footer className="bg-dark bg-cover" style={{backgroundImage: 'url(./assets/img/patterns/pattern-2.svg)'}}>
      <div className="py-12 border-bottom border-gray-700">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h5 className="mb-7 text-center text-white">
                Want style Ideas and Treats?
              </h5>

              <form className="mb-11">
                <div className="row gx-5 align-items-start">
                  <div className="col">
                    <input type="email" className="form-control form-control-gray-700 form-control-lg" placeholder="Enter Email *"/>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-gray-500 btn-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <h4 className="mb-6 text-white">Shopper.</h4>

              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <svg className="svg-inline--fa fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg> <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <svg className="svg-inline--fa fa-youtube" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"></path></svg> <i className="fab fa-youtube"></i> 
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <svg className="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg> <i className="fab fa-twitter"></i> 
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <svg className="svg-inline--fa fa-instagram" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><i className="fab fa-instagram"></i> 
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <svg className="svg-inline--fa fa-medium" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M180.5 74.26C80.81 74.26 0 155.6 0 256S80.82 437.7 180.5 437.7 361 356.4 361 256 280.2 74.26 180.5 74.26zm288.3 10.65c-49.85 0-90.25 76.62-90.25 171.1s40.41 171.1 90.25 171.1 90.25-76.62 90.25-171.1H559C559 161.5 518.6 84.91 468.8 84.91zm139.5 17.82c-17.53 0-31.74 68.63-31.74 153.3s14.2 153.3 31.74 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"></path></svg>
                     <i className="fab fa-medium"></i> 
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              <h6 className="heading-xxs mb-4 text-white">Support</h6>

              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a className="text-gray-300" href="./contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./faq.html">FAQs</a>
                </li>
                <li>
                  <a className="text-gray-300" data-bs-toggle="modal" href="#modalSizeChart">Size Guide</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              <h6 className="heading-xxs mb-4 text-white">Shop</h6>

              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a className="text-gray-300" href="./shop.html">Men's Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Women's Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Kids' Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Discounts</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              <h6 className="heading-xxs mb-4 text-white">Company</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href="./about.html">Our Story</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Careers</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Privacy &amp; Cookie policy</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              <h6 className="heading-xxs mb-4 text-white">Contact</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href="#!">1-202-555-0105</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">1-202-555-0106</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">help@shopper.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-auto d-flex justity-content-center">
              <img className="footer-payment" src="./assets/img/payment/mastercard.svg" alt="..."/>
              <img className="footer-payment" src="./assets/img/payment/visa.svg" alt="..."/>
              <img className="footer-payment" src="./assets/img/payment/amex.svg" alt="..."/>
              <img className="footer-payment" src="./assets/img/payment/paypal.svg" alt="..."/>
              <img className="footer-payment" src="./assets/img/payment/maestro.svg" alt="..."/>
              <img className="footer-payment" src="./assets/img/payment/klarna.svg" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </footer>
)
}
export default Footer