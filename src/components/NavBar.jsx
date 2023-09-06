function NavBar() {
    // const navbar = document.querySelector(".nav-list");
    // const navToggleButton = document.querySelector(".mobile-nav-toggle");

    // navToggleButton.addEventListener('click', () => {
    //     const visibility = navbar.getAttribute("data-visible");
    //     const open = navToggleButton.getAttribute("open");
    //     if (visibility === "false") {
    //         visibility = navbar.setAttribute("data-visible", true);
    //     } else {
    //         visibility = navbar.setAttribute("data-visible", false);
    //     }

    // })
    // <nav className="navbar flex">
    //     <div>
    //         <p className="logo">iFio¨̮ </p>
    //     </div>
    //     <button className="mobile-nav-toggle" aria-controls="nav-list"></button>
    //     <ul id="nav-list" data-visible="false" className="nav-list flex">
    //         <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
    //         <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
    //         <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
    //         <li className="nav-item"><a className="nav-link" href="#"> <image href="../public/add-to-cart-trolley-shopping-svgrepo-com.svg" /> </a></li>
    //     </ul>
    // </nav>

    return <nav className="flex items-center justify-between flex-wrap bg-indigo-100 p-4 gap-1">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6 gap-1">
            <span className="font-semibold text-lg tracking-normal mr-0">iFio</span>
            <svg className="fill-current h-6 w-6" width="800px" height="800px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml: space="preserve">
                <path fill="rgb(17 24 39 / var(--tw-text-opacity))" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 24.9015,43.0378L 25.0963,43.4298C 26.1685,49.5853 31.5377,54.2651 38,54.2651C 44.4623,54.2651 49.8315,49.5854 50.9037,43.4299L 51.0985,43.0379C 51.0985,40.7643 52.6921,39.2955 54.9656,39.2955C 56.9428,39.2955 58.1863,41.1792 58.5833,43.0379C 57.6384,52.7654 47.9756,61.75 38,61.75C 28.0244,61.75 18.3616,52.7654 17.4167,43.0378C 17.8137,41.1792 19.0572,39.2954 21.0344,39.2954C 23.3079,39.2954 24.9015,40.7643 24.9015,43.0378 Z M 26.7727,20.5833C 29.8731,20.5833 32.3864,23.0966 32.3864,26.197C 32.3864,29.2973 29.8731,31.8106 26.7727,31.8106C 23.6724,31.8106 21.1591,29.2973 21.1591,26.197C 21.1591,23.0966 23.6724,20.5833 26.7727,20.5833 Z M 49.2273,20.5833C 52.3276,20.5833 54.8409,23.0966 54.8409,26.197C 54.8409,29.2973 52.3276,31.8106 49.2273,31.8106C 46.127,31.8106 43.6136,29.2973 43.6136,26.197C 43.6136,23.0966 46.127,20.5833 49.2273,20.5833 Z " />
            </svg>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-800 border-indigo-800 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-indigo-600 mr-4" href="#">Home</a>
                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-indigo-600 mr-4" href="#">Products</a>
                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-indigo-600 mr-4" href="#">Home 2</a>
            </div>
        </div>
    </nav>
}

export default NavBar;