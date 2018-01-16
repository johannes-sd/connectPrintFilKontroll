<?php
echo <<< EOT
<!--http://www.adam-bray.com/blog/115/how-to-create-mobile-friendly-html-5-css-3-fixed-responsive-navigation-menu/-->
<header>
<!--Menyen i hodet av siden-->
<div id="logo">
    <h1>
        PASC
        <a href="#">SentralDistribusjon AS</a>
    </h1>
    </div>
<nav>
    <ul class="hodeNav">
    <li id="mny-SDkravfiler">
        <a href="SDkravfiler.php">SD kravfiler</a>
    </li>
    <li id="mny-ukentligeFakturaer">
        <a href="ukentligeFakturaer.php">Ukentlige fakturaer</a>
    </li>
    <li>
        <a href="#">IKKE I DRIFT</a>
    </li>
    <li id="mny-kdnrAdrs">
        <a href="KundenummerTilAdresser.php">Kundenummer til adresser</a>
    </li>
    <li id="mny-saltoKrav">
        <a href="saltoKrav.php">Saltokrav</a>
    </li>
    <li id="mny-ExcelTilCentiro">
        <a href="ExcelTilCentiro.php">Excel til Centiro</a>
    </li>
    <li id="mny-adminKnapp">
        <a href="administrasjon.php">Administrasjon</a>
    </li>

    </ul>
</nav>
</header>
EOT;
?>