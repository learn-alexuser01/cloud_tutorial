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
    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
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
    for( var j = 0; j < 5; j++ ) {
        objects.push( createCloud() );
    }
}

/*
    Creates a single cloud base: a div in world
    that is translated randomly into world space.
    Each axis goes from -256 to 256 pixels.
*/
function createCloud() {

    var div = document.createElement( 'div'  );
    div.className = 'cloudBase';
    var t = 'translateX( ' + random_x + 'px ) \
        translateY( ' + random_y + 'px ) \
        translateZ( ' + random_z + 'px )';
    div.style.webkitTransform = t;
    world.appendChild( div );
    
    return div;
}

function onContainerMouseWheel( event ) {
		
	event = event ? event : window.event;
	d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
	updateView();
	
}
	
