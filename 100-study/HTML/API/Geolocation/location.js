let x = document.getElementById('pos_mess');

function getLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else {
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position)
{
    let latitude = position.coords.latitude;        //纬度
    let longitude = position.coords.longitude;      //经度
    let accuracy = position.coords.accuracy;        //位置精度
    let altitude = position.coords.altitude;        //海拔
    let altitudeAccuracy = position.coords.altitudeAccuracy;    //海拔精度
    let heading = position.coords.heading;          //方向
    let speed = position.coords.speed;              //速度
    let timestamp = position.timestamp;             //响应日期事件

    x.innerHTML = "Latitude: " + latitude + "<br />Longitude: " + longitude;

    createMap(latitude, longitude);
}

function showError(error)
{
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
            break;
    }
}

function createMap(lat, lon) {
    latlon=new google.maps.LatLng(lat, lon);
    mapholder=document.getElementById('mapholder');
    mapholder.style.height='250px';
    mapholder.style.width='500px';

    var myOptions={
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{
            style:google.maps.NavigationControlStyle.SMALL
        }
    };
    var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
    var marker=new google.maps.Marker({
        position:latlon,
        map:map,
        title:"You are here!"
    });
}