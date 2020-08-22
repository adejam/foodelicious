class Home {
  static homeFunc() {
    const homeSection = document.createElement('div');
    homeSection.className = 'section';
    homeSection.id = 'home';
    homeSection.innerHTML = `
           <section class="title d_flex justify-content-center align-items-center c_pw">
          <div class="quote_div">
            <h3 class="tt_upper quote_div_h3">Food at it's best!</h3>
            <h1 class="mb_10 pb_10">Food is not just eating energy. It's an experience</h1>
          </div>
          <button class="btn btn-outline-warning d_ib br_200 mt_10 tt_upper pulsate">
            Reservation
          </button>
        </section>
        <section id="foodSection" class="bg_white foodSection">
          <h3 class="ta_center">Recommended for you Today</h3>
          <div class="row foodContainer justify-content-around">
            <article
              class="card foodCard c_pw position-relative o_h c_p col-lg-3 col-md-3 col-sm-5"
            >
              <img src="../assets/images/food18.png" class="card-img-top foodImg" alt="food" />
              <div class="foodImgText position-absolute ta_center">
                <h3 class="mb_10">Breakfast</h3>
              </div>
              <div
                class="imgFooter d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$35</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article
              class="card foodCard c_pw position-relative o_h c_p col-lg-3 col-md-3 col-sm-5"
            >
              <img src="../assets/images/food19.png" class="card-img-top foodImg" alt="food" />
              <div class="foodImgText position-absolute ta_center">
                <h3 class="mb_10">Lunch</h3>
              </div>
              <div
                class="imgFooter d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$35</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article
              class="card foodCard c_pw position-relative o_h c_p col-lg-3 col-md-3 col-sm-5"
            >
              <img src="../assets/images/food12.png" class="card-img-top foodImg" alt="food" />
              <div class="foodImgText position-absolute ta_center">
                <h3 class="mb_10">Dinner</h3>
              </div>
              <div
                class="imgFooter d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$35</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="menu" class="menu bg-warning">
          <h2 class="d-none">address</h2>
          <article class="menu_image c_pw">
            <div class="bg_address">
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
          </article>
          <article class="menu_text ">
            <div class="menu_text_div">
              <h2 class="tt_upper mb_10">Our Menu</h2>
              <p class="menu_p">
                We sell quality foods,which includes We sell quality foods,which includes We sell
                quality foods,which includes We sell quality foods,which includes We sell quality
                foods,which includes
              </p>
              <a href="#" class="menu_a d_ib br_200 tt_upper text-warning shadow">Explore</a>
            </div>
          </article>
        </section>
       `;
    return homeSection;
  }
}
export default Home;
