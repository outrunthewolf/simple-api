<?php
/*
* 	Database Model
*/ 
class Super extends Eloquent {
	
	// Table Name
	protected $table = 'supers';

	// Soft Delete active
	protected $softDelete = true;
}

?>