$(function() {
    $('[name="review"]').stars();
    $('[name="michelin"]').stars({
        stars: 3,
        onChange: function(val) {
            console.log(val);
        }
    });

    $('#gohome').click(function() {
        $('[name="michelin"]').stars('destroy');

        return false;
    });
});