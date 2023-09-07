<!DOCTYPE html>
<html lang="ru">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Сафа</title>
  <meta property="og:title" content="Сафа">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://api-maps.yandex.ru/2.1/?apikey=6be3bf7a-5635-45f5-8d7f-ee0ef3913e00&lang=ru_RU" type="text/javascript"></script>
</head>

<body>

  

  

<div class="wrapper">

    <header class="header">
  <div class="container header__container">
    <div class="header__burger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>

    <div class="header__logo">
      <img src="./img/common/logo.svg" alt="" class="header__logo-img">
    </div>



    <div class="header__contacts">
      <div class="header__contacts-ico">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.4302 6.65303L10.9494 7.58338C11.4179 8.42296 11.2298 9.52435 10.4919 10.2623C10.4919 10.2623 10.4919 10.2623 10.4919 10.2623C10.4917 10.2625 9.59682 11.1576 11.2197 12.7805C12.8419 14.4027 13.737 13.5091 13.7379 13.5083C13.7379 13.5083 13.7379 13.5083 13.7379 13.5083C14.4759 12.7703 15.5772 12.5823 16.4168 13.0508L17.3472 13.57C18.6149 14.2776 18.7647 16.0555 17.6503 17.1699C16.9807 17.8395 16.1604 18.3605 15.2536 18.3949C13.7271 18.4527 11.1347 18.0664 8.53426 15.4659C5.9338 12.8655 5.54747 10.2731 5.60534 8.74657C5.63972 7.83978 6.16074 7.01949 6.83034 6.34988C7.9447 5.23552 9.72264 5.38525 10.4302 6.65303Z" fill="#004293"/>
          <path d="M13.0076 3.90401C13.0605 3.5769 13.3698 3.355 13.6969 3.40796C13.7171 3.41183 13.7823 3.42401 13.8164 3.43161C13.8847 3.44681 13.9799 3.47022 14.0986 3.5048C14.3361 3.57396 14.6677 3.68788 15.0658 3.87039C15.8629 4.23579 16.9235 4.875 18.0241 5.97564C19.1248 7.07628 19.764 8.13693 20.1294 8.93395C20.3119 9.33204 20.4258 9.66372 20.495 9.90115C20.5296 10.0199 20.553 10.1151 20.5682 10.1834C20.5758 10.2175 20.5813 10.2449 20.5852 10.2651L20.5898 10.2901C20.6428 10.6172 20.4229 10.9392 20.0958 10.9922C19.7696 11.045 19.4623 10.8242 19.4081 10.4986C19.4064 10.4899 19.4018 10.4664 19.3969 10.4442C19.387 10.3999 19.3699 10.3296 19.3429 10.2367C19.2887 10.0509 19.1947 9.77459 19.0386 9.43405C18.7267 8.7538 18.1659 7.81445 17.1756 6.82417C16.1853 5.83388 15.246 5.27308 14.5657 4.96121C14.2252 4.80509 13.9489 4.71106 13.7631 4.65692C13.6701 4.62986 13.5533 4.60305 13.509 4.59318C13.1834 4.53893 12.9548 4.23019 13.0076 3.90401Z" fill="#1C274C"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1886 6.66358C13.2796 6.34496 13.6117 6.16047 13.9303 6.2515L13.7655 6.82842C13.9303 6.2515 13.9303 6.2515 13.9303 6.2515L13.9315 6.25183L13.9327 6.25219L13.9354 6.25297L13.9416 6.25482L13.9574 6.25975C13.9695 6.26361 13.9845 6.26863 14.0025 6.275C14.0384 6.28775 14.0859 6.30588 14.1442 6.33085C14.2607 6.3808 14.42 6.45793 14.6156 6.5737C15.0071 6.80545 15.5417 7.19039 16.1697 7.81837C16.7976 8.44634 17.1826 8.98089 17.4143 9.37246C17.5301 9.56807 17.6072 9.72732 17.6572 9.84387C17.6821 9.90212 17.7003 9.9496 17.713 9.98553C17.7194 10.0035 17.7244 10.0186 17.7283 10.0306L17.7332 10.0464L17.7351 10.0527L17.7358 10.0553L17.7362 10.0565C17.7362 10.0565 17.7365 10.0577 17.1596 10.2225L17.7365 10.0577C17.8276 10.3763 17.6431 10.7084 17.3244 10.7994C17.0085 10.8897 16.6794 10.7091 16.5851 10.3954L16.5821 10.3868C16.5779 10.3748 16.569 10.3511 16.5542 10.3166C16.5246 10.2475 16.4709 10.1345 16.3816 9.98365C16.2033 9.68226 15.8811 9.22686 15.3211 8.66689C14.7612 8.10693 14.3058 7.78477 14.0044 7.60639C13.8535 7.5171 13.7405 7.46342 13.6715 7.43382C13.6369 7.41901 13.6132 7.41018 13.6012 7.40592L13.5926 7.40296C13.2789 7.30866 13.0983 6.9795 13.1886 6.66358Z" fill="#1C274C"/>
        </svg>
      </div>
      <div class="header__contacts-text">
        <a href="#" class="header__contacts-num">8 (800) 123-45-67</a>
        <div class="header__contacts-time">с&nbsp;8:00&nbsp;&mdash; 20:00</div>
      </div>
    </div>
    <div class="nav active animate__animated">
      <ul class="nav__list">
        <li class="nav__list-item dropdown">
          <div class="nav__list-item-link dropdown-btn-text">Услуги</div>  
          <div class="dropdown-skin">
            <div class="dropdown-skin-first">
              <div class="dropdown-skin-item">
                <div class="dropdown-skin-item-text">Одежда</div>
                <div class="dropdown-skin-item-list">
                  <a href="#">Деловая-1</a>
                  <a href="#">Повседневная</a>
                  <a href="#">Торжественная</a>
                  <a href="#">Верхняя</a>
                  <a href="#">Детская</a>
                  <a href="#">Домашняя</a>
                  <a href="#">Спортивная</a>
                  <a href="#">Форменная</a>
                </div>
              </div>
              <div class="dropdown-skin-item">
                <div class="dropdown-skin-item-text">Аксессуары</div>
                <div class="dropdown-skin-item-list">
                  <a href="#">Деловая-2</a>
                  <a href="#">Повседневная</a>
                  <a href="#">Торжественная</a>
                  <a href="#">Верхняя</a>
                  <a href="#">Детская</a>
                  <a href="#">Домашняя</a>
                  <a href="#">Спортивная</a>
                  <a href="#">Форменная</a>
                </div>
              </div>
              <div class="dropdown-skin-item">
                <div class="dropdown-skin-item-text">Домашний интерьер</div>
                <div class="dropdown-skin-item-list">
                  <a href="#">Деловая-3</a>
                  <a href="#">Повседневная</a>
                  <a href="#">Торжественная</a>
                  <a href="#">Верхняя</a>
                  <a href="#">Детская</a>
                  <a href="#">Домашняя</a>
                  <a href="#">Спортивная</a>
                  <a href="#">Форменная</a>
                  </div>
              </div>
              <div class="dropdown-skin-item">
                <div class="dropdown-skin-item-text">Обувь</div>
                <div class="dropdown-skin-item-list">
                  <a href="#">Деловая-4</a>
                  <a href="#">Повседневная</a>
                  <a href="#">Торжественная</a>
                  <a href="#">Верхняя</a>
                  <a href="#">Детская</a>
                  <a href="#">Домашняя</a>
                  <a href="#">Спортивная</a>
                  <a href="#">Форменная</a>
                </div>
              </div>
              <div class="dropdown-skin-item">
                <div class="dropdown-skin-item-text">Особые услуги</div>
                <div class="dropdown-skin-item-list">
                  <a href="#">Деловая-5</a>
                  <a href="#">Повседневная</a>
                  <a href="#">Торжественная</a>
                  <a href="#">Верхняя</a>
                  <a href="#">Детская</a>
                  <a href="#">Домашняя</a>
                  <a href="#">Спортивная</a>
                  <a href="#">Форменная</a>
                </div>
              </div>
            </div>
            <div class="dropdown-skin-second"></div>
          </div>
        </li>
        <div class="nav__list-hr"></div>
        <li class="nav__list-item">
          <a href="" class="nav__list-item-link">Акции</a>
        </li>
        <div class="nav__list-hr"></div>
        <li class="nav__list-item">
          <a href="" class="nav__list-item-link">Магазин</a>
        </li>
        <div class="nav__list-hr"></div>
        <li class="nav__list-item">
          <a href="" class="nav__list-item-link">О компании</a>
        </li>
        <div class="nav__list-hr"></div>
        <li class="nav__list-item">
          <a href="" class="nav__list-item-link">Контакты</a>
        </li>
      </ul>
    </div>
    <a href="#form-section" class="header__button btn-w">
      <div class="header__button-text btn-txt">
        Заказать on-line <br>
        <span>заберём за&nbsp;три часа</span>
      </div>
      <div class="header__button-ico btn-ico">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="#004293">
          <path d="M16.5579 10.6823L17.3655 12.1295C18.0944 13.4356 17.8018 15.1488 16.6539 16.2968C16.6538 16.2968 16.6538 16.2968 16.6538 16.2968C16.6537 16.2969 15.2615 17.6894 17.7861 20.2139C20.3099 22.7378 21.7024 21.3469 21.7032 21.3461C21.7032 21.3461 21.7032 21.3461 21.7032 21.3461C22.8512 20.1982 24.5644 19.9056 25.8704 20.6344L27.3176 21.4421C29.2898 22.5427 29.5227 25.3084 27.7892 27.0418C26.7476 28.0834 25.4716 28.8939 24.061 28.9474C21.6865 29.0374 17.6538 28.4365 13.6087 24.3913C9.56353 20.3461 8.96257 16.3135 9.05259 13.9389C9.10606 12.5284 9.91654 11.2524 10.9581 10.2108C12.6916 8.47732 15.4573 8.71022 16.5579 10.6823Z" fill="#004293"></path>
        </svg>
      </div>
    </a>
    <a href="#" class="header__busket">
      <div class="header__busket-ico">
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <path d="M8.7546 8.83656C8.12587 8.62699 7.44629 8.96678 7.23671 9.59551C7.02713 10.2242 7.36692 10.9038 7.99566 11.1134L8.41951 11.2547C9.50177 11.6154 10.2173 11.8559 10.7444 12.1011C11.2435 12.3333 11.4593 12.5202 11.5976 12.712C11.7359 12.9038 11.8449 13.1677 11.9074 13.7146C11.9733 14.2922 11.9751 15.047 11.9751 16.1878L11.9751 20.4628C11.9751 22.6509 11.9751 24.4146 12.1616 25.8018C12.3552 27.242 12.7694 28.4546 13.7325 29.4176C14.6956 30.3807 15.9082 30.7949 17.3483 30.9885C18.7355 31.175 20.4992 31.175 22.6873 31.175H33.9751C34.6379 31.175 35.1751 30.6377 35.1751 29.975C35.1751 29.3122 34.6379 28.775 33.9751 28.775H22.7751C20.4785 28.775 18.8767 28.7724 17.6681 28.6099C16.4941 28.4521 15.8724 28.1634 15.4295 27.7206C15.0532 27.3443 14.7882 26.8388 14.6202 25.975H30.8104C32.3454 25.975 33.113 25.975 33.7141 25.5786C34.3152 25.1822 34.6176 24.4767 35.2223 23.0658L35.908 21.4658C37.2032 18.4437 37.8508 16.9326 37.1394 15.8538C36.428 14.775 34.7841 14.775 31.4961 14.775H14.3672C14.3578 14.2827 14.3371 13.8385 14.2919 13.4424C14.2033 12.6667 14.0103 11.9549 13.5446 11.3087C13.0788 10.6625 12.4646 10.2543 11.7567 9.92502C11.0907 9.61521 10.2438 9.33293 9.24163 8.9989L8.7546 8.83656Z" fill="white"/>
          <path d="M17.1748 33.975C18.5003 33.975 19.5748 35.0496 19.5748 36.375C19.5748 37.7005 18.5003 38.775 17.1748 38.775C15.8493 38.775 14.7748 37.7005 14.7748 36.375C14.7748 35.0496 15.8493 33.975 17.1748 33.975Z" fill="white"/>
          <path d="M31.5748 33.9752C32.9003 33.9752 33.9748 35.0497 33.9748 36.3752C33.9748 37.7006 32.9003 38.7752 31.5748 38.7752C30.2493 38.7752 29.1748 37.7006 29.1748 36.3752C29.1748 35.0497 30.2493 33.9752 31.5748 33.9752Z" fill="white"/>
        </svg>
      </div>
      <div class="header__busket-counter">99</div>
    </a>
  </div>
</header>
    
<section class="main">
<div class="bubble-container-1">
      <!-- Пустой контейнер для пузырей -->
</div>
  <div class="container">
    <div class="main__box ">
      <div class="main__box-counter">
        2
      </div>
      
      <div class="main__box-counter-second">
        2<span>/5</span>
      </div>

      <div class="swiper-nav-box">
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination">
        </div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="main__box-content">
        <div class="main__title">Срочная химчистка! Заберем на&nbsp;3&nbsp;часа!</div>
        <div class="swiper main-swiper">
          <div class="main__textbox swiper-wrapper">
            <div class="swiper-slide main__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</div>
            <div class="swiper-slide main__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur&nbsp;ab, iusto atque sequi earum maxime rerum obcaecati odio tempora dolore! Unde reiciendis totam provident fugit ducimus voluptates molestiae mollitia vel.</div>
            <div class="swiper-slide main__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quasi, esse, iste et&nbsp;maxime omnis obcaecati cum ducimus, itaque suscipit voluptatibus illo dolor. Quod inventore similique debitis aperiam nulla.</div>
            <div class="swiper-slide main__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut&nbsp;molestiae sint dolorem et&nbsp;quidem cumque voluptatum quae, fugiat hic repudiandae, ad&nbsp;esse eum praesentium doloribus, ea&nbsp;optio minus nulla?</div>
          </div>
        </div>
        <a href="#fancyform" data-fancybox class="main-btn btn-b">
          <div class="main-btn__text btn-txt">Вызвать курьера</div>

          <div class="btn-ico">
          <svg class="main-btn__ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31831C7.23882 2.00913 7.79998 2.05091 8.11946 2.41162L15.2306 10.4403C15.5159 10.7624 15.5159 11.2378 15.2306 11.5599L8.11946 19.5886C7.79998 19.9493 7.23882 19.9911 6.86609 19.6819C6.49335 19.3727 6.45019 18.8296 6.76967 18.4689L13.2223 11L6.76967 3.53125C6.45019 3.17054 6.49335 2.62749 6.86609 2.31831Z" fill="white"/>
          </svg>
          </div>
       
        </a>
      </div>
      <div class="main__box-pic">
        <img src="img/main/main-man.png" alt="" class="main__box-pic-img">
      </div>
    </div>
  </div>
</section>
    <section class="about">
    <div class="container">
        <div class="about__box">
            <img src="./img/about/woman.png" alt="" class="about__img">
            <div class="about__info">
                <div class="about__info-subtitle">Наши преимущества</div>
                <div class="about__info-title">Находим <span class="emphasized">решения</span> для любой задачи</div>

                <div class="about__info-text">
                    Компьютер стал неотъемлемой частью жизни человека. Это обязательный инструмент развития человека. Каждая большая и&nbsp;малая промышленность компьютеризирована. Компьютеры выполнять свою работу эффективно, быстро и&nbsp;продуктивно. Без сомнений, они сделали нашу жизнь намного легче.
                    <br>Интересно, что первый компьютер был размером с&nbsp;микроавтобус и&nbsp;весил почти тонну. В&nbsp;то&nbsp;время как сейчас это может быть маленький чип размером с&nbsp;булавку. И&nbsp;компьютерные технологии не&nbsp;стоят на&nbsp;месте, она быстро прогрессируют.
                    <ul class="about__info-text-list">
                        <li>Индивидуальное предложение учитывающее особенности Вашего бизнеса</li>
                        <li>Полный комплекс профессиональных услуг</li>
                        <li>Собственная логистическая служба</li>
                    </ul>
                </div>

                <a href="#" class="about__info-btn btn-b fancylink">
                    <div class="btn-txt">Скачать прайс</div>
                    <svg class="about__info-btn-ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11.3938 14.2043C11.2928 14.3148 11.15 14.3778 11.0002 14.3778C10.8505 14.3778 10.7077 14.3148 10.6066 14.2043L7.76217 11.0932C7.56341 10.8758 7.57852 10.5385 7.79591 10.3397C8.0133 10.1409 8.35065 10.1561 8.5494 10.3734L10.4669 12.4707V4.59998C10.4669 4.30543 10.7057 4.06665 11.0002 4.06665C11.2948 4.06665 11.5336 4.30543 11.5336 4.59998V12.4707L13.4511 10.3734C13.6498 10.1561 13.9872 10.1409 14.2046 10.3397C14.4219 10.5385 14.437 10.8758 14.2383 11.0932L11.3938 14.2043Z" fill="white"/>
                        <path d="M5.13356 13.1333C5.13356 12.8388 4.89478 12.6 4.60023 12.6C4.30568 12.6 4.06689 12.8388 4.06689 13.1333V13.1723C4.06688 14.1448 4.06687 14.9287 4.14976 15.5452C4.23581 16.1853 4.41991 16.7242 4.84794 17.1523C5.27597 17.5803 5.81491 17.7644 6.45498 17.8505C7.07149 17.9333 7.85537 17.9333 8.82788 17.9333H13.1726C14.1451 17.9333 14.929 17.9333 15.5455 17.8505C16.1856 17.7644 16.7245 17.5803 17.1525 17.1523C17.5805 16.7242 17.7646 16.1853 17.8507 15.5452C17.9336 14.9287 17.9336 14.1448 17.9336 13.1723V13.1333C17.9336 12.8388 17.6948 12.6 17.4002 12.6C17.1057 12.6 16.8669 12.8388 16.8669 13.1333C16.8669 14.1541 16.8658 14.866 16.7935 15.4031C16.7234 15.9249 16.5951 16.2012 16.3983 16.398C16.2015 16.5948 15.9251 16.7231 15.4033 16.7933C14.8662 16.8655 14.1543 16.8667 13.1336 16.8667H8.8669C7.84616 16.8667 7.13425 16.8655 6.59711 16.7933C6.07532 16.7231 5.799 16.5948 5.60219 16.398C5.40538 16.2012 5.27706 15.9249 5.20691 15.4031C5.13469 14.866 5.13356 14.1541 5.13356 13.1333Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
    <section class="info">
    <div class="container">
         <div class="info__box">
            <div class="info__cirlce">
                <h2 class="info__title">
                    Профессиональное обслуживание <span class="emphasized">Вашего</span> бизнеса
                </h2>
            </div>   
           


          
            <div class="info__circles">
                <div class="info__circles-circle">
                    <img src="./img/info/icon-info-1.svg" alt="">
                    <div class="info__text">Совеременные технологии</div>
                </div>

                <div class="info__circles-circle">
                    <img src="./img/info/icon-info-2.svg" alt="">
                    <div class="info__text">Безупречное качество</div>
                </div>

                <div class="info__circles-circle">
                    <img src="./img/info/icon-info-3.svg" alt="">
                    <div class="info__text">Нам доверяют</div>
                </div>

                <div class="info__circles-circle">
                    <img src="./img/info/icon-info-4.svg" alt="">
                    <div class="info__text">Срочные заказы</div>
                </div>
            </div>

         </div>
    </div>
</section>
    <section class="service">
    <div class="container service__container">
        <div class="service__box">
            <div class="service__box-titles">
                <span class="service__box-titles-subtitle">Хит!</span>
                <h3 class="service__box-titles-title">Выездной <span>сервис</span></h3> 
            </div>
            <div class="service__box-text">
                Как оформить БЕСПЛАТНУЮ доставку? Сделайте заказ на сумму от 2000 руб и получите услугу курьера в подарок!*
                <br>
                <br>
                Вызывайте курьера и совершайте заказы в любое удобное для Вас время
            </div>
            <div class="service__box-buttons">
                <a class="service__box-buttons-btn1 btn-b" data-fancybox href="#fancyform">
                    <div class="btn-txt">Заказать доставку</div>
                    <svg class="service__box-buttons-btn1-ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31819C7.23882 2.00901 7.79998 2.05078 8.11946 2.41149L15.2306 10.4402C15.5159 10.7623 15.5159 11.2377 15.2306 11.5598L8.11946 19.5885C7.79998 19.9492 7.23882 19.9909 6.86609 19.6818C6.49335 19.3726 6.45019 18.8295 6.76967 18.4688L13.2223 10.9999L6.76967 3.53113C6.45019 3.17042 6.49335 2.62737 6.86609 2.31819Z" fill="white"/>
                    </svg>
                </a>
                <a class='service__box-buttons-btn2 btn-b' href="#"><div class="btn-txt">Подробнее</div></a>
            </div>
        </div>


        
        <img src="./img/service/field-service_bg.png" class="service__img-circle">
        <img src="./img/service/car.png" class="service__img">

        
        
    </div>
</section>
    <section class="contacts">
    <div class="container">
          <div class="contacts__title">
            Наши <span class="emphasized">контакты</span>
          </div>
          <div class="contacts__subtitle">
          Ценность яблок кроется в&nbsp;их&nbsp;составе. Почти&nbsp;80% яблок составляет вода. Остальная часть приходится на&nbsp;клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во&nbsp;время диет.
          </div>

          <div class="contacts__box">
            <div class="contacts__skin">
            <div class="contacts__points">
                <!-- Точки -->
                
                <div class="contacts__points-point active-point" id="first_point">
                    <div class="contacts__points-point-type">Сана Центральный офис</div>
                    <div class="contacts__points-point-data">
                        <div class="contacts__points-point-data-address">
                            БЦ Купеческий Двор, Социалистическая ул., 74,  6 этаж, каб. 605А
                        </div>
                        <div class="contacts__points-point-data-phone">
                            8 (800) 123-00-01
                        </div>
                        
                        <div class="contacts__points-point-data-date">
                            Пн-Вс <span class="emphasized">круглосуточно</span>
                        </div>
                    </div>
                </div>

                <div class="contacts__points-point" id="second_point">
                    <div class="contacts__points-point-type">Сана Экспресс</div>
                    <div class="contacts__points-point-data">
                        <div class="contacts__points-point-data-address">
                        ТЦ Золотой Вавилон, ул. Малиновского, 25, цокольноый этаж, слева от главного входа.
                        </div>
                        <div class="contacts__points-point-data-phone">
                            8 (800) 123-00-02
                        </div>
                        
                        <div class="contacts__points-point-data-date">
                            Пн-Вс <span class="emphasized">с 9:00 - 21:00</span>
                            <br>
                            Сб-Вс <span class="emphasized">с 10:00 - 19:00</span>
                        </div>
                    </div>
                </div>

                <div class="contacts__points-point" id="third_point">
                    <div class="contacts__points-point-type">Пункт приема</div>
                    <div class="contacts__points-point-data">
                        <div class="contacts__points-point-data-address">
                            Северный, просп. Космонавтов, 2/2, д 451
                        </div>
                        <div class="contacts__points-point-data-phone">
                            8 (800) 123-00-04
                        </div>
                        
                        <div class="contacts__points-point-data-date">
                            Пн-Вс <span class="emphasized">с 9:00 - 22:00</span>
                            <br>
                            Сб-Вс <span class="emphasized">выходной</span>

                        </div>
                    </div>
                </div>
                <!-- Show more box -->
                <div id="show_more_box">

                <div class="contacts__points-point" id="fourth_point">
                    <div class="contacts__points-point-type">Сана Центральный офис</div>
                    <div class="contacts__points-point-data">
                        <div class="contacts__points-point-data-address">
                            БЦ Купеческий Двор, Социалистическая ул., 74,  6 этаж, каб. 605А
                        </div>
                        <div class="contacts__points-point-data-phone">
                            8 (800) 123-00-01
                        </div>
                        
                        <div class="contacts__points-point-data-date">
                            Пн-Вс <span class="emphasized">круглосуточно</span>
                        </div>
                    </div>
                </div>

                <div class="contacts__points-point" id="fifth_point">
                    <div class="contacts__points-point-type">Сана Центральный офис</div>
                    <div class="contacts__points-point-data">
                        <div class="contacts__points-point-data-address">
                            БЦ Купеческий Двор, Социалистическая ул., 74,  6 этаж, каб. 605А
                        </div>
                        <div class="contacts__points-point-data-phone">
                            8 (800) 123-00-01
                        </div>
                        
                        <div class="contacts__points-point-data-date">
                            Пн-Вс <span class="emphasized">круглосуточно</span>
                        </div>
                    </div>
                </div>

                <!-- Points -->
                </div>
                <!-- Show more box -->
                <button class="contacts__btn-show-more" id="show_more_btn">Показать ещё</button>
            <!-- Box -->
            </div>
            <!-- Skin -->
            </div>


            <!-- Map -->
            <div class="contacts__map" id="map">
        
            </div>
          </div>
          
    </div> 
</section>
    <section class="form-section" id="form-section">
    <div class="bubble-container-2">
        <!-- Котейнер для пузырьков -->
    </div>
    <div class="container">

        <div class="form-section__box">
        <div class="form-section__title">Закажите химчистку с доставкой!</div>
        <form class="form-section__form">
            <input type="text" name="" class="form-section__form-input" placeholder="Ваше имя и фамилия*">
            <input type="tel" name="" class="form-section__form-input" placeholder="Телефон*"> 
            <input type="email" name="" class="form-section__form-input" placeholder="Email">
            <textarea name="" class="form-section__form-input" placeholder="Ваш комментарий"></textarea>

            <div class="form-section__form-checkboxes">
                <input type="radio" name="speed" id="fast" class="form-section__form-checkboxes-radio">
                <label for="fast" class="form-section__form-checkboxes-label">Срочно</label>
                <input type="radio" name="speed" id="notfast" class="form-section__form-checkboxes-radio" checked>
                <label for="notfast" class="form-section__form-checkboxes-label">Не срочно</label>
            </div>
            
            <button type="submit" class="form-section__form-btn btn-b">
                <div class="btn-txt">Заказать</div>
                <svg class="form-section__form-btn-ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31819C7.23882 2.00901 7.79998 2.05078 8.11946 2.41149L15.2306 10.4402C15.5159 10.7623 15.5159 11.2377 15.2306 11.5598L8.11946 19.5885C7.79998 19.9492 7.23882 19.9909 6.86609 19.6818C6.49335 19.3726 6.45019 18.8295 6.76967 18.4688L13.2223 10.9999L6.76967 3.53113C6.45019 3.17042 6.49335 2.62737 6.86609 2.31819Z" fill="white"/>
                </svg>
            </button>
        </form>

        <div class="form-section__policy">
        Нажимая на кнопку «Заказать», вы даёте своё согласие на обработку персональных данных согласно <a href="" class="text-link">политике конфиденциальности</a>
        </div>
        </div>
        
    </div>
</section>


    <footer class="footer">
    <div class="container">

        <div class="footer__logo">
            <img src="./img/common/logo.svg" alt="">
        </div>

        <div class="footer__links">
            <div class="footer__links-first">
                <div class="footer-droplist">Услуги <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0117 4.89957C15.2435 5.17912 15.2122 5.59998 14.9417 5.8396L8.92019 11.1729C8.67858 11.3869 8.32207 11.3869 8.08046 11.1729L2.05897 5.8396C1.78843 5.59998 1.7571 5.17911 1.98899 4.89956C2.22087 4.62001 2.62816 4.58764 2.89869 4.82725L8.50039 9.66674L14.102 4.82726C14.3725 4.58764 14.7798 4.62002 15.0117 4.89957Z" fill="#1C274C"/></svg>
                </div>
                <div class="footer-droplist-list">
                    <a href="#" class="active">Одежда</a>
                    <a href="#">Аксессуары</a>
                    <a href="#">Домашний интерьер</a>
                    <a href="#">Обувь</a>
                    <a href="#">Особые услуги</a>
                </div>
            </div>
            <div class="footer__links-second">
                <a href="#">Акции</a>
                <a href="#">Магазин</a>
                <a href="#">О компании</a>
                <a href="#">Контакты</a>
            </div>
        </div>

        <div class="footer__contacts">
            <div class="footer__contacts-phone">
                8 (800) 123-45-67 
            </div>
            <span class="footer__contacts-subtext">Горячая линия</span>
 
            <a href="#form-section" class="footer__contacts-btn btn-w">
                <div class="footer__contacts-btn-text btn-text">
                    Заказать on-line <br>
                    <span>заберём за&nbsp;три часа</span>
                </div>
                <div class="btn-ico">
                    <svg class="footer__contacts-btn-ico" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <path d="M16.5579 10.6823L17.3655 12.1295C18.0944 13.4356 17.8018 15.1488 16.6539 16.2968C16.6538 16.2968 16.6538 16.2968 16.6538 16.2968C16.6537 16.2969 15.2615 17.6894 17.7861 20.2139C20.3099 22.7378 21.7024 21.3469 21.7032 21.3461C21.7032 21.3461 21.7032 21.3461 21.7032 21.3461C22.8512 20.1982 24.5644 19.9056 25.8704 20.6344L27.3176 21.4421C29.2898 22.5427 29.5227 25.3084 27.7892 27.0418C26.7476 28.0834 25.4716 28.8939 24.061 28.9474C21.6865 29.0374 17.6538 28.4365 13.6087 24.3913C9.56353 20.3461 8.96257 16.3135 9.05259 13.9389C9.10606 12.5284 9.91654 11.2524 10.9581 10.2108C12.6916 8.47732 15.4573 8.71022 16.5579 10.6823Z" fill="var(--uni-text-color-2)"/>
                        <path d="M20.5675 6.40635C20.6499 5.89751 21.1309 5.55233 21.6397 5.63471C21.6712 5.64074 21.7726 5.65968 21.8257 5.67151C21.9318 5.69515 22.08 5.73156 22.2646 5.78536C22.634 5.89293 23.1499 6.07014 23.7692 6.35405C25.009 6.92245 26.6589 7.91677 28.371 9.62888C30.0831 11.341 31.0774 12.9909 31.6458 14.2307C31.9297 14.85 32.1069 15.3659 32.2145 15.7352C32.2683 15.9199 32.3047 16.068 32.3284 16.1742C32.3402 16.2273 32.3488 16.27 32.3549 16.3015L32.362 16.3403C32.4444 16.8491 32.1024 17.35 31.5935 17.4324C31.0861 17.5145 30.6081 17.171 30.5237 16.6646C30.5211 16.651 30.514 16.6145 30.5063 16.58C30.491 16.5111 30.4644 16.4018 30.4223 16.2572C30.3381 15.9681 30.1918 15.5384 29.949 15.0086C29.4639 13.9505 28.5915 12.4893 27.0511 10.9488C25.5106 9.40836 24.0494 8.53601 22.9912 8.05089C22.4615 7.80803 22.0318 7.66176 21.7426 7.57755C21.5981 7.53545 21.4164 7.49374 21.3475 7.47839C20.841 7.39399 20.4853 6.91374 20.5675 6.40635Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.849 10.699C20.9906 10.2034 21.5072 9.91639 22.0029 10.058L21.7464 10.9554C22.0029 10.058 22.0029 10.058 22.0029 10.058L22.0046 10.0585L22.0066 10.0591L22.0107 10.0603L22.0203 10.0632L22.045 10.0708C22.0637 10.0768 22.0872 10.0846 22.1151 10.0946C22.171 10.1144 22.2449 10.1426 22.3355 10.1814C22.5168 10.2591 22.7645 10.3791 23.0688 10.5592C23.6779 10.9197 24.5094 11.5185 25.4863 12.4953C26.4631 13.4722 27.0619 14.3037 27.4224 14.9128C27.6025 15.2171 27.7225 15.4648 27.8002 15.6461C27.839 15.7367 27.8672 15.8106 27.887 15.8665C27.897 15.8944 27.9048 15.9179 27.9108 15.9366L27.9184 15.9613L27.9213 15.9709L27.9225 15.975L27.9231 15.977C27.9231 15.977 27.9236 15.9787 27.0262 16.2352L27.9236 15.9787C28.0652 16.4744 27.7782 16.991 27.2826 17.1326C26.7912 17.273 26.2791 16.992 26.1324 16.5041L26.1278 16.4907C26.1212 16.472 26.1075 16.4352 26.0844 16.3814C26.0384 16.274 25.9549 16.0983 25.816 15.8636C25.5385 15.3947 25.0374 14.6863 24.1663 13.8153C23.2953 12.9442 22.5869 12.4431 22.118 12.1656C21.8833 12.0267 21.7076 11.9432 21.6002 11.8972C21.5464 11.8741 21.5096 11.8604 21.4909 11.8538L21.4775 11.8492C20.9896 11.7025 20.7086 11.1904 20.849 10.699Z" fill="white"/>
                    </svg>
                </div>
            </a>
            
        </div>


    </div>
</footer>
    <section class="rights">
    <div class="container">
    <div class="rights__text">
        2023 Химчистка Сана. Все права защищены. <br>
        Политика обработки персональных данных
    </div>

    <div class="rights__logo">
        <img src="./img/footer/sm.svg" alt="">
    </div>
    </div>
</section>
    <div class="form-fancybox hidden" id="fancyform">
        <div class="form-fancybox__title">Закажите химчистку с доставкой!</div>
        <form class="form-fancybox__form">
            <input type="text" name="" class="form-fancybox__form-input" placeholder="Ваше имя и фамилия*">
            <input type="tel" name="" class="form-fancybox__form-input" placeholder="Телефон*"> 
            <input type="email" name="" class="form-fancybox__form-input" placeholder="Email">
            <textarea name="" class="form-fancybox__form-textarea" placeholder="Ваш комментарий"></textarea>

            <div class="form-fancybox__form-checkboxes">
                <input type="radio" name="speed" id="fast-fancy" class="form-fancybox__form-checkboxes-radio">
                <label for="fast-fancy" class="form-fancybox__form-checkboxes-label">Срочно</label>
                <input type="radio" name="speed" id="notfast-fancy" class="form-fancybox__form-checkboxes-radio" checked>
                <label for="notfast-fancy" class="form-fancybox__form-checkboxes-label">Не срочно</label>
            </div>
            
            <button type="submit" class="form-fancybox__form-btn btn-b">
                <div class="btn-txt">Заказать</div>
                <svg class="form-fancybox__form-btn-ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31819C7.23882 2.00901 7.79998 2.05078 8.11946 2.41149L15.2306 10.4402C15.5159 10.7623 15.5159 11.2377 15.2306 11.5598L8.11946 19.5885C7.79998 19.9492 7.23882 19.9909 6.86609 19.6818C6.49335 19.3726 6.45019 18.8295 6.76967 18.4688L13.2223 10.9999L6.76967 3.53113C6.45019 3.17042 6.49335 2.62737 6.86609 2.31819Z" fill="white"/>
                </svg>
            </button>
        </form>

        <div class="form-fancybox__policy">
        Нажимая на кнопку «Заказать», вы даёте своё согласие на обработку персональных данных согласно <a href="" class="text-link">политике конфиденциальности</a>
        </div>

</div>


</div>


    

    
    

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" defer="defer"></script>
  <!-- Swiper JS -->
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="libs/scrollMaster.js"></script>
  <script src="js/script.js"></script>


  
</body>
</html>