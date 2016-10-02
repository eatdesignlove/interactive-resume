// app-home
(function(global, $){
  'use strict';

  var body = document.body;
  var container = document.querySelector('.app-section');
  var nowLocation = window.location.hash;

  // app-header & app-menu
  var app_header = document.querySelector('.app-header');
  var app_menu = document.querySelector('.app-menu');
  var winWidth, winHeight;

  // app-menu list
  var menus, menu_home, menu_skill, menu_project, menu_contact;
  var setMenuFunc = function() {
    menus = document.querySelectorAll('.app-menu a');
    menu_home = document.querySelector('.link__home');
    menu_skill = document.querySelector('.link__skills');
    menu_project = document.querySelector('.link__projects');
    menu_contact = document.querySelector('.link__contact');
  };
  var setMenuFuncMove = function() {
    menus = document.querySelectorAll('body > .app-menu a');
    menu_home = menus[0];
    menu_skill = menus[1];
    menu_project = menus[2];
    menu_contact = menus[3];
    console.log(menu_home)
  };
  setMenuFunc();

  // app-main
  var wrap = document.querySelector('.wrap');

  // svg-container
  var svg_cont = document.querySelector('.svg-container');

  var menu_activation = function() {
    nowLocation = window.location.hash;
    for ( var i = 0; i < 4 ; i++ ) {
      // console.log(menus[i].hash === nowLocation);
      if ( menus[i].hash === nowLocation ) {
        $(menus[i]).addClass('active');
      } else {
        $(menus[i]).removeClass('active');        
      }
    }
  };
    
  var home = function (){
    window.location.hash = '#home';

    // app-home man
    var st0 = document.querySelector('.st-0');
    var st1 = document.querySelector('.st-1');
    var st2 = document.querySelector('.st-2');
    var st3 = document.querySelector('.st-3');
    var st4 = document.querySelector('.st-4');

    // app-home hello
    var desc1 = document.querySelector('.home-desc-1');
    var desc2 = document.querySelector('.home-desc-2');
    var desc3 = document.querySelector('.home-desc-3');
    var desc4 = document.querySelector('.home-desc-4');

    var close_home = function(){
      svg_cont = document.querySelector('.svg-container');
      $(svg_cont).addClass('remove');
      remove_desc_trigger();
    };

    var remove_desc_trigger = function() {
      setTimeout( function(){ $(desc1).removeClass('show');}, 0);
      setTimeout( function(){ $(desc2).removeClass('show');}, 250);
      setTimeout( function(){ $(desc3).removeClass('show');}, 500);
      setTimeout( function(){ $(desc4).removeClass('show');}, 750);
    };

    var move_glasses = function(){
      winWidth = $(window).width();
      winHeight = $(window).height();
      // console.log(winWidth);

      $(body).on('mousemove', function(e){
        // console.log(e.pageX, e.pageY);
        var glassesX, glassesY, mouseX;
        if (e.pageX > winWidth/2 ) {
          glassesX = '92px';
          mouseX   = '210px'; 
        } else {
          glassesX = '72px';
          mouseX   = '190px'; 
        }
        if (e.pageY > winHeight/2 ) {
          glassesY = '230px';
        }
        else {
          glassesY = '210px';
        }
        $(st3).css('transform','translate('+ glassesX +', '+ glassesY +')');  
        $(st4).css('transform','translate('+ mouseX +', 400px)');  

      })
    };

    var desc_trigger = function() {
      setTimeout( function(){ $(desc1).addClass('show');}, 0);
      setTimeout( function(){ $(desc2).addClass('show');}, 250);
      setTimeout( function(){ $(desc3).addClass('show');}, 500);
      setTimeout( function(){ $(desc4).addClass('show');}, 750);
      setTimeout( move_glasses, 750);
    };

    var app_header_trigger = function() {
      setTimeout( function(){ $(app_header).addClass('show-1') }, 500);
      setTimeout( function(){ $(app_header).addClass('show-2') }, 750);
      setTimeout( function(){ $(app_menu).addClass('show')     }, 1500);
    };

    var man_trigger = function() {
      setTimeout( function(){ $(st1).addClass('show');}, 500);
      setTimeout( function(){ $(st0).addClass('show');}, 2000);
      setTimeout( function(){ $(st2).addClass('show');}, 2250);
      setTimeout( function(){ $(st3).addClass('show');}, 2500);
      setTimeout( function(){ $(st4).addClass('show');}, 3200);
      setTimeout( app_header_trigger, 3500);
      setTimeout( desc_trigger, 3800);
    };
    man_trigger();

    // 외부로 노출
    home.close_home = close_home;
  }
  
  var contact = function() {
    var email_address = document.querySelector('.email-addr-text');
    var sns = document.querySelector('.sns');
    var link_github = document.querySelector('.link__github');
    var link_twitter = document.querySelector('.link__twitter');

    $(email_address).shuffleLetters();

    setTimeout(function(){ $(sns).addClass('show') }, 1000);
    setTimeout(function(){ $(link_github).addClass('show') }, 1500);
    setTimeout(function(){ $(link_twitter).addClass('show') }, 1750);

    var close_contact = function () {
      $(email_address).addClass('remove');
      setTimeout(function(){ $(sns).removeClass('show') }, 500);
      setTimeout(function(){ $(link_github).removeClass('show') }, 750);
      setTimeout(function(){ $(link_twitter).removeClass('show') }, 1000);
    };

    // 외부로 노출
    contact.close_contact = close_contact;
  }

  var skills = function(){
    var width = $(window).width()-300;
    var height = $(window).height()-200;
    var title  = document.querySelector('.title');

    var ball_html = document.querySelector('.skill-html');
    var ball_css  = document.querySelector('.skill-css');
    var ball_sass = document.querySelector('.skill-sass');
    var ball_javascript = document.querySelector('.skill-javascript');
    var ball_jquery = document.querySelector('.skill-jquery');
    var ball_angular = document.querySelector('.skill-angular');
    var ball_gulp = document.querySelector('.skill-gulp');
    var ball_photoshop = document.querySelector('.skill-photoshop');
    var ball_illustrator = document.querySelector('.skill-illustrator');
    var ball_sketch = document.querySelector('.skill-sketch');
    var ball_service = document.querySelector('.skill-service');
    var balls = [ 
      ball_html,
      ball_css,
      ball_sass,
      ball_javascript,
      ball_jquery,
      ball_angular,
      ball_gulp,
      ball_photoshop,
      ball_illustrator,
      ball_sketch
    ];


    //mastery
    ball_html['mastery'] = 0.90;
    ball_css['mastery'] = 0.90;
    ball_sass['mastery'] = 0.75;
    ball_javascript['mastery'] = 0.5;
    ball_jquery['mastery'] = 0.5;
    ball_angular['mastery'] = 0.25;
    ball_gulp['mastery'] = 0.25;
    ball_photoshop['mastery'] = 0.8;
    ball_illustrator['mastery'] = 0.8;
    ball_sketch['mastery'] = 0.5;

    var setBall = function() {
      for (var l = balls.length-1; 0 <= l; l-- ) {
        var ball = balls[l];
        ball.posX = Math.random() * width;
        ball.posY = Math.random() * height;
        $(ball).css({
            'top': ball.posY,
            'left': ball.posX,
            'width': 300 * ball.mastery,
            'height': 300 * ball.mastery,
            'line-height': 300 * ball.mastery - 10 +'px',
            'animation-duration': Math.random() * 20 + 4 + 's',

        }).addClass('show');

      }
      setInterval( function(){
        var index = parseInt(Math.random() * 10);
        var level = (function(){
          var result = balls[index].mastery * 100;
          if ( result < 35 ) { result = 'Beinner' };
          if ( result >= 35 && result < 75 ) { result = 'Intermediate' };
          if ( result >= 75 ) { result = 'Advanced' };
          return result;
        })();
        $(balls[index]).focus();
        $(title).shuffleLetters({
          "text": balls[index].text + ' : '+ level
        }); 
      } , 2000 );
    }
    
    var close_skills = function(){
      setTimeout(function(){ $(title).removeClass('show') }, 500);
      for (var l = balls.length-1; 0 <= l; l-- ) {
        // console.log(l, balls[l]);
        var ball = balls[l];
        $(ball).addClass('remove');
      }
    }

    setTimeout(function(){ $(title).addClass('show') }, 500);
    setTimeout(function(){ $(title).addClass('move') }, 1250);
    setTimeout(setBall, 1500);

    // 외부로 노출
    skills.close_skills = close_skills;
  }

  var project = function(){
    var proejct_list = document.querySelector('.project-list');

    $(proejct_list).css('transform','scale(0.5)');
    $(wrap).css('margin-bottom','72px');
    var copy_menu = $(app_menu).clone().removeClass('show');
    var copy_header = $(app_header).clone();
    var section_title = '<h2 class="a11y-hidden">Projects</h2>'
    copy_menu.appendTo('body');
    copy_header.appendTo('body');
    $(section_title).prependTo(proejct_list);
    setTimeout(function(){ copy_menu.addClass('show') }, 500)
    setTimeout(function(){ copy_header.addClass('show') }, 500)
    
    setMenuFuncMove();
    add_event_to_menu();
    window.location.hash = '#projects';
    $.getJSON('/interactive-resume/src/data/project-data.json')
      .then(function(data, status, XHR){

        var project_template = '';
        for (var i = 0; data.results[i]; i++ ) {
          var template = [
            '<section class="container__project" style="background-image: url('+ data.results[i].thumb +')">',
              '<a class="link__project" href="'+ data.results[i].url +'" target="_blank">',
                '<h3 class="title">'+ data.results[i].title +'</h2>',
                '<p class="description">' + data.results[i].description + '</p>',
              '</a>',
            '</section>'
          ].join('');
          console.log(data.results[i].thumb)
          project_template += template;
        }
        $(project_template).appendTo('.project-list');

        var project_items = document.querySelectorAll('.container__project');
        for (var i = 0; project_items[i]; i++) {
          $(project_items[i]).css('transform', 'translateY('+110 * (i + 1)+'%)')
        }
    })

    var close_project = function(){
      $(proejct_list).css('transform','scale(1)');
      $(wrap).css('margin-bottom','0');

      copy_menu.removeClass('show').remove();
      copy_header.removeClass('show').remove();
      $('.container__project').remove();

      setMenuFunc();
    }
  
    // 외부로 노출
    project.close_project = close_project;
  }

  var add_event_to_menu = function(){
    menu_home.addEventListener('click', function(){
      console.log(this);
      if (nowLocation !== '#home') {
        if (!!skills.close_skills) { skills.close_skills() }
        if (!!project.close_project) { project.close_project() }
        if (!!contact.close_contact) { contact.close_contact() }

        setTimeout(function(){
          $(container).load("./src/views/home.html", function(){
            home();
            menu_activation();
          });
        }, 1750);  
      }
    });

    menu_skill.addEventListener('click', function(){
      console.log(this);

      if (nowLocation !== '#skills') {
        if (!!home.close_home) { home.close_home() }
        if (!!contact.close_contact) { contact.close_contact() }
        if (!!project.close_project) { project.close_project() }

        setTimeout(function(){
          $(container).load("./src/views/skills.html", function(){
            skills();
            menu_activation();
          });
        }, 1750);
      }
    });
    
    menu_project.addEventListener('click', function(){
      console.log(this);

      if (nowLocation !== '#projects') {
        if (!!home.close_home) { home.close_home() }
        if (!!skills.close_skills) { skills.close_skills() }
        if (!!contact.close_contact) { contact.close_contact() }
        setTimeout(function(){
          $(container).load("./src/views/home.html", function(){
            home();
            project();
            menu_activation();
          });
        }, 1200);  
      }
    });

    menu_contact.addEventListener('click', function(){
      console.log(this);

      if (!!home.close_home) { home.close_home() }
      if (!!skills.close_skills) { skills.close_skills() }
      if (!!project.close_project) { project.close_project() }

      if (nowLocation !== 'contact') {
        home.close_home();
        setTimeout(function(){
          $(container).load("./src/views/contact.html", function(){
            contact();
            menu_activation();
          });
        }, 1750);
      }
    });
  }
  
  add_event_to_menu();
  $(container).load("./src/views/home.html", function(){
    home();
    menu_activation();
  });

}(this, this.jQuery));
