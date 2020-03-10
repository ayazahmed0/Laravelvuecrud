<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';
   protected $fillable = ['id','name','email','description','file','created_at','updated_at'];
}
