<!DOCTYPE html>
<html lang="ru">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title><?= $title ?></title>
  <meta property="og:title" content="<?= $title ?>">
  <meta property="og:description" content="<?= $desc ?>">
  <meta property="og:url" content="//<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>">
  <meta property="og:image" content="//<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>img/common/share.jpg?2018-07-17">
  <link rel="image_src" href="//<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>img/common/share.jpg?2018-07-17">

  <link href="<?= $favicon ?>" type="image/x-icon" rel="icon">
  <link href="<?= $favicon ?>" type="image/x-icon" rel="shortcut icon">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://api-maps.yandex.ru/2.1/?apikey=6be3bf7a-5635-45f5-8d7f-ee0ef3913e00&lang=ru_RU" type="text/javascript"></script>
</head>

<body>

  {% block blocks %}

    {% include 'header/block.php' %}
    {% include 'main/block.php' %}
    {% include 'about/block.php' %}
    {% include 'info/block.php' %}
    {% include 'service/block.php' %}
    {% include 'contacts/block.php' %}
    {% include 'form/block.php' %}
    {% include 'footer/block.php' %}
    {% include 'rights/block.php' %}
  {% endblock %}

    
    

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" defer="defer"></script>
  <!-- Swiper JS -->
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="js/script.js"></script>


  
</body>
</html>