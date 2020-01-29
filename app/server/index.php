<?php
    require_once __DIR__.'/../../vendor/autoload.php';

    use fmihel\router\{Router,Route};
    
    function onBefore(&$data){

        if ($data['id']!=='autorize'){
             $autorize = $data['data']['autorize'];
             unset($data['data']['autorize']);

             if (!Autorize::init($autorize))
                 return Route::typeError('error autorize',0,['autorize'=>['enable'=>false]]);
        }
        
    }
      
    new Router([
        'add'=>['./mods/'],
        'suspend'=>false,
        'onBefore'=>'onBefore'

    ]);
    

?>
