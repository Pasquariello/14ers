     buildNavBar();
//this is a function that dynamically adds my navigation bar to all of my pages
        function buildNavBar() {
            text = '',
            text += ' <nav class="navbar navbar-default"> ';
            text += ' <div class="container-fluid">';
            text += '   <div class="navbar-header">';
            text += '     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
            text += '       <span class="icon-bar"></span>';
            text += '       <span class="icon-bar"></span>';
            text += '      <span class="icon-bar"></span> ';
            text += '    </button>';
            text += '    <a class="navbar-brand" href="#">PeakScape</a>';
            text += '  </div>';
            text += '  <div class="collapse navbar-collapse" id="myNavbar">';
            text += '    <ul class="nav navbar-nav">';
            text += '      <li><a href="index.html">Map</a></li>';
            text += '      <li><a href="14erPlanningForm.html">Trip Planner</a></li> ';
            text += '    </ul>   ';
            text += '  </div>';
            text += ' </div>';
            text += ' </nav>';

            document.getElementById('nav').innerHTML = text;

        }