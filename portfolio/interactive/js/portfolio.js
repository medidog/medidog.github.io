    $('#poplar').click(function(e){
        $(this).lightGallery({
            dynamic:true,
            html:true,
            dynamicEl:[
                {"src":"img/img1.jpg","thumb":"img/thumb1.jpg","sub-html":"<div class='customHtml'><h4>Custom HTML</h4></div>"},
                {"src":"img/img2.jpg","thumb":"img/thumb2.jpg","sub-html":"#dynamicHtml"},
                {"src":"img/img3.jpg","thumb":"img/thumb3.jpg","sub-html":"#dynamicHtml"}
            ]
        });	
    })
	$('#diamond').click(function(e){
        $(this).lightGallery({
            dynamic:true,
            html:true,
            dynamicEl:[
                {"src":"img/img1.jpg","thumb":"img/thumb1.jpg","sub-html":"<div class='customHtml'><h4>Custom HTML</h4></div>"},
                {"src":"img/img2.jpg","thumb":"img/thumb2.jpg","sub-html":"#dynamicHtml"},
                {"src":"img/img3.jpg","thumb":"img/thumb3.jpg","sub-html":"#dynamicHtml"}
            ]
        });	
    })