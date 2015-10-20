$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.$allPics = $('img');
  this.transitioning = false;

  $(this.$allPics[0]).addClass('active');
  this.$el.on('click', '.slide-right', this.slide.bind(this, [-1]));
  this.$el.on('click', '.slide-left', this.slide.bind(this, [1]));
};

$.Carousel.prototype.slide = function(dir){
  if(this.transitioning === true){ return; }
  this.transitioning = true;

  var currentPic = $(this.$allPics[this.activeIdx]);

  if(dir == -1){
    currentPic.addClass('right');
  }else{
    currentPic.addClass('left');
  }

  currentPic.one('transitionend', function() {
    currentPic.removeClass('active');
    currentPic.removeClass('right');
    currentPic.removeClass('left');
    this.transitioning = false;
  }.bind(this));

  this.activeIdx += parseInt(dir);

  if(this.activeIdx >= this.$allPics.length){
    this.activeIdx = 0;
  }else if(this.activeIdx < 0){
    this.activeIdx = this.$allPics.length - 1;
  }

  if(dir == -1){
    $(this.$allPics[this.activeIdx]).addClass('active left');
    setTimeout(function() {
      $(this.$allPics[this.activeIdx]).removeClass('left');
    }.bind(this), 0);
  }else{
    $(this.$allPics[this.activeIdx]).addClass('active right');
    setTimeout(function() {
      $(this.$allPics[this.activeIdx]).removeClass('right');
    }.bind(this), 0);
  }
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
