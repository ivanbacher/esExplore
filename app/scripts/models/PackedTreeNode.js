'use strict';

ES_EX.PackedTreeNode = function( node ) {

	node.label = undefined;
	node.drawObject = undefined;;
	node.position;
	node.canBeExpanded = cbex();
	node.expanded = false;
	node.selected = false;

	node.select = function() {
		
		this.selected = true;
		this.drawObject.getObjectByName('selected').visible = true;
	};

	node.deSelect = function() {
		
		this.selected = false;
		this.drawObject.getObjectByName('selected').visible = false;
	};

	node.updateGlowViewVector = function( camPos ) {

		var newViewVec = new THREE.Vector3().subVectors( camPos, this.position );
		this.drawObject.material.uniforms.viewVector.value = newViewVec	;	
	};

	node.traverse = function( action ) {

		if(this.children) {
			for(var i = 0; i < this.children.length; i++) {

				action( this.children[i] );
				this.children[i].traverse( action );
			}
		}
	}

	function cbex() {

		if(node.children) {

			if(node.children.length != 0) {
				return true;
			}
		}

		return false;
	};
};