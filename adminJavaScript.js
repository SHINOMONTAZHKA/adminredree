$(document).ready(function () {

	var dropDownLink = $(".dropdown-list ul a"),
		dropdownActive = $(".paragraph-active"),
		dropdownList = $(".dropdown-list p"),
		widthLeftMenu = $(".menu-left");

	$(dropdownList).on("click", function (e){
		var xx = $(this).next();
		xx.slideToggle();
	});

	function addInfoWokr() {

		$("body").on("change", ".tinput", function (){
			var con = $(".tinput").val().split('\\').pop();
			$(".labelFile").html(con);
		});
		
	}

	$("#sel").selecter({
		label: ' Все',
		cover: true
	});

	function readURL(input) {
		
		  if (input.files && input.files[0]) {
			var reader = new FileReader();
		
			reader.onload = function(e) {
			  $('#blah').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}

	}

		$("#showImage").on("change", function(e) {
			var elem = $("#formAddPersonal").append("<div class='inputBlock' style='width:auto; margin-right: 50px'>\
				<img src='' alt='' id='blah' height='300'>\
				<div class='delFile'>\
					<p>&#215;</p>\
				</div>\
			</div>")
			readURL(this);
			if ($(".inputBlock").length == 3) {
				$(".inputBlock:last-child").remove();
			}
		})

		$("body").on("click chenge", ".delFile", function (){
			$(".labelFile").html("Выберите файл");
			$(".inputBlock").find("#blah").parent().remove();
		});

	addInfoWokr();

	function editorText() {
		$(".edit").on("keyup keydown click", function() {
			var posEl = $(".edit").caret("position");
			var valEl = posEl["top"];
			var editData = valEl - 5 +'px';
			$(".editor-circle").css({
				top: editData,
			});
		});

		$(".editor-circle").on("click", function() {
			$(".editor-tools").toggleClass("editor-tools__active");
			$(this).find("i").toggleClass("i__active");
		})
	}editorText();

	$(".image-popup").on("click", function() {
		$(".wrapper_popup-image").css({
			opacity: "1",
			zIndex: "1"
		})
	});
	
	$(".close-button_pop").on("click", function() {
		$(".wrapper_popup-image").css({
			opacity: "0",
			zIndex: "-1"
		})
	})

});
