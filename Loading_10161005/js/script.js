//event ketika link diklik
$('.page-scroll').on('click', function(){ //cari elemen di kelas page scroll di jquery. 
                     
    //ambil isi href
    var xyz = $(this).attr('href');

    //tangkap elemennya
    var elemenXyz = $(xyz); //ambil section per#
    
    //pindah scrollnya tergantung ukuran #
    $('body').animate({
        scrollTop: elemenXyz.offset().top
    }, 1000);
  
});