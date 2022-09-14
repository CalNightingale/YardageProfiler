
// Draw Field
const FIELD_WIDTH = 40;
const ENDZONE_LENGTH = 25;
const FIELD_LENGTH = 70;
const SIZE_MULT = 10;

// Set canvas size
const canvas = document.getElementById('canvas');
canvas.width = (2*ENDZONE_LENGTH + FIELD_LENGTH)*SIZE_MULT;
canvas.height = FIELD_WIDTH*SIZE_MULT;
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.strokeRect(0, 0, ENDZONE_LENGTH*SIZE_MULT, FIELD_WIDTH*SIZE_MULT);
    ctx.strokeRect(ENDZONE_LENGTH*SIZE_MULT, 0, FIELD_LENGTH*SIZE_MULT, FIELD_WIDTH * SIZE_MULT);
    ctx.strokeRect((ENDZONE_LENGTH+FIELD_LENGTH)*SIZE_MULT, 0, ENDZONE_LENGTH*SIZE_MULT, FIELD_WIDTH*SIZE_MULT);
}

// Create thrower
const thrower = document.getElementById("thrower");

thrower.onmousedown = function(event) {
    moveAt(event.pageX, event.pageY);
    
    // moves the thrower at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        thrower.style.left = pageX + 'px';
        thrower.style.top = pageY + 'px';
    }
    
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    
    // move the thrower on mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // drop the thrower, remove unneeded handlers
    thrower.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        thrower.onmouseup = null;
    };
    
    };
    
    thrower.ondragstart = function() {
    return false;
    };

// Handle throw submission
$("#commit").click( function() {
    // do nothing for now
});