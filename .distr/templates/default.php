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
    {% include 'form-fancybox/block.php' %}
    {% endblock %}

    
    

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" defer="defer"></script>
  <!-- Swiper JS -->
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="libs/scrollMaster.js"></script>
  <script src="js/script.js"></script>


  
</body>
</html>