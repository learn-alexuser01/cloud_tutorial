/*
    Defining our variables
    world and viewport are DOM elements,
    worldXAngle and worldYAngle are floats that hold the world rotations,
    d is an int that defines the distance of the world from the camera 
*/
var world = document.getElementById( 'world' ),
    viewport = document.getElementById( 'viewport' ),
    worldXAngle = 0,
    worldYAngle = 0,
    d = 0;

/*
	Event listener to transform mouse position into angles 
    from -180 to 180 degress, both vertically and horizontally
*/
window.addEventListener( 'mousemove', function( e ) {
    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 360;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 360;
    updateView();
} );
window.addEventListener('mousewheel', onContainerMouseWheel);
window.addEventListener('DOMMouseScroll', onContainerMouseWheel);

/*
    Changes the transform property of world to be
    translated in the Z axis by d pixels,
    rotated in the X axis by worldXAngle degrees and
    rotated in the Y axis by worldYAngle degrees.
*/

function updateView() {
    var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
    world.style.webkitTransform = t;
}



///////////////
/*
    objects is an array of cloud bases
    layers is an array of cloud layers
*/
var objects = [],
    layers = [];

/*
    Clears the DOM of previous clouds bases 
    and generates a new set of cloud bases
*/
function generate() {
    objects = [];
    layers = [];
    if ( world.hasChildNodes() ) {
        while ( world.childNodes.length >= 1 ) {
            world.removeChild( world.firstChild );       
        } 
    }
    //Create j amount of clouds
    for( var j = 0; j < 20; j++ ) {
    	//Push cloud created from createCloud() function to objects array
        objects.push( createCloud() );
    }
}
generate();
/*
    Creates a single cloud base: a div in world
    that is translated randomly into world space.
    Each axis goes from -256 to 256 pixels.
*/
function createCloud() {

    var div = document.createElement( 'div'  );
    div.className = 'cloudBase';
	var random_x = 256 - ( Math.random() * 512 );
	var random_y = 256 - ( Math.random() * 512 );
	var random_z = 256 - ( Math.random() * 512 );

    var t = 'translateX( ' + random_x + 'px ) translateY( ' + random_y + 'px ) translateZ( ' + random_z + 'px )';
    div.style.webkitTransform = t;
    var colorR = Math.floor(Math.random()*255);
    var colorG = Math.floor(Math.random()*255);
    var colorB = Math.floor(Math.random()*255)
    div.style.backgroundColor = "rgb(" + colorR+"," + colorG+ ","+ colorB + ")";
    world.appendChild( div );
    
    return div;
}

//function to determine z translation
function onContainerMouseWheel( event ) {
		
	event = event ? event : window.event;
	d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
	updateView();
	
}



	
	// var layers = [],
	// 	objects = [],
		
	// 	world = document.getElementById( 'world' ),
	// 	viewport = document.getElementById( 'viewport' ),
		
	// 	d = 0,
	// 	p = 400,
	// 	worldXAngle = 0,
	// 	worldYAngle = 0;
	
	// viewport.style.webkitPerspective = p;
	// viewport.style.MozPerspective = p;
	// viewport.style.oPerspective = p;
	
	// generate();
	
	// function createCloud() {
	
	// 	var div = document.createElement( 'div'  );
	// 	div.className = 'cloudBase';
	// 	var x = 256 - ( Math.random() * 512 );
	// 	var y = 256 - ( Math.random() * 512 );
	// 	var z = 256 - ( Math.random() * 512 );
	// 	var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';
	// 	div.style.webkitTransform = t;
	// 	div.style.MozTransform = t;
	// 	div.style.oTransform = t;
	// 	world.appendChild( div );
		
	// 	return div;
	// }
	
	// window.addEventListener( 'mousewheel', onContainerMouseWheel );
	// window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel ); 

	// window.addEventListener( 'mousemove', function( e ) {
	// 	worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
	// 	worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
	// 	updateView();
	// } );
	
	// function generate() {
	// 	objects = [];
	// 	if ( world.hasChildNodes() ) {
	// 		while ( world.childNodes.length >= 1 ) {
	// 			world.removeChild( world.firstChild );       
	// 		} 
	// 	}
	// 	for( var j = 0; j < 5; j++ ) {
	// 		objects.push( createCloud() );
	// 	}
	// }
	
	// function updateView() {
	// 	var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
	// 	world.style.webkitTransform = t;
	// 	world.style.MozTransform = t;
	// 	world.style.oTransform = t;
	// }
	
	// function onContainerMouseWheel( event ) {
			
	// 	event = event ? event : window.event;
	// 	d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
	// 	updateView();
		
	// }
	

	
