<!DOCTYPE html>
<html lang="en">
<head>
        
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>We are ComingSoon...</title>

        <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,300,100,100italic,300italic,400italic,700,700italic">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/form-elements.css">
         
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/media-queries.css">
         
       
<style>

#clockdiv{
	color: #fff;
	display: inline-block;
	font-weight: 100;
	text-align: center;
}
#clockdiv > div {
    padding: 10px 15px 10px 15px;
    background: rgba(16, 16, 16, 0);
    display: inline-block;
    border-radius: 50%;
}
#clockdiv div > span:hover {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    background: #2aa53a;
    padding: 10px 15px 10px 15px;
    border: 1px solid #fff;
    display: inline-block;
    font-size: 85px;
    cursor:pointer;
}
#clockdiv div > span {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    padding: 10px 15px 10px 15px;
    border: 1px solid #fff;
    display: inline-block;
    font-size: 85px;
}

.smalltext {
    padding-top: 5px;
    font-size: 16px;
}
</style>
    </head>

    <body>
		
        <!-- Coming Soon -->
        <div class="coming-soon">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        	<div class="logo">
                        		<h1><a href="#">We are ComingSoon...</a></h1>
                        	</div>
                            <h2>UNDER MAINTENANCE</h2>
                            <p>
                            	For any queries please contact <br>Mob: +974 70736750
                            </p>
                            <div id="clockdiv">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <!-- Subscription form -->
        
        <!-- Javascript -->
        <script src="assets/js/jquery-1.11.1.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/jquery.countdown.min.js"></script>
        <script src="assets/twitter/jquery.tweet.min.js"></script>
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script src="assets/js/jquery.ui.map.min.js"></script>
        <script src="assets/js/scripts.js"></script>
<script>
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
</script>
    </body>
</html>