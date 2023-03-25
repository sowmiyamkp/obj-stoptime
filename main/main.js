function timer()
		{
			var time=new Date();
			console.log(time.toLocaleString());
		}
	let timeSet=setInterval(timer,2000);		
	function stoptimer(){
		clearInterval(timeSet);
	}
	console.log(timeSet);