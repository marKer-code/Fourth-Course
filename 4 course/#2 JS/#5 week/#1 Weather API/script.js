var weathers = [];

$(function () {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Rivne,UA&key=912757a327904695b7d89eafd76f07fd')
        .then(res => res.json())
        .then(json => {

            var arr;

            for (var i = 0; i < 10; i++) {
                if (i == 0) {

                    $(".imgToday").attr("src", "https://www.weatherbit.io/static/img/icons/" +
                        json.data[i].weather.icon + ".png");

                    var date = new Date();
                    var hour = date.getHours();

                    if (hour >= 0 && hour < 6)
                        $(".timeOfDay").text("Night");
                    else if (hour >= 6 && hour < 12)
                        $(".timeOfDay").text("Morning");
                    else if (hour >= 12 && hour < 18)
                        $(".timeOfDay").text("Day");
                    else if (hour >= 18 && hour < 24)
                        $(".timeOfDay").text("Evening");
                    else
                        $(".timeOfDay").text("Night");

                    $(".lowT").unbind().append(json.data[i].min_temp + " &deg;");
                    $(".description").text(json.data[i].weather.description);

                }
                else {
                    $(".row").append(`
                        <div class='col-sm-12 col-md-12 col-lg-6 mb-3 mt-3'>` +
                        `<div class='today'>` +
                        `<table>` +
                        `<tr>` +
                        `<td colspan="2">` +
                        `<h4>${json.data[i].datetime}</h4>` +
                        `</td>` +
                        `<td rowspan="2">` +
                        `<div class="line"></div>` +
                        `</td>` +
                        `<td rowspan="2">` +
                        `<h5 class="description">${json.data[i].weather.description}</h5>` +
                        `</td>` +
                        `</tr>` +
                        `<tr>` +
                        `<td>` +
                        `<img src="https://www.weatherbit.io/static/img/icons/${json.data[i].weather.icon}.png">` +
                        `</td>` +
                        `<td class="lowTd">` +
                        `<p>Low</p>` +
                        `<p>${json.data[i].min_temp} &deg;</p>` +
                        `</td>` +
                        `</tr>` +
                        `</table>` +
                        `</div>` +
                        `</div>`);
                }
            }
        })
        .catch(err => console.log(err))
}
);

$(document).on('mouseenter','.today', function(){
    $(this).css('border', '3px solid rgba(240, 240, 240, 0.7)')
})
$(document).on('mouseleave','.today', function(){
    $(this).css('border', '1px solid rgba(240, 240, 240, 0.7)')
})

// $("#btn").click(function () {
//     $("img").attr("src","https://www.weatherbit.io/static/img/icons/c04d.png");
// });