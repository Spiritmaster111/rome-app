var currentPage;
var subHeadTxt = {
	agenda: "Dagagenda voor 3-14-2015",
	contact: "Contactgegevens",
	kaart: "Algemene kaart Rome",
	
	401: "Maandag 27 april - Piazza Campo de Fiori",
	img401:"Maandag 27 april - Piazza Campo de Fiori"
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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    //
    // Triggered when the device is ready.
    onDeviceReady: function() {
      	app.setSizes();
        currentPage = document.getElementById('agenda');
    },
    
    // Switch Pages
    //
    // Unloads current page and loads up new page.
    pageSwitch: function(page) {
    	var pageToLoad = document.getElementById(page);
    	var subHead = document.getElementById('sub-head');
    	var tabList = document.getElementsByClassName('tab');
    	var tab = document.getElementById('tab-' + page);
    	var viewport = document.getElementById('viewport');
    	
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    	
    	currentPage.style.display = 'none';
    	pageToLoad.style.display = 'block';
    	
    	for (i = 0; i <tabList.length; i++) {
    		tabList[i].className = "tab";
    	}
    	if (tab) {
    		tab.className = "tab selected";
    	}
    	
    	subHead.innerHTML = subHeadTxt[page];
    	
    	currentPage = pageToLoad;
    },
    
    // Open Image
    //
    // Opens image page and allows zooming.
    openIMG: function(id) {
    	var viewport = document.getElementById('viewport');

    	app.pageSwitch("img" + id);
    	viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=10, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    },
    
    openActivity: function(id) {
    	app.pageSwitch("xml");
    	xml = openXML(id);
    	document.getElementById('naam').innerHTML = xml.getElementsByTagName("naam")[0].childNodes[0].nodeValue;
    	document.getElementById('info').innerHTML = xml.getElementsByTagName("info")[0].childNodes[0].nodeValue;
    	for (i = 0; i < xml.getElementsByTagName("extrainfo")[0].childNodes.length; i++) {
    		if (xml.getElementsByTagName("extrainfo")[0].childNodes[i].hasChildNodes()) {
    			document.getElementById('extrainfo').innerHTML += xml.getElementsByTagName("extrainfo")[0].childNodes[i].childNodes.nodeValue;
    		}
    		document.getElementById('extrainfo').innerHTML += xml.getElementsByTagName("extrainfo")[0].childNodes[i].nodeValue;
    	}
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