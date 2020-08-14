class Menu {
  static menuFunc() {
    const menuSection = document.createElement('section');
    menuSection.className = 'section ourMenuSection mb_10';
    menuSection.id = 'menu';
    menuSection.innerHTML = `
          <h3 class="ta_center">Our Menu</h3>
          <div class="row foodContainer">
            <h4 class="col-12 p_10 text-warning">Healthy Foods</h4>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food18.png"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Spicy Spag & Fish</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food19.png"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Chicken, veg & potato</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$45</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food9.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Garnish bread & sauce</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$50</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food20.png"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Fish & Sauce</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$20</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food1.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Veg macaroni</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/food7.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Hamburger with chips & sauce</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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
          <div class="row foodContainer">
            <h4 class="col-12 p_10 text-warning">Fruits</h4>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit2.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Apples</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit3.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Oranges</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$45</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit4.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Watermelon</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$50</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit5.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Banana</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
              >
                <div>
                  <span>$20</span>
                </div>
                <div>
                  <button class="btn btn-dark btn-sm td_none tt_cap c_w foodBtn d_ib">
                    Order now
                  </button>
                </div>
              </div>
            </article>
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit6.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Grapes</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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
            <article class="card menuCard position-relative o_h c_p col-lg-4 col-md-4 col-sm-6">
              <img
                src="../assets/images/fruit1.jpg"
                class="card-img-top"
                style="height: 100%;"
                alt="food"
              />
              <div class="foodImgText c_pw position-absolute ta_center">
                <h5 class="mb_10">Fruit mix</h5>
              </div>
              <div
                class="imgFooter c_pw d_flex justify-content-between w_full position-absolute l_0 b_0 p_10"
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

       `;
    // </section>
    return menuSection;
  }
}

export default Menu;
