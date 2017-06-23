/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;

	this.center = new THREE.Vector3();

	this.userZoom = true;
	this.userZoomSpeed = 1.0;

	this.userRotate = true;
	this.userRotateSpeed = 1.0;

	this.userPan = true;
	this.userPanSpeed = 2.0;

	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	this.minDistance = 0;
	this.maxDistance = Infinity;

	// 65 /*A*/, 83 /*S*/, 68 /*D*/
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40, ROTATE: 65, ZOOM: 83, PAN: 68 };

	// internals

	var scope = this;

	var EPS = 0.000001;
	var PIXELS_PER_ROUND = 1800;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var zoomStart = new THREE.Vector2();
	var zoomEnd = new THREE.Vector2();
	var zoomDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateRight = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta += angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	this.rotateDown = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta += angle;

	};
var _zoomVar = 0.95;
	this.zoomIn = function ( zoomScale ) {

		if ( zoomScale === undefined ) {

			zoomScale = getZoomScale();

		}
		//zoomScale = _zoomVar;
	console.log("zoomScale = ",zoomScale);
		//$("#testDiv").append(zoomScale+" :: zoom in "+"<br>")//.scrollTop(100000000);
		scale /= zoomScale;

	};

	this.zoomOut = function ( zoomScale ) {

		if ( zoomScale === undefined ) {

			zoomScale = getZoomScale();

		}
		//zoomScale = 4;
//$("#testDiv").append(zoomScale+" :: zoom out "+"<br>")//.scrollTop(100000000);
		scale *= zoomScale;

	};

	this.pan = function ( distance ) {

		distance.transformDirection( this.object.matrix );
		distance.multiplyScalar( scope.userPanSpeed );

		this.object.position.add( distance );
		this.center.add( distance );

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub( this.center );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.center ).add( offset );

		this.object.lookAt( this.center );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.userZoomSpeed );

	}

	
	function _event(event)
	{
		var _obj = new Object();
		if(event.type == "touchmove" || event.type == "touchstart")
		{
			//console.log(event);
			_obj.x = event.touches[0].pageX;
			_obj.y = event.touches[0].pageY;
			
		}else
		{
			_obj.x = event.clientX;
			_obj.y = event.clientY;
			
		}
		return _obj;
	}
	
	function onMouseDown( event ) {
if(event.type == "touchmove" || event.type == "touchstart")
{
	oldDiffX = 512 - event.touches[0].pageX;
	//$("#testDiv").append(oldDiffX.toFixed(0)+"<br>")//.scrollTop(100000000);
}
	
	//console.log("onMouseDown");
		if ( scope.enabled === false ) return;
		if ( scope.userRotate === false ) return;
//console.log("onMouseDown 2 event",event);
		event.preventDefault();

		if ( state === STATE.NONE )
		{
			if(event.type == "touchmove" || event.type == "touchstart")
			{
				state = STATE.ROTATE;
			}
			else
			{
				if ( event.button === 0 )
				state = STATE.ROTATE;
				if ( event.button === 1 )
				state = STATE.ZOOM;
				if ( event.button === 2 )
				state = STATE.PAN;
			}
			
		}
		
		//console.log("onMouseDown 240 state = ",state);
		if ( state === STATE.ROTATE ) {

			//state = STATE.ROTATE;

			
		
			rotateStart.set( _event(event).x, _event(event).y );
			

		} else if ( state === STATE.ZOOM ) {

			//state = STATE.ZOOM;

			
		
			//zoomStart.set( event.clientX, event.clientY );
			zoomStart.set( _event(event).x, _event(event).y );
			

		} else if ( state === STATE.PAN ) {

			//state = STATE.PAN;

		}

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );
		
		document.addEventListener( 'touchmove', onMouseMove, false );
		document.addEventListener( 'touchend', onMouseUp, false );

	}

	
	var oldDiffX = 0;
	var oldDiffY = 0;
	var executeCounter = 0;
	function onMouseMove( event ) {

	executeCounter++;
		if ( scope.enabled === false ) return;

		event.preventDefault();

		
		
		
		if(event.type == "touchmove" || event.type == "touchstart")
		{
			
		if((executeCounter%5) == 0)
		{
				if(event.touches.length == 2)
		{
			var _x1 = event.touches[0].pageX;
			var _y1 = event.touches[0].pageY;
			
			var _x2 = event.touches[1].pageX;
			var _y2 = event.touches[1].pageY;
			
			var _diffX = 512 - _x1;
			var _diffY = Math.abs(_y2 - _y1);
			var _zoomVar;
			if(_diffX != oldDiffX)
			{
				if(_diffX > oldDiffX)
				{
					_zoomVar = "zoom in ";
					 scope.zoomIn();
				}
				else
				{
					 scope.zoomOut();
					 _zoomVar = "zoomOut ";
				}
			}
			
			
			
			//$("#testDiv").append(oldDiffX.toFixed(0)+" :: "+_diffX.toFixed(0)+" :: "+_zoomVar+" :: "+"<br>")//.scrollTop(100000000);
			oldDiffX = _diffX;
			
			
			//alert(event.touches[0]);
		}
		
		executeCounter = 0;
		
		}
			
		
		}
		
		
		
		
		
		
		
		
		
		if ( state === STATE.ROTATE ) {

			//rotateEnd.set( event.clientX, event.clientY );
			rotateEnd.set( _event(event).x, _event(event).y );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed );
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.ZOOM ) {

		//zoomEnd.set( event.clientX, event.clientY );
		zoomEnd.set( _event(event).x, _event(event).y );
		
			
			zoomDelta.subVectors( zoomEnd, zoomStart );

			if ( zoomDelta.y > 0 ) {

				scope.zoomIn();

			} else {

				scope.zoomOut();

			}

			zoomStart.copy( zoomEnd );

		} else if ( state === STATE.PAN ) {

			var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			scope.pan( new THREE.Vector3( - movementX, movementY, 0 ) );

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;
		if ( scope.userRotate === false ) return;

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	
	function onGesturEnd()
	{
		alert("onGesturEnd");
		
	}
	
	
	
	function onMouseWheel( event ) {

		if ( scope.enabled === false ) return;
		if ( scope.userZoom === false ) return;

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.zoomOut();

		} else {

			scope.zoomIn();

		}

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false ) return;
		if ( scope.userPan === false ) return;

		switch ( event.keyCode ) {

			/*case scope.keys.UP:
				scope.pan( new THREE.Vector3( 0, 1, 0 ) );
				break;
			case scope.keys.BOTTOM:
				scope.pan( new THREE.Vector3( 0, - 1, 0 ) );
				break;
			case scope.keys.LEFT:
				scope.pan( new THREE.Vector3( - 1, 0, 0 ) );
				break;
			case scope.keys.RIGHT:
				scope.pan( new THREE.Vector3( 1, 0, 0 ) );
				break;
			*/
			case scope.keys.ROTATE:
				state = STATE.ROTATE;
				break;
			case scope.keys.ZOOM:
				state = STATE.ZOOM;
				break;
			case scope.keys.PAN:
				state = STATE.PAN;
				break;
				
		}

	}
	
	function onKeyUp( event ) {

		switch ( event.keyCode ) {

			case scope.keys.ROTATE:
			case scope.keys.ZOOM:
			case scope.keys.PAN:
				state = STATE.NONE;
				break;
		}

	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'touchstart', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox
	
	/*
	scope.zoomOut();

		} else {

			scope.zoomIn();
	
	*/
	
	/*
	this.domElement.addEventListener('gestureend', function(e) {
    if (e.scale < 1.0) {
       scope.zoomOut();
    } else if (e.scale > 1.0) {
       scope.zoomIn();
    }
}, false);


*/
	this.domElement.addEventListener( 'gesturechange', onGesturEnd, false );
	
	window.addEventListener( 'keydown', onKeyDown, false );
	window.addEventListener( 'keyup', onKeyUp, false );

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
