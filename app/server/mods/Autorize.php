<?php
use fmihel\router\Route;
use fmihel\console;

class Autorize extends Route{
    
    private static $data = [
        'enable'    =>false,
        'login'     =>'',
        'pass'      =>'',
        'msg'       =>'',
        'id'        =>-1
    ];

    public static function logout(){
        self::$data = [
            'enable'    =>false,
            'login'     =>'',
            'pass'      =>'',
            'msg'       =>'',
            'id'        =>-1
        ];
    }
    
    public static function data( $data = null){
        if ( ( gettype($data) === 'array')&&($data !== []) ) 
            self::$data = array_merge(self::$data,$data);
    
        return self::$data;
    }

    public static function init($autorize,$result = 'exception'){
        try {
            if (isset($autorize['login']) && (isset($autorize['pass']))){
                
                if (($autorize['login'] === '1') && ($autorize['pass'] === '1')){
                    self::$data           =   $autorize;
                    self::$data['enable'] =   true;

                    return true;
                }else
                    throw new Exception("login or pass is wrong");
            };
            
            throw new Exception("not enough authorization data");
                
        } catch (\Exception $e) {
            
            self::logout();

            if ($result === 'exception')
                throw new Exception($e->getMessage());
        };

        return false;
    }
    public function route_Autorize($autorize){
        console::log($autorize);
        
        self::init($autorize);
        return $this->ok(self::data());
    }
};
?>