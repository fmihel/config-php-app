<?php
    require_once __DIR__.'/../../vendor/autoload.php';
        
    new fmihel\router\Router([
        'add'=>['./mods/'],
        'suspend'=>false,
    ]);
    

?>
