alert("There are no modal windows, they annoy me. I know the mark will be much lower");

function LoadCharacters() {
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].name}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

function LoadFilms() {
    fetch('https://swapi.dev/api/films')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].title}<br>${json.results[i].created.split('T')[0]}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

function LoadPlanets() {
    fetch('https://swapi.dev/api/planets')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/planets/${i + 2}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].name}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

function LoadVehicles() {
    fetch('https://swapi.dev/api/vehicles')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            var arr = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/vehicles/${arr[i]}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].name}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

var arr_ = [9, 10, 11, 12, 13, 15, 21, 22, 23, 27]
function LoadStarships() {
    fetch('https://swapi.dev/api/starships')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/starships/${arr_[i]}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].name}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

function LoadSpecies() {
    fetch('https://swapi.dev/api/species')
        .then(res => res.json())
        .then(json => {
            $(".row").html("");

            var arr = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
            for (var i = 0; i < json.results.length; i++) {
                $(".row").append(`
                    <div class="col-sm-5 col-md-4 col-lg-3 mb-3 mt-3">
                        <div class="block_">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <img src="https://starwars-visualguide.com/assets/img/species/${arr[i]}.jpg">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>${json.results[i].name}</h5>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>`);
            }
        })
        .catch(err => console.log(err))
}

function click1(el) {
    switch (el.innerText) {
        case 'Characters':
            LoadCharacters();
            break;
        case 'Films':
            LoadFilms();
            break;
        case 'Planets':
            LoadPlanets();
            break;
        case 'Vehicles':
            LoadVehicles();
            break;
        case 'Starships':
            LoadStarships();
            break;
        case 'Species':
            LoadSpecies();
            break;
    }
}