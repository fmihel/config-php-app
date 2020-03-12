<?php
use fmihel\router\Route;


class Send extends Route{
    
    public function ajax_send($data){
            error_log('['.__FILE__.':'.__LINE__.'] '.'------------------------');
            error_log('['.__FILE__.':'.__LINE__.'] '.'recv send');
            error_log('['.__FILE__.':'.__LINE__.'] '.print_r($data,true));
            error_log('['.__FILE__.':'.__LINE__.'] '.'------------------------');
            return $this->ok(['msg'=>$data['msg']]);
    }    
}

?>
