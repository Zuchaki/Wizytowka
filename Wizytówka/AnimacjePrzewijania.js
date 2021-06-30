jQuery(function($)
	{
		$.scrollTo(0);



		$('#kontakt').click(function(){ $.scrollTo($('#articleKontakt'), 500 ); });
		$('#kontaktp').click(function(){ $.scrollTo($('#articleKontakt'), 500 ); });

		$('#JS').click(function(){ $.scrollTo($('#articleJSProjekt'), 1000 ); });
		$('#JSp').click(function(){ $.scrollTo($('#articleJSProjekt'), 500 ); });

		$(window).scroll(function()
		{


			if($(window).scrollTop()!=0)
				{
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//JS
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					$('#JSp').fadeIn();
					document.getElementById('JSp').style.animationName="goInJSp";
					setTimeout(function(){document.getElementById('JSp').style.display="fixed";}, 1900);
					document.getElementById('JS').style.display="none";
					document.getElementById('JS').style.animationName="none";
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//O Mnie
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					$('#omniep').fadeIn();
					document.getElementById('omniep').style.animationName="goInomniep";
					setTimeout(function(){document.getElementById('omniep').style.display="fixed";}, 1900);
					document.getElementById('omnie').style.display="none";
					document.getElementById('omnie').style.animationName="none";
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Szkoła
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					$('#szkolap').fadeIn();
					document.getElementById('szkolap').style.animationName="goInszkolap";
					setTimeout(function(){document.getElementById('szkolap').style.display="fixed";}, 1900);
					document.getElementById('szkola').style.display="none";
					document.getElementById('szkola').style.animationName="none";
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Kontakt
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					$('#kontaktp').fadeIn();
					document.getElementById('kontaktp').style.animationName="goInkontaktp";
					setTimeout(function(){document.getElementById('kontaktp').style.display="fixed";}, 1900);
					document.getElementById('kontakt').style.display="none";
					document.getElementById('kontakt').style.animationName="none";
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Facebook
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					$('#facebookp').fadeIn();
					document.getElementById('facebookp').style.animationName="goInfacebookp";
					setTimeout(function(){document.getElementById('facebookp').style.display="fixed";}, 1900);
					document.getElementById('facebook').style.display="none";
					document.getElementById('facebook').style.animationName="none";

				}	
			else
				{
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//JS
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					document.getElementById('JSp').style.animationName="goOutJSp";
					setTimeout(function(){document.getElementById('JSp').style.display="none";}, 1900);
					setTimeout(function(){document.getElementById('JS').style.display="block";}, 1900);
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//O Mnie
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					document.getElementById('omniep').style.animationName="goOutomniep";
					setTimeout(function(){document.getElementById('omniep').style.display="none";}, 1900);
					setTimeout(function(){document.getElementById('omnie').style.display="block";}, 1900);
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Szkoła
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					document.getElementById('szkolap').style.animationName="goOutszkolap";
					setTimeout(function(){document.getElementById('szkolap').style.display="none";}, 1900);
					setTimeout(function(){document.getElementById('szkola').style.display="block";}, 1900);
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Kontakt
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					document.getElementById('kontaktp').style.animationName="goOutkontaktp";
					setTimeout(function(){document.getElementById('kontaktp').style.display="none";}, 1900);
					setTimeout(function(){document.getElementById('kontakt').style.display="block";}, 1900);
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					//Kontakt
					//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					document.getElementById('facebookp').style.animationName="goOutfacebookp";
					setTimeout(function(){document.getElementById('facebookp').style.display="none";}, 1900);
					setTimeout(function(){document.getElementById('facebook').style.display="block";}, 1900);
				}

		});

	});