
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
/*
        function handleDragStart(ev) {
            return false;

        }

        function dragFunc(ev) {
            //ev.preventDefault();
            document.getElementById("test").innerHTML = "Thrower location: " + ev.clientX;
            if (ev.clientX > 0) {
                thrower.style.left = ev.clientX;
                thrower.style.top = ev.clientY;
            }
            
        }

        function handleDragEnd(ev) {
            console.log("made it")
            //ev.preventDefault();
            thrower.style.left = ev.pageX;
            thrower.style.top = ev.pageY;
        };*/

        thrower.onmousedown = function(event) {
            // (1) prepare to moving: make absolute and on top by z-index
            thrower.style.position = 'absolute';
            thrower.style.zIndex = 1000;
          
            // move it out of any current parents directly into body
            // to make it positioned relative to the body
            document.body.append(thrower);
          
            // centers the thrower at (pageX, pageY) coordinates
            function moveAt(pageX, pageY) {
              thrower.style.left = pageX - thrower.offsetWidth / 2 + 'px';
              thrower.style.top = pageY - thrower.offsetHeight / 2 + 'px';
            }
          
            // move our absolutely positioned thrower under the pointer
            moveAt(event.pageX, event.pageY);
          
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
          
            // (2) move the thrower on mousemove
            document.addEventListener('mousemove', onMouseMove);

            thrower.onmouseup = function(event) {
                document.removeEventListener('mousemove', onMouseMove);
                console.log("should drop")
            }
          
        };


        thrower.ondragstart = function() {
            return false;
        };

        // Handle throw submission
        $("#commit").click( function() {
            // do nothing for now
        });