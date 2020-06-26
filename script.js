
$(document).ready(function () {

    // helpful link: https://stackoverflow.com/questions/17507870/jquery-image-changing-on-hover
    // https://api.jquery.com/data/

    // $('img').click(function() {
    //     console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    //   });

    // $('img').click(function () {
    //     var cat = $(this).attr('data-alt-src');
    //     $(cat).slideToggle();
    // });

    $('img').click(function () {
        var $this = $(this);
        var cat = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', cat);
    });
    
});