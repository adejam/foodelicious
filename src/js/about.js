class About {
  static aboutFunc() {
    const aboutSection = document.createElement('div');
    aboutSection.innerHTML = `
           <section id="aboutSection" class="bg_white mt_10">
          <header class="about">
            <h2 class="tt_cap ta_center">About Us</h2>
            <p>
              <span class="text-success">Foo</span><span class="text-warning">D</span
              ><span class="text-info">elicious</span> Restaurant aims at making the best meals
              while also taking into account the health benefits of food to make a blend of food
              that is delicious and healthy for it's customers. Restaurant aims at making the best
              meals while also taking into account the health benefits of food to make a blend of
              food that is delicious and healthy for it's customers. Restaurant aims at making the
              best meals while also taking into account the health benefits of food to make a blend
              of food that is delicious and healthy for it's customers.<br />
              Restaurant aims at making the best meals while also taking into account the health
              benefits of food to make a blend of food that is delicious and healthy for it's
              customers. Restaurant aims at making the best meals while also taking into account the
              health benefits of food to make a blend of food that is delicious and healthy for it's
              customers. Restaurant aims at making the best meals while also taking into account the
              health benefits of food to make a blend of food that is delicious and healthy for it's
              customers.<br />
              The following categories of food are available at foodelicious:
            </p>
          </header>

          <div class="abouts row mt_10">
            <h3 class="tt_cap ta_center p_10 col-12">Categories</h3>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">Drinks</h2>
                <p class="about_info">
                  We offer quality drinks. We offer quality drinks. We offer quality drinks. We
                  offer quality drinks. We offer quality drinks. We offer quality drinks.
                </p>
              </div>
            </article>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512">
                    <path
                      d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">Healthy Foods</h2>
                <p class="about_info mt_10">
                  We offer quality healthy foods. We offer quality healthy foods. We offer quality
                  healthy foods. We offer quality healthy foods. We offer quality healthy foods.
                </p>
              </div>
            </article>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M501.54 60.91c17.22-17.22 12.51-46.25-9.27-57.14a35.696 35.696 0 0 0-37.37 3.37L251.09 160h151.37l99.08-99.09zM496 192H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c0 80.98 50.2 150.11 121.13 178.32-12.76 16.87-21.72 36.8-24.95 58.69-1.46 9.92 6.04 18.98 16.07 18.98h223.5c10.03 0 17.53-9.06 16.07-18.98-3.22-21.89-12.18-41.82-24.95-58.69C429.8 406.11 480 336.98 480 256h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">Organic Foods</h2>
                <p class="about_info">
                  We offer quality Organic Foods. We offer quality Organic Foods. We offer quality
                  Organic Foods. We offer quality Organic Foods. We offer quality Organic Foods.
                </p>
              </div>
            </article>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                      d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">White Meat</h2>
                <p class="about_info">
                  We offer quality white meats. We offer quality white meats. We offer quality white
                  meats. We offer quality white meats. We offer quality white meats.
                </p>
              </div>
            </article>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">Sea Foods</h2>
                <p class="about_info">
                  We offer quality sea foods. We offer quality sea foods. We offer quality sea
                  foods. We offer quality sea foods. We offer quality sea foods. We offer quality
                  sea foods.
                </p>
              </div>
            </article>
            <article class="about col-md-4 col-sm-6 d_flex">
              <div class="aboutIcon c_p">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M351.18 129.15c-35.53-6.25-98.06 14.36-127.18 30.81-29.12-16.45-91.66-37.07-127.19-30.81-81.24 14.3-107.42 124.49-93.09 205.6C18.05 415.86 65.02 512 160.41 512c12.06 0 24.12-4.61 34.44-10.34 18.08-10.03 40.23-10.03 58.31 0 10.32 5.73 22.38 10.34 34.43 10.34 95.39 0 142.36-96.14 156.68-177.25 14.33-81.11-11.83-191.3-93.09-205.6zm-55.55-41.53C326.19 57.06 319.35.65 319.35.65s-56.41-6.85-86.97 23.72c-30.57 30.57-23.72 86.97-23.72 86.97s56.4 6.85 86.97-23.72z"
                      style="fill: #ffc107;"
                    />
                  </svg>
                </span>
              </div>
              <div class="about_div">
                <h2 class="about_title c_p tt_cap text-warning">Fruits</h2>
                <p class="about_info">
                  We offer fresh ripe fruits. We offer fresh ripe fruits. We offer fresh ripe
                  fruits. We offer fresh ripe fruits. We offer fresh ripe fruits. We offer fresh
                  ripe fruits.
                </p>
              </div>
            </article>
          </div>
        </section>
       `;
    return aboutSection;
  }
}
export default About;
