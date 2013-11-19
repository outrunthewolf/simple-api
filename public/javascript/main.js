/* Main */

var superpeeps = new function() {

	// Element variables
	this.main = null;
	this.holder = "main";
	this.form_holder = "form_holder";
	this.form_actual = "super_form"
	this.overlay = "overlay";
	this.super_holder = "super_holder";
	this.super_box = "super_box";

	// API variables
	this.api_url = "http://localhost:49160";

	// mix arrays, objects
	this.supers = {};
	this.visible_supers = [];

	// Other vars
	this.overlay_active = false;
	this.super_holder_active = false;


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
		$(super_box).addEvent('click', function(e)
		{
			self.toggleSupers();
		});

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
			// toggle form
			if(self.form_active)
				self.toggleForm();

			// toggle supers off
			if(self.super_holder_active)
				self.toggleSupers();
		});

		// form submit
		$(this.form_actual).addEvent('submit', function(e)
		{
			e.stop();
			self.createSuper();
		});

		// get any supers on load
		this.getSupers();
	}


	/*
	* 	Create a super
	*/
	this.createSuper = function()
	{
		// get all the form data, validate it
		var f = $(this.form_actual);
		var self = this;

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
			if(d.statusCode == 201)
				self.toggleForm();
		});
	}


	/*
	*	Make a request for superheros
	*/
	this.getSupers = function()
	{
		// set the endpoint
		var self = this;
		var endpoint = this.api_url + "/api/super";

		// make a request
		this.request(endpoint, "", "GET", function(d)
		{
			self.supers = d;
			console.log("loading complete");
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
		var request = new Request.JSON({
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
	this.toggleSupers = function()
	{
		var holder = $(this.super_holder);
		var self = this;
		
		if(this.super_holder_active)
		{
			this.toggleOverlay();

			// Set some form styles
			holder.setStyles({
				'display': 'none'
			});

			// set inactive
			this.super_holder_active = false;
		}
		else
		{
			// get the form and toggle the overlay
			this.toggleOverlay();

			// load all existing supers into cards and 
			Object.each(this.supers, function(v, k)
			{
				// If we haven't parsed the ID before, do it now and store it
				if(!self.visible_supers.contains(v.id))
				{
					var elem = new Element('li', {
						class: 'card ' + v.type,
						html: 	"<h3>" + v.name + "</h3>" +
								"<img src='" + v.image + "' alt='" + v.name + "' />" + 
								"<p>" + self.cpWord(v.type) + "</p>" +
								"<ul>" +
								"<li>Speed - " + v.speed + "</li>" +
								"<li>Attack - " + v.attack + "</li>" + 
								"<li>Strength - " + v.strength + "</li>" + 
								"</ul>"
					});

					// new element
					elem.inject(holder, 'top');

					// push existing items into a mix array,
					// we dont want to show things twice
					self.visible_supers.push(v.id)
				}
			});

			// Set some form styles
			holder.setStyles({
				'display': 'block',
				'position': 'absolute',
				'top': '50px',
				'z-index': '9'
			});

			// set form active
			this.super_holder_active = true;
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
				'position': 'fixed',
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