class Contact {
  static contactFunc() {
    const contactSection = document.createElement('section');
    contactSection.className = 'section contactSection m_10';
    contactSection.id = 'contact';
    contactSection.innerHTML = `

          <div class="contactDiv row justify-content-center">
            <div class="col-md-6 col-sm-6 bg-light mapDiv  d_flex align-items-center p_10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.389528666557!2d3.393986552309733!3d6.572389872816451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b929bfe863fc9%3A0xb9de1638225d4f6!2s5%20Buari%20St%2C%20Ogudu%20100242%2C%20Lagos!5e0!3m2!1sen!2sng!4v1597143555428!5m2!1sen!2sng"
                style="border:0; width: 100%; min-height: 450px;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                class="map"
              ></iframe>
            </div>
            <div class="col-md-4 col-sm-6 border contactD p_10">
              <h3 class="ta_center p_10"><span class="bb_block">Contact Us</span></h3>
              <div class="bg_address c_pw">
                <div class="d_flex">
                  <div class="mr_10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      style="width:15px; height:15px;"
                    >
                      <path
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        style="fill: #ffc107"
                      />
                    </svg>
                  </div>
                  <div class="mb_10">
                    <h3 class="mb_10">Locate Us</h3>
                    <p>
                      15 Maryland Street,<br />
                      New York,<br />
                      USA.
                    </p>
                  </div>
                </div>
                <div class="d_flex">
                  <div class="mr_10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style="width:15px; height:15px;"
                    >
                      <path
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                        style="fill: #ffc107"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb_10">Open Hours</h3>
                    <p>
                      <strong class="name">Monday-Friday:</strong> 8am-9pm <br />
                      <strong class="name">Saturday-Sunday:</strong> 8am-7pm <br />
                    </p>
                  </div>
                </div>
                <div class="d_flex">
                  <div class="mr_10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style="width:15px; height:15px;"
                    >
                      <path
                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        style="fill: #ffc107"
                      />
                    </svg>
                  </div>
                  <div class="c_p">
                    <p>+234 809-8765-432</p>
                  </div>
                </div>
              </div>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control bt_none bl_none br_none"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control bt_none bl_none br_none"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control bt_none bl_none br_none"
                    id="number"
                    placeholder="Enter number"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Subject"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-warning btn-block">Submit</button>
              </form>
            </div>
          </div>

       `;
    // </section>
    return contactSection;
  }
}

export default Contact;
