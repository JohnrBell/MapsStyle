down = false;
var latitude = 40.7127,
longitude = -74.0059,
map_zoom = 13;

jQuery(document).ready(function($){
	//render default on load
	map_options = defineMap()
	map = new google.maps.Map(document.getElementById('container'), map_options);

	$('input[type=text]').on('keyup',function() { 
		map_options = defineMap()
		map.setOptions(map_options)
	});
	$('input[type=range]').on('mousemove click',function() { 
	  $(this).next().text($(this).val())
		map_options = defineMap()
		map.setOptions(map_options)
	});
	$('input[type=range]').each(function() {   
	  $(this).next().text($(this).val())
	});
	$('#slider').on('click',function() { 
		if (down == false){
			$(this).parent().attr('id','pickerdown')  
			$(this).text('CLICK TO HIDE')
			down = true
		}else{
			$(this).parent().attr('id','picker')  
			$(this).text('CLICK TO EDIT')
			down = false
		}
		
	});


});

function defineMap(){
	//we define here the style of the map, return the options
	style = [
	{
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: $('#water-color').val() },
        { lightness: $('#water-bri').val() }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: $('#landscape-color').val() },
        { lightness: $('#landscape-bri').val() }
      ]
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        { visibility: "off" },
        { color: $('#llabels-color').val() },
        { lightness: $('#llabels-bri').val() }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { visibility: "on" },
        { color: $('#highway-color').val() },
        { lightness: $('#highway-bri').val() }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: $('#art-color').val() },
        { lightness: $('#art-bri').val() }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        { visibility: "on" },
        { color: $('#local-color').val() },
        { lightness: $('#local-bri').val() }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        { visibility: "on" },
        { color: $('#poi-color').val() },
        { lightness: $('#poi-bri').val() }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        { visibility: "on" },
        { color: $('#text-color').val() },
        { lightness: $('#text-bri').val() }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        { visibility: "on" },
        { color: $('#textfill-color').val() },
        { lightness: $('#textfill-bri').val() }
      ]
    }
  ];
		
	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    //inizialize the map
	return map_options
}  