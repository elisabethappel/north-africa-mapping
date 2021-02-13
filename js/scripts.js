mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpc2FiZXRoYXBwZWwiLCJhIjoiY2tsMTNnYTdmMmxhbjJvcW80a3M1cGQ2ZyJ9.zRFRv1-WLc3E43O5Klf8Jw';

var options = {
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [14.953822,34.681201], // [lng, lat]
    zoom: 4.5
}


var map = new mapboxgl.Map(options);

var marker = new mapboxgl.Marker({
    color: "orange"
})
.setLngLat([10.8451, 33.8076])
.setPopup(new mapboxgl.Popup().setHTML("<h1>Djerba</h1>")) // add popup
.addTo(map);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var tunisData = [
  {
    point: [13.1913, 32.8872],
    name: 'Tripoli'
  },
  {
    point: [10.1815, 36.8065],
    name: 'Tunis'
  },
  {
    point: [20.0868, 32.1194],
    name: 'Benghazi'
  }

]

tunisData.forEach(function(d) {
  console.log(d.name, d.point)

new mapboxgl.Marker({
      color: "orange"
  })
  .setLngLat(d.point)
  .setPopup(new mapboxgl.Popup().setHTML(`${d.name}`)) // add popup
  .addTo(map);
})
