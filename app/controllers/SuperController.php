<?php
 
class SuperController extends BaseController {
 
    // Restful variable
    public $restful = true;

    // Local input
    private $input;

    // Some avatars for fun
    private $avatars = array(
        'http://static4.wikia.nocookie.net/__cb20130101030833/marveldatabase/images/e/e6/Thor_Main_Page_Icon.jpg',
        'http://static2.wikia.nocookie.net/__cb20130101030909/marveldatabase/images/0/00/Deadpool_Main_Page_Icon.jpg',
        'http://static4.wikia.nocookie.net/__cb20130602190229/marveldatabase/images/8/80/Kurse_Main_Page_Icon.jpg',
        'http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg',
        'http://static1.wikia.nocookie.net/__cb20130602190227/marveldatabase/images/4/4b/Malekith_Main_Page_Icon.jpg',
        'http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg',
        'http://static2.wikia.nocookie.net/__cb20090509034261/marveldatabase/images/d/d8/Wolverine_Main_Page_Icon.jpg',
        'http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'
    );

    /**
    *
    **/
    public function __construct()
    {
        $this->input = Input::all();
    }

    /**
    * GET - Get an item by id, or all items if none specified
    *
    * @param int $id - the id of the requested item
    * @access public
    * @return JSON
    **/
    public function get_super($id = false)
    {
        // If there is no id return them all
        if (!$id) 
            return Super::all();
        
        // Find a super by id
        $super = Super::find($id);
 
        // If there is none by that id return a 404
        if (!$super)
            return $this->response(404, "I couldn't find anyone with that id");

        return $super;
    }


    /**
    * POST - Create an item
    *
    * @access public
    * @return JSON
    **/
    public function post_create()
    {
       // get some data
       $data = $this->input;

       // Check data
       if(!$data)
            return $this->response(405, "This method requires some data");

        // Check we have a name
        if(!isset($data['name'][0]))
            return $this->response(405, "Every super requires a name you fool!");

        // Check the name doesn't already exist
        $super = Super::where('name', '=', $data['name'][0])->count();
        if($super > 0)
            return $this->response(405, $data['name'][0] . " already exists, and is wating in his lair");

        // create new super
        $super = new Super();
        $super->name = $data['name'][0];
        $super->email = (isset($data['email'][0])) ? $data['email'][0] : '';
        $super->type = $data['type'][0];
        $super->image = $this->avatars[(rand(1, (count($this->avatars) - 1)))];
        $super->strength = rand(1, 10);
        $super->speed = rand(1, 10);
        $super->attack = rand(1, 10);

        // save model
        $super->save();
        
        // if we're successful return a 200
        $supers = Super::all();
        return $supers;
    }

    /**
    * DELETE - Delete an item by id
    *
    * @param int $id - the id of the requested item
    * @access public
    * @return JSON
    **/
    public function delete_drop()
    {
        $data = $this->input;
        $id = $data['id'];

        // check its an integer
        if(!$id)
            return $this->response(405, "This method requires an id");

        // fins the superhero
        $super = Super::find($id);
        
        // Check they exist
        if(!$super)
            return $this->response(404, "I can't find that super");

        // delete them
        $super->delete();

        // return 
        return $this->response(200, "All done, the super was destroyed");
    }

    /**
    * * - Catch for any missing methods
    *
    * @param int $id - the id of the requested item
    * @access public
    * @return JSON
    **/
    public function missingMethod($param)
    {
        return Response::json('Nothing Found', 404);
    }

    /**
    * Response function
    *
    * @param int $status
    * @param string $content
    * @access private
    * @return string
    **/
    private function response($status, $content)
    {
        if(!$status)
            $status = 405;

        if(!$content)
            $content = "Method not allowed";

        $content = array(
            "message" => $content,
            "statusCode" => $status
        );

        $response = Response::make($content, 200);
        $response->header('Content-Type', "application/json");
        return $response;
    }
}
 
?>