var currentPage;
var subHeadTxt = {
	agenda: "Dagagenda voor 3-14-2015",
	contact: "Contactgegevens",
	kaart: "Algemene kaart Rome"
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
    pageSwitch: function(page, resetZoom) {
    	var pageToLoad = document.getElementById(page);
    	var subHead = document.getElementById('sub-head');
    	var tabList = document.getElementsByClassName('tab');
    	var tab = document.getElementById('tab-' + page);
    	
    	if (resetZoom) {
    		viewport.content = "user-scalable=1, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi";
    	}
    	
    	currentPage.style.display = 'none';
    	pageToLoad.style.display = 'block';
    	
    	for (i = 0; i <tabList.length; i++) {
    		tabList[i].className = "tab";
    	}
    	tab.className = "tab selected";
    	
    	subHead.innerHTML = subHeadTxt[page];
    	
    	currentPage = pageToLoad;
    },
    
    // Open Image
    //
    // Opens image page and allows zooming.
    openIMG: function(id) {
    	var viewport = document.getElementById('viewport');
		
    	app.pageSwitch("page-" + id);
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
    }
};
