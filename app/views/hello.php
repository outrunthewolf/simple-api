<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
    
    <!-- Javascript -->
    <script type="text/javascript" src="javascript/mootools-core-1.4.5.js"></script>
    <script type="text/javascript" src="javascript/mootools-more-1.4.0.1.js"></script>
    <script type="text/javascript" src="javascript/main.js"></script>

    <style>
        @import url(http://fonts.googleapis.com/css?family=Sigmar+One);

        body {
            margin:0;
            font-family:'Lato', sans-serif;
            text-align:center;
            padding: 0px;
            margin: 0px;
            background: #333;
        }

        .container {
            /*
            background: linear-gradient(#dd2424 49%, transparent 49%),
            linear-gradient(-45deg, white 33%, transparent 33%) 0 50%,
            white linear-gradient(45deg, white 33%, #dd2424 33%) 0 50%;
            background-repeat: repeat-x;
            background-size: 1px 100%, 40px 40px, 40px 40px;
            height: 450px;
            */
        }

        h1 {
            color: #fff;
            font-family: "Sigmar One";
            padding: 0px;
            margin: 0px;
            font-size: 45px;
        }

        h3 {
            font-size: 30px;
            color: #000;
            margin: 0px;
            padding: 8px;
        }

        p {
            font-size: 14px;
            line-height: 18px;

        }

        .fl {
            float: left;
        }

        .fr {
            float: right;
        }

        .holder {
            width: 980px;
            margin: 0px auto;
        }


        /* Buttons */
        a.button, input.button {
            color: #fff;
            font-family: "Sigmar One";
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            padding: 15px;
            text-decoration: none;
            cursor: pointer;
            border: none;
        }
        @-webkit-keyframes greenPulse {
            from { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
            50% { background-color: #91bd09; -webkit-box-shadow: 0 0 18px #91bd09; }
            to { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
        }
        a.green.button {
            -webkit-animation-name: greenPulse;
            -webkit-animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
        }

        @-webkit-keyframes redPulse {
            from { background-color: #fd3f58; -webkit-box-shadow: 0 0 9px #333; }
            50% { background-color: #bb041c; -webkit-box-shadow: 0 0 18px #bb041c; }
            to { background-color: #fd3f58; -webkit-box-shadow: 0 0 9px #333; }
        }
        a.red.button {
            -webkit-animation-name: redPulse;
            -webkit-animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
        }

        @-webkit-keyframes bluePulse {
            from { background-color: #044e76; -webkit-box-shadow: 0 0 9px #333; }
            50% { background-color: #0979b6; -webkit-box-shadow: 0 0 18px #0979b6; }
            to { background-color: #044e76; -webkit-box-shadow: 0 0 9px #333; }
        }
        a.blue.button, input.blue.button {
            -webkit-animation-name: bluePulse;
            -webkit-animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
        }

        /* cards */
        .card {
            background: #fff;
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            min-width: 170px;
            max-width: 200px;
            padding: 15px;

            -moz-box-shadow: 1px 3px 15px #A7A7A7;
            -webkit-box-shadow: 1px 3px 15px #A7A7A7;
            box-shadow: 1px 3px 15px #A7A7A7;
        }

        .card.villain {
            border-top: solid 5px #bb041c;
        }

        .card.hero {
             border-top: solid 5px #0979b6;
        }

        /* overlay */
        .overlay {
            display: none;
            background: rgba(54,54,54,0.8);
        }

        /* Form stuff */
        form label {
            display: block;
            padding: 5px;
        }

        form input {
            padding:10px;
        }

        footer p {
            color: #fff;
        }

        /* superbox */
        #super_box {
            display: block;
            height: 50px;
            width: 50px;
            background: #333;
            position: absolute;
            cursor: pointer;
            top: 300px;
            left: 50%;
            z-index: 7;
        }

        /* hero cards */
        #super_holder {
            display: none;
            list-style-type: none;
            max-width: 760px;
        }
        #super_holder li {
            float: left;
            margin: 10px;
        }

        /* preloader */
        #preloader {
            height: 64px;
            width: 64px;
            background: url('images/477.GIF');
            background-size: 64px 64px;
            background-repeat: no-repeat;
            position: fixed;
            background-color: #fff;
            left: 0px;
            top: 35%;
            width:100%;
            background-position: top center;
            z-index: 10;
        }


    </style>
</head>
<body>
<script>
    window.addEvent('domready', function() {
        superpeeps.init();
    });
</script>
    <div class="container">
        <div class="holder">

            <!-- Header -->
            <header>
                <h1>The Box</h1>
                <p>Create you own Superheros or Supervillains, and make them battle it out!</p>
            </header>
            
            <!-- Main bit -->
            <div class="main">

                <!-- Buttons -->
                <a href="javascript:void(0)" class="green button fl super hero" id="hero">Create a Hero!</a>
                <a href="javascript:void(0)" class="red button fr super villain" id="villain">Create a Villain!</a>

                <!-- Box -->
                <div id="super_box"></div>

                <!-- A Card -->
                <ul id="super_holder"></ul>

                <!-- Create a hero form -->
                <div id="form_holder" class="form card" style="display: none;">
                    <h3 class="type"></h3>
                    <form id="super_form" method="post" > 
                        <label for="c_name">Name</label>
                        <input type="text" id="c_name" name="c_name" />

                        <label for="c_email">Your Email (optional)</label>
                        <input type="text" id="c_email" name="c_email" />

                        <p>Your Supers abilities will be populated automagically when you create them.</p>

                        <input type="submit" class="blue button" value="Create!" onclick="javascript:void(0)" />
                        <input type="hidden" name="c_type" value="" />
                    </form>
                </div>

            </div>

            <!-- Footer -->
            <footer>
                <p>&copy; 2013</p> 
            </footer>

            <div id="overlay" class="overlay"></div>
            <div id="preloader" class="preloader"></div>
            <div id="alert" class="alert"></div>

        </div>
    </div>
</body>
</html>
