<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link type="text/css" rel="stylesheet" href="styleNavigation.css">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="navbar">

      <a href="index.html" class="navbar__link">
        <span class="material-icons"> home </span> Home
      </a>

      <a href="calculator.html" class="navbar__link">
        <span class="material-icons"> calculate </span> Calculator
      </a>

      <a href="LearningModule1.html" class="navbar__link">
        <span class="material-icons"> assignment </span> Assessment 1
      </a>

    <a href="LearningModule2.html" class="navbar__link">
        <span class="material-icons"> assignment_ind </span> Assessment 2
      </a>

    <a href="LearningModule3.php" class="navbar__link">
        <span class="material-icons"> assignment_turned_in </span> Assessment 3
      </a>

    </div>

    <h1>Coming Soon</h1>

    <aside class="section4">
      <span> <button onclick="toggleNav()">Open/Close<br>Navigation</button> </span>
      <noscript>JavaScript MUST be enable for this site to work properly.</noscript>
    </aside>
    <script>
    function toggleNav() {
      document.querySelector(".navbar").classList.toggle("navbar--open");
    }
    </script>
  </body>
</html>
