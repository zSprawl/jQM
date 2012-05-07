
$(document).ready( function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    window.addEventListener("resize", orientationChange, false);
    childBrowser = ChildBrowser.install();
});

function orientationChange() {
    var nativeControls = window.plugins.nativeControls;
    nativeControls.resizeTabBar();
}

function onDeviceReady() {
    newLoc = location.href.substring(0, location.href.lastIndexOf("/")+1);
    
    // Initializating TabBar
    nativeControls = window.plugins.nativeControls;
    nativeControls.createTabBar();

    // Back Button
  nativeControls.createTabBarItem(
    "back",
    "Back",
    "www/images/arrow_right.png",
    {"onSelect": function() {
        history.back();
        nativeControls.selectTabBarItem("");
    }}
  );
  
  // Home tab
  nativeControls.createTabBarItem(
    "restart",
    "Restart",
    "www/images/home.png",
    {"onSelect": function() {
        if (location.href != (newLoc+"index.html")) {
            $.mobile.changePage( newLoc+"index.html", { transition: 'flip reverse', reloadPage: 'true' } );
        }
        nativeControls.selectTabBarItem("");
    }}
  );
  
  // About tab
  nativeControls.createTabBarItem(
    "about",
    "About",
    "www/images/z.png",
    {"onSelect": function() {
        childBrowser.showWebPage( 'http://zsprawl.com/about/index.html' );
    }}
  );
    // Compile the TabBar
    nativeControls.showTabBar();
    nativeControls.showTabBarItems("back", "restart", "about");
}