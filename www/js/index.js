var currentPage;
var subHeadTxt = {
	agenda: "Dagagenda voor 3-14-2015",
	contact: "Contactgegevens",
	kaart: "Algemene kaart Rome",
	101: "Vrijdag 24 april - Basiliek van Santa Maria Maggiore",
	102: "Vrijdag 24 april - Santa Prassede",
	103: "Vrijdag 24 april - Basiliek van Santa Pudenziana",
	104: "Vrijdag 24 april - San Pietro in Vincoli",
	201: "Zaterdag 25 april - Fori Imperiali",
	202: "Zaterdag 25 april - Forum Romanum",
	203: "Zaterdag 25 april - Palatijn",
	204: "Zaterdag 25 april - Colosseum",
	205: "Zaterdag 25 april - San Clemente",
	206: "Zaterdag 25 april - San Giovanni in Laterano",
	207: "Zaterdag 25 april - Scala Santa",
	301: "Zondag 26 april - Villa Giulia",
	302: "Zondag 26 april - Thermen van Diocletianus",
	303: "Zondag 26 april - Santa Maria degli Angeli e dei Martiri",
	304: "Zondag 26 april - Santa Maria della Vittoria",
	305: "Zondag 26 april - Ostia Antica",
	306: "Zondag 26 april - San Paolo fuori le Mura",
	401: "Maandag 27 april - Piazza Campo de Fiori",
	402: "Maandag 27 april - Theater van Pompeius",
	403: "Maandag 27 april - Palazzo Spada",
	404: "Maandag 27 april - Via Giulia",
	405: "Maandag 27 april - Villa Farnesina",
	406: "Maandag 27 april - Basiliek van Santa Maria in Trastevere",
	407: "Maandag 27 april - Tibereiland",
	408: "Maandag 27 april - Cloaca Maxima",
	409: "Maandag 27 april - Santa Maria in Cosmedin",
	410: "Maandag 27 april - La Bocca della Verità",
	411: "Maandag 27 april - Theater van Marcellus",
	412: "Maandag 27 april - Forum Boarium",
	501: "Dinsdag 28 april - Castel Sant' Angelo",
	502: "Dinsdag 28 april - Friezenkerk",
	503: "Dinsdag 28 april - Sint-Pietersplein",
	504: "Dinsdag 28 april - Vaticaanse Musea",
	505: "Dinsdag 28 april - Fontana della Pigna",
	506: "Dinsdag 28 april - Sarcofagi di Constantina e S.Elena",
	507: "Dinsdag 28 april - Laocoonte",
	508: "Dinsdag 28 april - Apollo Belvedere",
	509: "Dinsdag 28 april - Apoxyomenos",
	510: "Dinsdag 28 april - Torso del Belvedere",
	511: "Dinsdag 28 april - Augusto di Prima Porta",
	512: "Dinsdag 28 april - Stanze di Raffaello",
	513: "Dinsdag 28 april - Cappella Sistina",
	514: "Dinsdag 28 april - Vaticaanse Bibliotheek",
	515: "Dinsdag 28 april - Pinacoteca",
	601: "Woensdag 29 april - Pompeï",
	701: "Donderdag 30 april - Piazza Navona",
	702: "Donderdag 30 april - Ara Pacis",
	703: "Donderdag 30 april - San Luigi dei Francesi",
	704: "Donderdag 30 april - Santa Maria sopra Minerva",
	705: "Donderdag 30 april - Sant'Ignazio",
	706: "Donderdag 30 april - Chiesa del Gesù",
	707: "Donderdag 30 april - Pantheon",
	708: "Donderdag 30 april - Piazza del Popolo",
	709: "Donderdag 30 april - Santa Maria de Popolo",
	710: "Donderdag 30 april - Pincio",
	711: "Donderdag 30 april - Villa Borghese"
};
var upperPage = {
	imgkaart: "kaart",
	101: "agenda",
	img101: "101",
	102: "agenda",
	img102: "102",
	103: "agenda",
	img103: "103",
	104: "agenda",
	img104: "104",
	201: "agenda",
	img201: "201",
	202: "agenda",
	img202: "202",
	203: "agenda",
	img203: "203",
	204: "agenda",
	img204: "204",
	205: "agenda",
	img205: "205",
	206: "agenda",
	img206: "206",
	207: "agenda",
	img207: "207",
	301: "agenda",
	img301: "301",
	302: "agenda",
	img302: "302",
	303: "agenda",
	img303: "303",
	304: "agenda",
	img304: "304",
	305: "agenda",
	img305: "305",
	306: "agenda",
	img306: "306",
	401: "agenda",
	img401: "401",
	402: "agenda",
	img402: "402",
	403: "agenda",
	img403: "403",
	404: "agenda",
	img404: "404",
	405: "agenda",
	img405: "405",
	406: "agenda",
	img406: "406",
	407: "agenda",
	img407: "407",
	408: "agenda",
	img408: "408",
	409: "agenda",
	img409: "409",
	410: "agenda",
	img410: "410",
	411: "agenda",
	img411: "411",
	412: "agenda",
	img412: "412",
	501: "agenda",
	img501: "501",
	502: "agenda",
	img502: "502",
	503: "agenda",
	img503: "503",
	504: "agenda",
	img504: "504",
	505: "agenda",
	img505: "505",
	506: "agenda",
	img506: "506",
	507: "agenda",
	img507: "507",
	508: "agenda",
	img508: "508",
	509: "agenda",
	img509: "509",
	510: "agenda",
	img510: "510",
	511: "agenda",
	img511: "511",
	512: "agenda",
	img512: "512",
	513: "agenda",
	img513: "513",
	514: "agenda",
	img514: "514",
	515: "agenda",
	img515: "515",
	601: "agenda",
	img601: "601",
	701: "agenda",
	img701: "701",
	702: "agenda",
	img702: "702",
	703: "agenda",
	img703: "703",
	704: "agenda",
	img704: "704",
	705: "agenda",
	img705: "705",
	706: "agenda",
	img706: "706",
	707: "agenda",
	img707: "707",
	708: "agenda",
	img708: "708",
	709: "agenda",
	img709: "709",
	710: "agenda",
	img710: "710",
	711: "agenda",
	img711: "711"
};
var app = {
	
    // Application Constructor
    //
    // Fired once the HTML has loaded.
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup.
    bindEvents: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
        document.addEventListener("backbutton", app.onBackButton, false);
    },
    
    // deviceready Event Handler
    //
    // Triggered when the device is ready.
    onDeviceReady: function() {
      	app.setSizes();
        currentPage = document.getElementById('agenda');
    },
    
    onBackButton: function() {
    	if (upperPage[currentPage.id]) {
    		app.pageSwitch(upperPage[currentPage.id]);
    	}
    },
    
    // Switch Pages
    //
    // Unloads current page and loads up new page.
    pageSwitch: function(page) {
    	var pageToLoad = document.getElementById(page);
    	var head = document.getElementById('head');
    	var subHead = document.getElementById('sub-head');
    	var tabList = document.getElementsByClassName('tab');
    	var tab = document.getElementById('tab-' + page);
    	var viewport = document.getElementById('viewport');
    	
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    	document.body.scrollTop = 0;
    	
    	currentPage.style.display = 'none';
    	pageToLoad.style.display = 'block';
    	
    	for (i = 0; i <tabList.length; i++) {
    		tabList[i].className = "tab";
    	}
    	if (tab) {
    		tab.className = "tab selected";
    	}
    	
    	head.style.display = "block";
    	subHead.style.display = "block";
    	subHead.innerHTML = subHeadTxt[page];
    	
    	currentPage = pageToLoad;
    },
    
    // Open Image
    //
    // Opens image page and allows zooming.
    openIMG: function(id) {
    	var viewport = document.getElementById('viewport');
    	var head = document.getElementById('head');
    	var subHead = document.getElementById('sub-head');

    	app.pageSwitch("img" + id);
    	head.style.display = "none";
    	subHead.style.display = "none";
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=10, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    },
    
    // Set Sizes
    //
    // Adjusts the size of 'page' divs to fill the entire screen and resizes zoomable images to fit the screen.
    setSizes: function() {
    	var height = screen.height;
    	var width = screen.width;
        var imgList = document.getElementsByClassName('big-img');
		
        for (i = 0; i < imgList.length; i++) {
            if (imgList[i].height / imgList[i].width > height / width) {
                imgList[i].height = height;
            } else {
                imgList[i].width = width;
            }
        }
    },
    
    // Expand Activity
    //
    // Expands / collapses a day on the agenda.
    expand: function(n) {
    	var root = document.getElementsByClassName('activity')[n];
    	var children = document.getElementsByClassName('child ' + n);
    	var arrow = document.getElementsByClassName('expand')[n];
    	
    	if (root.className == "activity expanded") {
    		root.className = "activity";
    		arrow.innerHTML = ">";
    	} else {
    		root.className = "activity expanded";
    		arrow.innerHTML = "v";
    	}
    	
    	for (i = 0; i < children.length; i++) {
    		if (root.className == "activity expanded") {
    			children[i].style.display = "block";
    		} else {
    			children[i].style.display = "none";
    		}
    	}
    }
};