
	var setMiesiac;		//elementy stałe w funkcji 
	var setRok;
	var dzisiejszyDzien;
	var dzisiejszyMiesiac;
	var dzisiejszyRok;

	function loadmiesiac()	//pobiera dzisiejszy miesiac
	{
		var setNic= new Date();
		setMiesiac=(setNic.getMonth())+1;
	}

	function loadrok()		//pobiera dzisiejszy rok
	{
		var setNic= new Date();
		setRok=setNic.getFullYear();
	}

	function loaddzisiaj()	//pobiera dzisiejszy dzien, rok, miesiąc
	{
		var setNic= new Date();
		dzisiejszyDzien=setNic.getDate();
		dzisiejszyMiesiac=(setNic.getMonth())+1;
		dzisiejszyRok=setNic.getFullYear();
	}

	function nextMiesiac()	//zwiększa mieisąc o 1 (miesiąc w przód)
	{
		setMiesiac++;
	if(setMiesiac==13)
	{
		setMiesiac=1;
		setRok++;
	}
							
		for(var i=0; i<42; i++)	//zerowanie kalendarza podczas zmiany miesiąca
	{

			document.getElementsByClassName("kalendarz")[i].style.backgroundColor="rgba(0, 0, 0, 0)"; 
			document.getElementsByClassName("kalendarz")[i].style.border="6px solid #d4d4d4";
			document.getElementsByClassName("kalendarz")[i].innerHTML="";
	}
	daty();
	}
	function backMiesiac()	//zmniejszanie mieisąc o 1 (miesiąc w tył)
	{
		setMiesiac--;
	if(setMiesiac==0)
	{
		setMiesiac=12;
		setRok--;
	}
		//zerowanie
		for(var i=0; i<42; i++)	//zerowanie kalendarza podczas zmiany miesiąca
	{

			document.getElementsByClassName("kalendarz")[i].style.backgroundColor="rgba(0, 0, 0, 0)"; 
			document.getElementsByClassName("kalendarz")[i].style.border="6px solid #d4d4d4";
			document.getElementsByClassName("kalendarz")[i].innerHTML="";
	}
	daty();
	}
	

function odKiedyZaczac()	//sprawdza aktualny dzien gdzie sob=0, pon=1 a nd=6. Mówi od której komurki zacząc wypisywanie
{
	var setDzien=1;
	

	var day = new Date(setRok+"-"+setMiesiac+"-"+setDzien);

	
	var dzienTygdnia=(day.getDay())-1;
	if(dzienTygdnia==-1)
	{
		dzienTygdnia=6;
	}

	return dzienTygdnia-1;
}

function miesiace()		//ile miesiac ma dni
{
	switch(setMiesiac)
	{
		case 1:
		return 31;
		break;

		case 2:
		
		if(((setRok % 4 == 0) && (setRok % 100 != 0)) || (setRok % 400 == 0))
		{
			return 29;
		}
		else 
		{
			return 28;
		}

		break;

		case 3:
		return 31;
		break;
		case 4:
		return 30;
		break;
		case 5:
		return 31;
		break;
		case 6:
		return 30;
		break;
		case 7:
		return 31;
		break;
		case 8:
		return 31;
		break;
		case 9:
		return 30;
		break;
		case 10:
		return 31;
		break;
		case 11:
		return 30;
		break;
		case 12:
		return 31;
		break;

	}


}

function nazwaMiesiaca(funkcjaMiesiaca)  //(element dotyczy górnego lewego rogu) sprawdza jaka to nazwa miesiąca
{
	var setNic= new Date();
	var numerMiesiaca=(setNic.getMonth())+1;
	var rok=setNic.getFullYear();
	switch(funkcjaMiesiaca)
	{
		case 1:
		return "Styczeń";
		break;

		case 2:
		return "Luty";
		break;

		case 3:
		return "Marzec";
		break;
		case 4:
		return "Kwiecień";
		break;
		case 5:
		return "Maj";
		break;
		case 6:
		return "Czerwiec";
		break;
		case 7:
		return "Lipiec";
		break;
		case 8:
		return "Sierpień";
		break;
		case 9:
		return "Wrzesień";
		break;
		case 10:
		return "Październik";
		break;
		case 11:
		return "Listopad";
		break;
		case 12:
		return "Jacek Grudzień";
		break;

	}


}

function daty() 	//główna jednostkawykonawcza, łączy wszystkie funkcje i wyświetlaje na ekranie
{
	var setDzien=1;	//dzień od którego zacząc wypisywanie

	for(var i=0; i<42; i++) //zeruje obrazki (stworzone z myślą o przyszłym rwijaniu kalendarza)
	{
			document.getElementsByClassName("kalendarz")[i].style.backgroundImage="none"; //img zerowanie
			document.getElementsByClassName("kalendarz")[i].style.backgroundSize="none"; //img zerowanie
			document.getElementsByClassName("kalendarz")[i].innerHTML=""; //img zerowanie
			document.getElementsByClassName("kalendarz")[i].style.border="6px solid #222222";
	}

	var zliczanieDniNumerClassy=odKiedyZaczac();	//od której komurki kalendarza zacząć (przypisanie zmiennej wynik funkcji odKiedyZaczac())
	
	for(var a=0; a<=zliczanieDniNumerClassy; a++)   //ukrywa nam wszystkie nie wykorzystane w danym miesiącu komurki na stronie (ukrywa: obramowania i cursory) w części przed elementami wyświetlonymi
	{
			document.getElementsByClassName("kalendarz")[a].style.border="6px solid #222222";
			document.getElementsByClassName("kalendarz")[a].style.cursor="auto";
	}
	for(var a=miesiace()+zliczanieDniNumerClassy+1; a<42; a++)	//ukrywa nam wszystkie nie wykorzystane w danym miesiącu komurki na stronie (ukrywa: obramowania i cursory) w części po elementach wyświetlonych
	{
			document.getElementsByClassName("kalendarz")[a].style.border="6px solid #222222";
			document.getElementsByClassName("kalendarz")[a].style.cursor="auto";
			//#d4d4d4 - kolor wersi 1.21
	}

	for(var i=0; i<miesiace(); i++) // wypełnia komurki kalendarza (za pomocąfunkcji miesiace() sprawdza ile komurek ma wypełnić)
	{
	zliczanieDniNumerClassy++;	//każdorazowo zwiększa [] komórki (aktywuje następną)

	var day = new Date(setRok+"-"+setMiesiac+"-"+setDzien);
	var wolneDni=day.getDay();		//sprawdza jaki aktualnei jest dzień  sob=0 nd=6

	document.getElementById("rokImiesiac").innerHTML=nazwaMiesiaca(setMiesiac)+"  "+setRok; //w górnym lewym rogu rok i miesiac
	document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].innerHTML="</br>"+setDzien+"</br>";	//numer dnia w divie
	document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.backgroundColor="rgba(50, 50, 50, 1)"; //szare(dni tygodnia)
	document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.border="6px solid #222222";
	document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.cursor="pointer";
		

	if(wolneDni==0||wolneDni==6)	//sprawdza czy aktualny dzień jest równy 0 lub 6 jeśli tak to wyświetla go na czerwono
	{
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.backgroundColor="rgba(255, 62, 62, 1)"; //czerowne(wolne dni)
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.border="6px solid #222222";
	}
	if(setDzien==dzisiejszyDzien&&setMiesiac==dzisiejszyMiesiac&&setRok==dzisiejszyRok) //jeśli dzisiejszyrok, dzisiejszydzień, dzisiejszymiesiąc jest równy aktualnemu załadowanemu (setRok, setDzien, set Mieisac) to wyświetlatakomórkęna niebiesko
	{
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.backgroundColor="rgba(31, 85, 183, 0.7)"; //niebieski (dzisiaj)
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.border="6px solid #222222";
	}
	/*
	if(setDzien==17&&setMiesiac==10&&setRok==2017) //możliwość wstawienia obrazka w danym dniu (w odpowiedznie sety wpisujesz w którym dniu, roku, miesiącu ma się wyświetlać obrazek)
	{
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.backgroundImage="url('elex.png')"; //tu wpisujesz nazwę i lokalizacę obrazka
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.backgroundSize="100% 100%"; 
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].innerHTML=""; 
			document.getElementsByClassName("kalendarz")[zliczanieDniNumerClassy].style.border="6px solid #222222";
	}
	*/
	setDzien++; //zwiększa numer wpisany w diva komurek kalendarza o 1, tym samym zwiększa aktualny dzieńo 1;
	}

}


	function loader()
	{
		loaddzisiaj();
		loadmiesiac();
		loadrok();
		daty();
	}