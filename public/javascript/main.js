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
	this.alert_box = "alert";
	this.battleground = "battleground";

	// API variables
	this.api_url = "http://localhost:49160";

	// mix arrays, objects
	this.supers = {};
	this.visible_supers = [];

	// Other vars
	this.overlay_active = false;
	this.super_holder_active = false;
	this.animating = false;
	this.battleground_active = false;


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

		/*
		$('fight').addEvent('click', function()
		{
			self.battle();
		});
		*/

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
			// If we're good
			self.supers = d;
			self.toggleForm();
		});
	}

	/*
	*
	*/
	this.battle = function()
	{
		// holding array
		var arr = [];
		var t = false;
		var count = 0;

		// get one hero, get one villain
		// foreach one, iterate and create a new element for them
		// push these new elements to the stage
		Object.each(this.supers, function(v, k)
		{
			if(count == 2) // we only want two
				return false;

			if(t)
			{
				if(v.type != arr[0].type)
				{
					arr.push(v);
				}
			}
			else
			{
				t = v.type;
				arr.push(v);
			}
			++count;
		});

		// Count less than 2, theres not enough to fight
		if(arr.count < 2)
		{
			return alert("Looks like there's no-one to fight!");
		}

		// set a base score
		arr[0].score = 0;
		arr[1].score = 0;

		// speed, strength, attack
		(arr[0].speed < arr[1].speed) ? arr[1].score++ : arr[0].score++;
		(arr[0].strength < arr[1].strength) ? arr[1].score++ : arr[0].score++;
		(arr[0].attack < arr[1].attack) ? arr[1].score++ : arr[0].score++;

		//this.toggleBattleground(arr);
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
		});
	}


	/*
	*	Generic request function
	*/
	this.request = function(url, data, method, cb)
	{
		// Set some defaults
		var self = this;
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
				// If we're bad
				if(d.statusCode >= 400) // very custom to this api
				{
					alert(d.message);
					return false;
				}
				else
				{
					cb(d);
				}
			},
			onRequest: function()
			{
				self.startPreloader();
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
				'left': "42%",
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
					var image = (v.image) ? v.image : '';
					var elem = new Element('li', {
						class: 'card ' + v.type + " " + v.id,
						html: 	"<h3>" + v.name + "</h3>" +
								"<img src='" + image + "' alt='" + v.name + "' width='164' height='164' />" + 
								"<p>" + self.cpWord(v.type) + "</p>" +
								/*"<ul>" +
								"<li>Speed - " + v.speed + "</li>" +
								"<li>Attack - " + v.attack + "</li>" + 
								"<li>Strength - " + v.strength + "</li>" + 
								"</ul>" +*/
								"<a href='javascript:void(0)' class='button red destroy' id='" + v.id + "'>Destroy</a>"
					});

					// new element
					elem.inject(holder, 'top');

					// push existing items into a mix array,
					// we dont want to show things twice
					self.visible_supers.push(v.id);
				}
			});

			$$('.button.destroy').addEvent('click', function(e)
			{
				var id = e.id || this.id;
				
				// set the endpoint
				var endpoint = self.api_url + "/api/drop";
				var data = { "id": id }

				// make a request
				self.request(endpoint, data, "DELETE", function(d)
				{
					// delete the element
					var el = $$('.card.' + id);
					el.destroy();

					// delete from the mix array and from supers
    				position = self.visible_supers.indexOf(id);
					if (position)
					{
						self.visible_supers.splice(position, 1);
						self.supers.splice(position, 1);
					}
				});
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
	*  Create some info text on screen
	*/
	this.alert = function(string)
	{
		var box = $(this.alert_box);

		// show a box and hide it
		box.set("text", string);
		//box.tween("")
	}

	/*
	*
	*/
	this.startPreloader = function()
	{
		// maake sure we have something here to show ip sytuff
		// Create a preloading tween
		var self = this;
		var size = window.getSize();
		this.animating = true;
		
		// Set preloader tween
		$('preloader').set('tween', 
		{
			duration: '250',
			onComplete: function()
			{
				self.animating = false;
				self.endPreloader();
			}
		});
		
		// Start preloader
		$('preloader').tween("width", [0, size.x]);
	}

	/*
	*	End preloader
	*/
	this.endPreloader = function()
	{
		// maake sure we have something here to show ip sytuff
		// Create a preloading tween
		var self = this;
		var size = window.getSize();
		this.animating = true;
		
		// Set preloader tween
		$('preloader').set('tween', 
		{
			duration: '250',
			onComplete: function()
			{
				self.animating = false;
				this.stop();
			}
		});
		
		// Start preloader
		$('preloader').tween("left", [0, size.x]);
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