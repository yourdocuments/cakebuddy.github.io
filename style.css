/* =========================
   CAKES BUDDY - STYLE.CSS
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fffaf8;
    color: #4b210c;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    display: block;
}

button,
input,
textarea,
select {
    font-family: inherit;
}

:root {
    --brown: #4b210c;
    --dark-brown: #321507;
    --pink: #d9577c;
    --light-pink: #ffe5ed;
    --cream: #fffaf8;
    --white: #ffffff;
    --muted: #806d65;
    --border: #ecd9df;
}


/* =========================
   HEADER
========================= */

header {
    position: sticky;
    top: 0;
    z-index: 9999;
    background: rgba(255, 255, 255, 0.97);
    border-bottom: 1px solid #f0dfe3;
    box-shadow: 0 3px 18px rgba(0, 0, 0, 0.06);
}

.header-inner {
    width: 94%;
    max-width: 1280px;
    min-height: 82px;
    margin: auto;

    display: flex;
    align-items: center;
    gap: 20px;
}


/* =========================
   LOGO
========================= */

.logo-area {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.logo {
    width: 64px;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    background: #fff;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logo-name {
    font-family: Georgia, serif;
    font-size: 24px;
    font-weight: bold;
    white-space: nowrap;
    color: var(--brown);
}


/* =========================
   SEARCH
========================= */

.search-wrapper {
    position: relative;
    margin-left: auto;
}

.search {
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    gap: 7px;

    padding: 10px 14px;
    border-radius: 25px;

    color: var(--brown);
    cursor: pointer;

    font-size: 14px;
    font-weight: 700;

    transition: 0.25s;
}

.search:hover {
    background: var(--light-pink);
}

.search-icon {
    font-size: 21px;
}


/* =========================
   SEARCH DROPDOWN
========================= */

.search-dropdown {
    position: absolute;

    top: 54px;
    right: 0;

    width: 320px;

    background: #fff;

    border: 1px solid var(--border);
    border-radius: 18px;

    box-shadow: 0 18px 45px rgba(75, 33, 12, 0.16);

    overflow: hidden;

    opacity: 0;
    visibility: hidden;

    transform: translateY(-8px);

    transition: 0.25s;

    z-index: 99999;
}

.search-dropdown.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.search-input {
    display: flex;
    align-items: center;
    gap: 9px;

    padding: 14px;

    background: #fffaf8;

    border-bottom: 1px solid #f0dfe3;
}

.search-input span {
    font-size: 20px;
    color: var(--pink);
}

.search-input input {
    width: 100%;

    border: 0;
    outline: 0;

    background: transparent;

    color: var(--brown);
    font-size: 14px;
}

.search-input input::placeholder {
    color: #a89791;
}

.search-list {
    max-height: 310px;
    overflow-y: auto;
}

.search-item {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 14px 17px;

    border-bottom: 1px solid #f4e7ea;

    color: var(--brown);

    font-size: 14px;
    font-weight: 700;

    transition: 0.2s;
}

.search-item:hover {
    background: var(--light-pink);
    color: var(--pink);
    padding-left: 23px;
}

.search-item-icon {
    font-size: 19px;
}

.no-result {
    display: none;
    padding: 22px;
    text-align: center;
    color: var(--muted);
}


/* =========================
   NAVIGATION
========================= */

nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

nav a {
    color: var(--brown);

    font-size: 14px;
    font-weight: 700;

    white-space: nowrap;

    transition: 0.25s;
}

nav a:hover {
    color: var(--pink);
}

nav .shop {
    color: var(--pink);
}


/* =========================
   ORDER BUTTON
========================= */

.order-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 13px 21px;

    background: var(--brown);
    color: white;

    border-radius: 30px;

    font-size: 14px;
    font-weight: 800;

    white-space: nowrap;

    transition: 0.3s;
}

.order-btn:hover {
    background: var(--dark-brown);
    transform: translateY(-2px);
}


/* =========================
   MOBILE MENU
========================= */

.menu-btn {
    display: none;

    width: 45px;
    height: 45px;

    border: none;
    border-radius: 12px;

    background: var(--light-pink);
    color: var(--brown);

    font-size: 23px;

    cursor: pointer;
}

.mobile-menu {
    display: none;

    position: absolute;

    top: 82px;
    left: 3%;
    right: 3%;

    padding: 10px;

    background: white;

    border-radius: 18px;

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.mobile-menu.active {
    display: block;
}

.mobile-menu a {
    display: block;

    padding: 15px;

    border-bottom: 1px solid #f1e3e6;

    font-weight: 700;
}

.mobile-menu a:last-child {
    border-bottom: none;
}

.mobile-order {
    margin-top: 7px;

    text-align: center;

    background: var(--brown);
    color: white !important;

    border-radius: 25px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: calc(100vh - 82px);

    display: flex;
    align-items: center;

    padding: 70px 0;

    background:
        radial-gradient(
            circle at 90% 10%,
            #ffd4e1 0,
            transparent 28%
        ),
        linear-gradient(
            135deg,
            #fff0f4,
            #fffaf8
        );
}

.container {
    width: 92%;
    max-width: 1200px;
    margin: auto;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 55px;

    align-items: center;
}

.badge {
    display: inline-block;

    padding: 9px 16px;

    background: var(--light-pink);
    color: #a23d5a;

    border-radius: 30px;

    font-size: 12px;
    font-weight: 900;

    margin-bottom: 20px;
}

.hero h1 {
    font-family: Georgia, serif;

    font-size: clamp(44px, 6vw, 78px);

    line-height: 1.03;

    margin-bottom: 22px;
}

.hero h1 span {
    color: var(--pink);
}

.hero p {
    max-width: 580px;

    color: var(--muted);

    font-size: 18px;

    line-height: 1.8;

    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 15px 25px;

    border-radius: 30px;

    font-weight: 800;

    transition: 0.3s;
}

.btn-primary {
    background: var(--brown);
    color: white;
}

.btn-primary:hover {
    background: var(--dark-brown);
    transform: translateY(-3px);
}

.btn-secondary {
    background: white;
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    background: var(--light-pink);
}

.hero-image {
    height: 530px;

    overflow: hidden;

    border-radius: 32px;

    box-shadow: 0 20px 50px rgba(75, 33, 12, 0.15);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* =========================
   SECTIONS
========================= */

section {
    padding: 90px 0;
}

.heading {
    max-width: 700px;

    text-align: center;

    margin: 0 auto 45px;
}

.heading small {
    color: var(--pink);

    font-size: 12px;
    font-weight: 900;

    letter-spacing: 2px;
}

.heading h2 {
    font-family: Georgia, serif;

    font-size: clamp(36px, 5vw, 52px);

    margin: 10px 0 13px;
}

.heading p {
    color: var(--muted);
    line-height: 1.7;
}


/* =========================
   CAKES
========================= */

.cakes {
    background: white;
}

.cake-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.cake-card {
    overflow: hidden;

    background: var(--cream);

    border: 1px solid var(--border);

    border-radius: 23px;

    transition: 0.35s;
}

.cake-card:hover {
    transform: translateY(-8px);

    box-shadow: 0 18px 45px rgba(75, 33, 12, 0.13);
}

.cake-img {
    height: 270px;
    overflow: hidden;
}

.cake-img img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: 0.5s;
}

.cake-card:hover .cake-img img {
    transform: scale(1.07);
}

.cake-content {
    padding: 22px;
}

.cake-content h3 {
    font-family: Georgia, serif;

    font-size: 24px;

    margin-bottom: 8px;
}

.cake-content p {
    color: var(--muted);

    font-size: 14px;

    line-height: 1.65;
}

.price {
    display: block;

    margin-top: 15px;

    color: var(--pink);

    font-size: 19px;

    font-weight: 900;
}


/* =========================
   ABOUT
========================= */

.about {
    background:
        linear-gradient(
            135deg,
            #ffe5ed,
            #fff5ef
        );
}

.about-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 55px;

    align-items: center;
}

.about-img {
    height: 480px;

    overflow: hidden;

    border-radius: 30px;

    box-shadow: 0 18px 45px rgba(75, 33, 12, 0.12);
}

.about-img img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.about-content small {
    color: var(--pink);

    font-weight: 900;

    letter-spacing: 2px;
}

.about-content h2 {
    font-family: Georgia, serif;

    font-size: clamp(38px, 5vw, 55px);

    line-height: 1.1;

    margin: 12px 0 20px;
}

.about-content p {
    color: var(--muted);

    line-height: 1.8;

    margin-bottom: 14px;
}


/* =========================
   WHY US
========================= */

.why-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;
}

.why-card {
    padding: 30px 20px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 20px;

    text-align: center;

    transition: 0.3s;
}

.why-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 15px 35px rgba(75, 33, 12, 0.1);
}

.why-icon {
    font-size: 40px;
    margin-bottom: 13px;
}

.why-card h3 {
    margin-bottom: 8px;
}

.why-card p {
    color: var(--muted);

    font-size: 14px;

    line-height: 1.6;
}


/* =========================
   ORDER
========================= */

.order {
    background: white;
}

.order-box {
    max-width: 850px;

    margin: auto;

    padding: 38px;

    background: #fff0f4;

    border-radius: 30px;
}

.order-form {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.full {
    grid-column: 1 / -1;
}

.form-group label {
    font-size: 13px;
    font-weight: 800;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    padding: 14px;

    border: 1px solid #e5cdd5;

    border-radius: 12px;

    background: white;

    color: var(--brown);

    font-size: 15px;

    outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--pink);

    box-shadow:
        0 0 0 3px rgba(217, 87, 124, 0.12);
}

.form-group textarea {
    min-height: 120px;
    resize: vertical;
}

.submit {
    width: 100%;

    border: none;

    padding: 15px;

    border-radius: 30px;

    background: var(--brown);

    color: white;

    font-size: 16px;

    font-weight: 800;

    cursor: pointer;

    transition: 0.3s;
}

.submit:hover {
    background: var(--dark-brown);
}


/* =========================
   CONTACT
========================= */

.contact {
    background: var(--brown);

    color: white;

    text-align: center;
}

.contact h2 {
    font-family: Georgia, serif;

    font-size: clamp(36px, 5vw, 48px);

    margin-bottom: 15px;
}

.contact p {
    color: #ead8d0;
    margin: 8px;
}

.contact a {
    color: white;
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 23px 15px;

    background: var(--dark-brown);

    color: #dec8bd;

    text-align: center;

    font-size: 13px;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1100px) {

    nav {
        gap: 13px;
    }

    nav a {
        font-size: 13px;
    }

    .cake-grid {
        grid-template-columns: 1fr 1fr;
    }

    .why-grid {
        grid-template-columns: 1fr 1fr;
    }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    .header-inner {
        min-height: 75px;
        justify-content: space-between;
    }

    .logo {
        width: 54px;
        height: 54px;
    }

    .logo-name {
        font-size: 21px;
    }

    .search-wrapper {
        display: none;
    }

    nav,
    .header-order {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .mobile-menu {
        top: 75px;
    }

    .hero {
        min-height: auto;
        padding: 55px 0;
    }

    .hero-grid {
        grid-template-columns: 1fr;

        text-align: center;

        gap: 40px;
    }

    .hero p {
        margin-left: auto;
        margin-right: auto;

        font-size: 16px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-image {
        height: 390px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-img {
        height: 390px;
    }

    .cake-grid {
        grid-template-columns: 1fr 1fr;
    }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 560px) {

    .container {
        width: 91%;
    }

    .header-inner {
        width: 92%;
    }

    .logo {
        width: 48px;
        height: 48px;
    }

    .logo-name {
        font-size: 19px;
    }

    .hero h1 {
        font-size: 43px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .hero-image {
        height: 320px;
        border-radius: 25px;
    }

    section {
        padding: 65px 0;
    }

    .cake-grid {
        grid-template-columns: 1fr;
    }

    .cake-img {
        height: 280px;
    }

    .why-grid {
        grid-template-columns: 1fr;
    }

    .about-img {
        height: 320px;
    }

    .order-box {
        padding: 22px 16px;
    }

    .order-form {
        grid-template-columns: 1fr;
    }

    .full {
        grid-column: auto;
    }
}


/* =========================
   VERY SMALL MOBILE
========================= */

@media (max-width: 370px) {

    .logo-name {
        font-size: 17px;
    }

    .logo {
        width: 44px;
        height: 44px;
    }

    .hero h1 {
        font-size: 38px;
    }
}
