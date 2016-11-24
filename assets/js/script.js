jQuery(document).ready(function($) {

	setTimeout(function() {
		
		$.getJSON("http://critchley.loc/json/lawyers.json", function(result) {
	        $.each(result, function(i, field){

	        	var name = field.name;
	        	var image = field.image;
	        	var address = field.address;
	        	var review = field.reviews;

	            $('.hp-reviews').append(`
	            	            <div class="media hp-thumb">
	            				  <div class="media-left">
	            				    <a href="#" class="profile" data-toggle="modal" data-target="#clientModal">
	            				      <img class="media-object" src="assets/images/` + image + `" alt="...">
	            				    </a>
	            				    <p><strong>` + name + `</strong><br />`+ address +`</p>
	            				  </div>
	            				  <div class="media-body">
	            				    <h4 class="media-heading"><span>` + review.title + `</span> 
	            				    <img src="assets/images/star.png" />
	            				    <img src="assets/images/star.png" />
	            				    <img src="assets/images/star.png" />
	            				    <img src="assets/images/star.png" /></h4>
	            				    <p>"` + review.review + `"</p>
	            				    <ul class="book-review pull-right">
	            				    	<li><a href="#">Read Review</a></li>
	            				    	<li><a href="#"><img src="assets/images/book.png" /></a></li>
	            				    </ul>
	            				  </div>
	            				</div>
	            	            `);
	        });
	    });

    

	}, 1000 * 1)

	$('.fld-category').on('click', function(e) {
		$(this).find('.panel-category').slideToggle('slow');
	});

	// Modals
	$('#myModal').on('shown.bs.modal', function () {
	  // $('#myInput').focus()
	})

	// Modals
	$('#otherCategories').on('shown.bs.modal', function () {
	  // $('#myInput').focus()
	})

	$('.more-cat-a').on('click', function(e) {
		e.preventDefault();
		// alert('hi');
	});

	$(".modal-body").niceScroll();

	setTimeout(function() {
		$('a').on('click', function(e) {
			e.preventDefault();

		});
	}, 1000);

});