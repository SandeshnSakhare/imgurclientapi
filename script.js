
$(function(){
	$('#btn').on('click', function() {
		var imgId = $("#img_id").val().trim();
		//OUHDm
		$.ajax({
			url: 'https://api.imgur.com/3/gallery/' + imgId,
			method: 'get',
			headers: {
				Authorization: 'client-ID 761e9ed03d030c1',
			},
			success: function(response) {
				console.log(response.data);
				$('#main_display').attr('src', response.data.images[0].link);
				getComments(imgId);
			},
			error: function(response) {
				alert('image not found');
			}
		});
	});
	function getComments(imageID){
		$.ajax({
			url: 'https://api.imgur.com/3/gallery/' + imageID + "/comments",
			method: 'get',
			headers: {
				Authorization: 'client-ID 761e9ed03d030c1',
			},
			success: function(response) {
				createHtmlComments(response.data);
			},
			error: function(response) {
				alert('Comments not found');
			}
		});
	}
	function createHtmlComments(commentObj){
		for(var i=0; i < commentObj.length; i++){
			$("#image_comments").append("<p>" + commentObj[i].author + " says:- " + commentObj[i].comment + "</p>");
		}
	}
});






