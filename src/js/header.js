class Header {
  static headerFunc() {
    const headerSection = document.createElement('header');
    headerSection.className = 'header sticky-top';
    headerSection.innerHTML = `
        <nav class="navbar navbar-expand-md bg-light justify-content-between ">
          <a class="navbar-brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              style="width:30px; height:30px;"
            >
              <path
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"
                style="fill:#ffc0cb;"
              />
            </svg>

            <span class="text-success">Foo</span><span class="text-warning">D</span
            ><span class="text-info">elicious</span>
          </a>
          <button
            class="navbar-toggler collapse_button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon c_pink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 504c136.967 0 248-111.033 248-248S392.967 8 256 8 8 119.033 8 256s111.033 248 248 248zm-103.398-76.72l53.411-53.411c31.806 13.506 68.128 13.522 99.974 0l53.411 53.411c-63.217 38.319-143.579 38.319-206.796 0zM336 256c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zm91.28 103.398l-53.411-53.411c13.505-31.806 13.522-68.128 0-99.974l53.411-53.411c38.319 63.217 38.319 143.579 0 206.796zM359.397 84.72l-53.411 53.411c-31.806-13.505-68.128-13.522-99.973 0L152.602 84.72c63.217-38.319 143.579-38.319 206.795 0zM84.72 152.602l53.411 53.411c-13.506 31.806-13.522 68.128 0 99.974L84.72 359.398c-38.319-63.217-38.319-143.579 0-206.796z"
                  style="fill: pink"
                />
              </svg>
            </span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav nav-tabs tabUl navbarNav">
              <li class="nav-item">
                <a class="nav-link aLink" href="#" data-target="home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link aLink" href="#" data-target="about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link aLink" href="#" data-target="menu">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link aLink" href="#" data-target="contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
       `;
    return headerSection;
  }
}

export default Header;
