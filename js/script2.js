

var clock;
var t = new Date();
var startC = beforeTommorow;
var beforeTommorow = parseInt((t.getHours())*60*60+(t.getMinutes())*60+(t.getSeconds()));

var k = 43200;

if( beforeTommorow > 72000)
	k = 72000;

if( beforeTommorow < 28800)
	k = 0;

if ((beforeTommorow > 28800) && (beforeTommorow <43200))
	k = 28800;

var interval= k - beforeTommorow;
startC = 32400 + interval;

	clock = $('#clock2').FlipClock({
				clockFace: 'DailyCounter',
				autoStart: true,
				callbacks: {
					stop: function() {
						clock.setTime(startC);
						clock.setCountdown(true);
						clock.start();
					}
				}
		});

		clock.setTime(startC);
		clock.setCountdown(true);
		clock.start();
