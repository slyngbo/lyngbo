$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '954233572',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '954233572.1677ed0.4ab7dd467dbc450a93a9efb31fe0531b',
        sortBy: 'most-recent',
        template: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();

});
