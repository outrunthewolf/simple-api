/* Main */

var superpeeps = new function() {

	// Test data
	this.test_supers = {
		"Megatron": {
			"strength": "10",
			"attack": "5",
			"speed": "9",
			"description": "some content",
			"email": "chris@outrunthewolf.com",
			"type": "villain"
		},
		"Superman": {
			"strength": "10",
			"attack": "7",
			"speed": "4",
			"description": "some content",
			"email": "chris@test.com",
			"type" : "hero"
		}
	}

	// Element variables
	this.main = null;
	this.holder = "main";
	this.form_holder = "form_holder";
	this.form_actual = "super_form"
	this.overlay = "overlay";

	// API variables
	this.api_url = "http://localhost:49154";
	//this.api_uri = 

	// Other vars
	this.overlay_active = false;

	/*
	*	Initialisor
	*/
	this.init = function() {
		
		var self = this;

		// Bind some events to the resize
		window.addEvent('resize', function()
		{
			self.resizeOverlay();
		});

		// events on the box to show all heros

		// event on each button to show a form with a hidden value
		$$('.button.super').addEvent('click', function(e)
		{
			// get the type
			var type = e.id || this.id;

			// show the form with hero hidden filed, and title
			var title = $(self.form_holder).getElements('.type');
			var hidden = $(self.form_actual).getElements('[name="c_type"]');
			
			hidden.set("value", type);
			title.set('text', "New " + self.cpWord(type));

			// show the form
			self.toggleForm();
		});

		// add an event to the overlay to close itself and anything else
		$(overlay).addEvent('click', function()
		{
			self.toggleForm();
		});


		// event on fight button to see some random fights

		// form submit
		$(this.form_actual).addEvent('submit', function(e)
		{
			e.stop();
			self.createSuper();
		});
	}


	/*
	*
	*/
	this.createSuper = function()
	{
		// get all the form data, validate it
		var f = $(this.form_actual);
		console.log(f);

		// get some data
		var name = f.getElements('[name="c_name"').get("value");
		var type = f.getElements('[name="c_type"').get("value");
		var email = f.getElements('[name="c_email"').get("value");

		// validate anything
		if(name == "")
			return alert("you must specify a name");

		if(type == "")
			return alert("something has gone terribly wrong!");

		// if we're happy make a post request to the server
		// and create a new whatever
		var endpoint = this.api_url + "/api/create";
		var data = {
			"name": name,
			"email": email,
			"type": type
		}

		// make a request
		this.request(endpoint, data, "POST", function(d)
		{
			console.log(d);
		});
	}

	this.getSupers = function()
	{
		// set the endpoint
		var endpoint = this.api_url + "/super";

		// make a request
		this.request(endpoint, "", "GET", function(d)
		{
			console.log(d);
		});
	}


	/*
	*	Generic request function
	*/
	this.request = function(url, data, method, cb)
	{
		// Set some defaults
		(method) ? method : 'POST';
		(data) ? data : '';
		(cb) ? cb : function() {};

		// actual request
		var request = new Request({
			url: url,
			data: data,
			method: method,
			onComplete: function(d)
			{
				cb(d);
			},
			onRequest: function()
			{
				// maake sure we have something here to show ip sytuff
			}
		}).send();
	}

	/*
	*
	*/
	this.toggleForm = function()
	{
		var form = $(this.form_holder);
		
		if(this.form_active)
		{
			this.toggleOverlay();

			// Set some form styles
			form.setStyles({
				'display': 'none'
			});

			// set inactive
			this.form_active = false;
		}
		else
		{
			// get the form and toggle the overlay
			this.toggleOverlay();

			// Set some form styles
			form.setStyles({
				'display': 'block',
				'position': 'absolute',
				'top': '50px',
				'z-index': '9'
			});

			// set form active
			this.form_active = true;
		}
	}

	/*
	*
	*/
	this.toggleOverlay = function()
	{
		var overlay = $(this.overlay);

		if(this.overlay_active)
		{
			overlay.setStyles({
				'display': 'none',
			});

			// set overlay inactive
			this.overlay_active = false;
		}
		else
		{
			var size = window.getSize();
			overlay.setStyles({
				'position': 'absolute',
				'height': size.y,
				'width': size.x,
				'top': '0px',
				'left': '0px',
				'display': 'block',
				'z-index': '2'
			});

			// set overlay active
			this.overlay_active = true;
		}
	}

	/*
	*
	*/
	this.resizeOverlay = function()
	{
		if(this.overlay_active)
		{
			var overlay = $(this.overlay);
			var size = window.getSize();
		
			overlay.setStyles({
				'height': size.y,
				'width': size.x
			});
		}
	}

	/*
	*	capitalise some stuff
	*/
	this.cpWord = function(string)
	{
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
}