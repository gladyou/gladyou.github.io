 $(document).ready(function(){

        // Screen animation
        var options = {
          cycle: false,
           keyNavigation: false
        };

        var sequence = $("#sequence").sequence(options).data("sequence");

        sequence.afterLoaded = function() {
          // Animate here screen 1

           setTimeout( function() {
              setTimeout( function() {
                sequence.next();
              },500);
            },500);
        }

        sequence.beforeCurrentFrameAnimatesOut = function(){

             // Animate here screens 2, 3 and 4
            if(sequence.currentFrameID === 1) {
              // Animate here screen 1
             var el = $("#element-1");
             setTimeout( function() {
                el.attr('src', 'img/sec1/humanoidrollover.png');
                setTimeout( function() {
                  sequence.next();
                },2500);
              },1500);

            } else if(sequence.currentFrameID === 2) {
              var e1 = $("#element-2-1");
              var e2 = $("#element-2-2");
              var e3 = $("#element-2-3");

              setTimeout( function() {
                  e1.attr('src', 'img/sec2/checkbox1_on.png');
                  setTimeout( function() {
                    e2.attr('src', 'img/sec2/checkbox2_on.png');
                    setTimeout( function() {
                      e3.attr('src', 'img/sec2/checkbox3_on.png');
                      setTimeout( function() {
                        sequence.next();
                      },2000);
                    },500);

                  },500);
              },2500);

            } else if(sequence.currentFrameID === 3) {
              var e31 = $("#element-3-1"),
                  e32 = $("#element-3-2"),
                  e33 = $("#element-3-3"),
                  e34 = $("#element-3-4"),
                  e35 = $("#element-3-5"),
                  e36 = $("#element-3-6"),
                  e37 = $("#element-3-7"),
                  e38 = $("#element-3-8");
              // Turn start clock on
              setTimeout( function () {
                e32.attr('src', 'img/sec3/pictostart_on.png');
                // Insert start value
                setTimeout( function () {
                  e31.removeClass('invisible');
                  // Turn end clock on
                  setTimeout( function () {
                    e34.attr('src', 'img/sec3/pictoend_on.png');
                    // Insert end value
                    setTimeout(function  () {
                      e33.removeClass('invisible');
                      // Turn location pin on
                      setTimeout(function () {
                        e36.attr('src', 'img/sec3/pictopin_on.png');
                        // Insert location value
                        setTimeout(function  () {
                           e35.removeClass('invisible');
                          // Finally, turn search btn on
                          setTimeout(function () {
                             e37.attr('src', 'img/sec3/bt_search_on.png');
                             setTimeout( function() {
                                // Launch next screen
                                sequence.next();
                             },500);
                          }, 1500);
                        }, 250);
                      }, 1000);
                    }, 250); // unlimited end
                  }, 1000); // end clock on
                }, 250); // unlimited start
              }, 2500); // start clock on

            } else if(sequence.currentFrameID === 4) {
                // Start the loader screen
                $('#loader').addClass('box_rotate box_transition');
                setTimeout( function() {
                  sequence.next();

                }, 3000);

            }
        };

        // Project 1 carrousel
        var p1_options = {
          autoPlay: false,
          preloader: true,
          keyNavigation: false
        };
        var seqP0 = $("#sequence-p0").sequence(p1_options).data("sequence");
        $( "#sequence-p0" ).on( "click", function() {
            seqP0.next();
        });
        var seqP01 = $("#sequence-p01").sequence(p1_options).data("sequence");
        $( "#sequence-p01" ).on( "click", function() {
            seqP01.next();
        });
        var seqP1 = $("#sequence-p1").sequence(p1_options).data("sequence");
        $( "#sequence-p1" ).on( "click", function() {
            seqP1.next();
        });
        var seqP2 = $("#sequence-p2").sequence(p1_options).data("sequence");
        $( "#sequence-p2" ).on( "click", function() {
            seqP2.next();
        });
        var seqP3 = $("#sequence-p3").sequence(p1_options).data("sequence");
        $( "#sequence-p3" ).on( "click", function() {
            seqP3.next();
        });
        var seqP4 = $("#sequence-p4").sequence(p1_options).data("sequence");
        $( "#sequence-p4" ).on( "click", function() {
            seqP4.next();
        });

        var seqP5 = $("#sequence-p5").sequence(p1_options).data("sequence");
        $( "#sequence-p5" ).on( "click", function() {
            seqP5.next();
        });

    });
