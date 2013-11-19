<?php
 
class SuperController extends BaseController {
 
    // Restful variable
    public $restful = true;

    // Various vars for some stuff
    private $input;

    public function __construct()
    {
        $this->input = Input::all();
    }

    // get existing supers
    public function get_super($id = false)
    {
        // Check its a number
        //if(!is_int($id))
        //   return $this->response(405, "Error: Method requires an integer");

        // If there is no id return them all
        if (!$id) 
            return Super::all();
        
        // Find a super by id
        $super = Super::find($id);
 
        // If there is none by that id return a 404
        if (!$super)
            return $this->response(404, "Error: We found no one");

        return $super;
    }

    // create a super
    public function post_create()
    {
       // get some data
       $data = $this->input;

       // Check data
       if(!$data)
            return $this->response(405, "Error: Method requires some data");

        // Check we have a name
        if(!isset($data['name'][0]))
            return $this->response(405, "Error: Superhero requires a name you fool!");

        // create new super
        $super = new Super();
        $super->name = $data['name'][0];
        $super->email = (isset($data['email'][0])) ? $data['email'][0] : '';
        $super->strength = rand(1, 10);
        $super->speed = rand(1, 10);
        $super->attack = rand(1, 10);

        // save model
        $super->save();
        
        // if we're successful return a 200
        return $this->response(200, "Complete");
    }

    // Delete n item, we should use a soft delete!
    public function delete_drop($id)
    {
        // check its an integer
        if(!is_int($id))
            return $this->response(405, "Error: Method requires an integer");

        // fins the superhero
        $super = Super::find($id);
        
        // Check they exist
        if(!$super)
            return $this->response(404, "Error: Super not found");

        // delete them
        $super->delete();

        // return 
        return $this->response(200, "Info: All sorted, he was destroyed");
    }

    // Catch missing methods
    public function missingMethod($param)
    {
        return Response::json('Nothing Found', 404);
    }

    // Response function
    private function response($status, $content)
    {
        if(!$status)
            $status = 405;

        if(!$content)
            $content = "Method not allowed";

        $response = Response::make($content, $status);
        $response->header('Content-Type', "application/json");
        return $response;
    }
}
 
?>