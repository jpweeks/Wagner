WAGNER.GrayscalePass = function() {

	WAGNER.Pass.call( this );
	WAGNER.log( 'GrayscalePass Pass constructor' );
	this.loadShader( 'grayscale-fs.glsl' );

};

WAGNER.GrayscalePass.prototype = Object.create( WAGNER.Pass.prototype );
