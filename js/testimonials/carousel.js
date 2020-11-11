function carousel () {
 new Glider(document.querySelector('.glider'), {
slidesToShow: 1,
slidesToScroll: 1,
dots: '#dots',
infinite:true,
draggable: true,
responsive:[
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        slidesToShow: '2',
        slidesToScroll: '1',
        
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});


}
export { carousel }