<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
    
    <!-- Javascript -->
    <script type="text/javascript" src="javascript/mootools-core-1.4.5.js"></script>
    <script type="text/javascript" src="javascript/mootools-more-1.4.0.1.js"></script>
    <script type="text/javascript" src="javascript/main.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/main.css" />
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
                <h1>Super Box</h1>
                <!--<p>Create you own Superheros or Supervillains, and make them battle it out!</p>-->
            </header>
            
            <!-- Main bit -->
            <div class="main">

                <!-- Buttons -->
                <a href="javascript:void(0)" class="blue button fl super hero" id="hero">Create a Hero!</a>
                <a href="javascript:void(0)" class="red button fr super villain" id="villain">Create a Villain!</a>

                <!-- Box -->
                <div id="super_box">
                    <div id="cube"></div>
                </div>

                <!-- All Cards -->
                <ul id="super_holder"></ul>

                <!-- Battleground
                <div id="battleground"></div>
                -->

                <!-- Create a hero form -->
                <div id="form_holder" class="form card" style="display: none;">
                    <h3 class="type"></h3>
                    <form id="super_form" method="post" > 
                        <label for="c_name">Name</label>
                        <input type="text" id="c_name" name="c_name" />

                        <label for="c_email">Your Email (optional)</label>
                        <input type="text" id="c_email" name="c_email" />

                        <p>Your Supers abilities will be populated automagically when you create them.</p>

                        <input type="submit" class="green button" value="Create!" onclick="javascript:void(0)" />
                        <input type="hidden" name="c_type" value="" />
                    </form>
                </div>
            </div>

            <!-- Fight
            <a class="button green" id="fight">Fight!</a>
            -->

            <!-- Various -->
            <div id="overlay" class="overlay"></div>
            <div id="preloader" class="preloader"></div>
            <div id="alert" class="alert"></div>

        </div>
    </div>
</body>
</html>
