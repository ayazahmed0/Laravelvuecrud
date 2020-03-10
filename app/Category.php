<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $table='categories';

     function getapplication(){
        return $this->hasMany('App\Application','category_id','id');
    }

}
