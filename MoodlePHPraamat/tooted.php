<?php
require('config.php');

global $yhendus;

// Uue teate lisamine
if (isset($_REQUEST["uusleht"])) {
    if(!empty(trim($_REQUEST["nimetus"]))){
$kask = $yhendus->prepare("INSERT INTO firma (nimetus, kirjeldus, hind) VALUES (?, ?, ?)");
$kask->bind_param("sss", $_REQUEST["nimetus"], $_REQUEST["kirjeldus"], $_REQUEST["hind"]);
$kask->execute();
header("Location: ".$_SERVER["PHP_SELF"]);
$yhendus->close();
exit();
    }
}

// Teate kustutamine
if (isset($_REQUEST["kustutusid"])) {
$kask = $yhendus->prepare("DELETE FROM firma WHERE id=?");
$kask->bind_param("i", $_REQUEST["kustutusid"]);
$kask->execute();
}

// Teate muutmine
if (isset($_REQUEST["muutmisid"])) {
$kask = $yhendus->prepare("UPDATE firma SET nimetus=?, kirjeldus=?, hind=? WHERE id=?");
$kask->bind_param(
"ssii",
$_REQUEST["nimetus"],
$_REQUEST["kirjeldus"],
$_REQUEST["hind"],
$_REQUEST["muutmisid"]

);
$kask->execute();
}
?>
        <!DOCTYPE html>
        <html lang="et">
        <head>
            <title>Teated lehel</title>
            <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div id="menyykiht">
            <h2>Tooted</h2>
            <ul>

                <?php
                //ühe teate kuvamine või muutmine


                $kask = $yhendus->prepare(
                    "SELECT id, nimetus FROM firma"
                );
                $kask->bind_result($id, $nimetus);
                $kask->execute();
                while ($kask->fetch()) {
                    echo "<li><a href='".$_SERVER["PHP_SELF"].
                        "?id=$id'>".htmlspecialchars($nimetus)."</a></li>";
                }
                ?>
            </ul>
            <a href="<?=$_SERVER['PHP_SELF']?>?lisamine=jah">Lisa ...</a>
        </div>

        <div id="kirjelduskiht">
            <?php
            // Ühe teate kuvamine või muutmine
            if (isset($_REQUEST["id"])) {
                $kask = $yhendus->prepare("SELECT id, nimetus, kirjeldus, hind FROM firma WHERE id=?");
                $kask->bind_param("i", $_REQUEST["id"]);
                $kask->bind_result($id, $nimetus, $kirjeldus, $hind);
                $kask->execute();

                if ($kask->fetch()) {
                    if (isset($_REQUEST["muutmine"])) {
                        echo "
                   <form action='".$_SERVER["PHP_SELF"]."'>
                     <input type='hidden' name='muutmisid' value='$id'/>
                     <h2>Teate muutmine</h2>
                     <dl>
                       <dt>Pealkiri:</dt>
                       <dd>
                         <input type='text' name='nimetus' value='".
                            htmlspecialchars($nimetus)."'/>
                       </dd>
                       <dt>Teate kirjeldus:</dt>
                       <dd>
                         <textarea rows='20' cols='30' name='kirjeldus'>".
                            htmlspecialchars($kirjeldus)."</textarea>
                       </dd>                  
                       
                       <dt>Autor:</dt>
                       <dd>
                         <input type='text' name='hind' value='".
                            htmlspecialchars($hind)."'/>
                       </dd
                                                                                        
                     </dl>                      
                     <input type='submit' value='Muuda' />
                   </form>
                ";
                    } else {
                        echo "<h2>".htmlspecialchars($nimetus)."</h2>";
                        echo htmlspecialchars($kirjeldus);
                        echo "<br />";
                        echo htmlspecialchars($hind);
                        echo "<br /><a href='".$_SERVER["PHP_SELF"].
                            "?kustutusid=$id'>kustuta</a> ";
                        echo "<a href='".$_SERVER["PHP_SELF"].
                            "?id=$id&amp;muutmine=jah'>muuda</a>";
                    }
                } else {
                    echo "Vigased andmed.";
                }
            }

            // Uue teate lisamise vorm
            if (isset($_REQUEST["lisamine"])) {
                ?>

                <form action="<?=$_SERVER["PHP_SELF"]?>">
                    <input type="hidden" name="uusleht" value="jah" />
                    <h2>Uue teate lisamine</h2>
                    <dl>
                        <dt><label for="nimetus">Nimetus:</label> </dt>
                        <dd>
                            <input type="text" name="nimetus" id="nimetus" />
                        </dd>
                        <dt><label for="kirjeldus">Kirjeldus:</label></dt>
                        <dd>
                            <textarea rows="20" cols="30" name="kirjeldus" id="kirjeldus"></textarea>
                        </dd>

                        <dt><label for="hind">Hind:</label> </dt>
                        <dd>
                            <input type="text" name="hind" id="hind" />
                        </dd>
                    </dl>
                    <input type="submit" value="Sisesta" />
                </form>

                <?php
            }
            ?>
        </div>

        <div id="jalusekiht">
            Lehe tegi õpilane Christofer
        </div>
        </body>
        </html>
        <?php
        $yhendus->close();
        ?>

