<?php
session_start();
echo <<< EOT

<!DOCTYPE html>
<html>
    <head>
        <title>PASC</title>
        <meta charset="UTF-8">
        <!--Alle disse cdn hostede er hentet fra datatables.net-->
        <!--Brukes til å lage tabeller som er brukervennlige og funksjonelle-->
        <!--DataTables is free open source software, available under the MIT license, and you are free to download it and use as you see fit.-->
        <!--Copyright (C) 2008-2016, SpryMedia Ltd.-->
        <!--MIT-lisence http://datatables.net/license/mit -->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.11/css/dataTables.jqueryui.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.0.2/css/responsive.jqueryui.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.1.2/css/buttons.jqueryui.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/scroller/1.4.1/css/scroller.jqueryui.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/select/1.1.2/css/select.jqueryui.css"/>
        <!--<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.js"></script>-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.js"></script>
        <script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.js"></script>
        <script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/1.10.11/js/dataTables.jqueryui.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/dataTables.buttons.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.jqueryui.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.colVis.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.html5.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.print.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.0.2/js/dataTables.responsive.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/scroller/1.4.1/js/dataTables.scroller.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/select/1.1.2/js/dataTables.select.js"></script>
        <link rel="stylesheet" type="text/css" href="main.css"/>

EOT;

//Følgende vil slette alle sesjoner ved omlasting av siden, med mindre du er innlogget som admin
if ($_SERVER['REQUEST_URI'] != "/administrasjon.php"){
    session_destroy();
}



?>