(function($) {

  /**
   * Output ( args1, args2 ) if item has arguments
   */
  Handlebars.registerHelper("arguments",function(options) {
    var buffer;
    if ( this.arguments ) {
      buffer = "( ";
      var that = this;
      var args = Object.keys( this.arguments );
      args.forEach( function( name, index ) {
        var info = args[ name ];
        if ( info && info.required ) {
          buffer = buffer + name;
        } else {
          buffer = buffer + "<strong>%@</strong>".fmt( name );
        }
        if ( index < args.length - 1 ) {
          buffer = buffer + ", "
        }
      });
      buffer = buffer + " )";
    }
    return buffer;
  });

var searchQuery = 'input.search-query';
$(document).ready( function(){
  $( searchQuery ).typeahead({
    name: 'topics',
    prefetch: {
      url: '/cheatsheet.typeahead.json'
    },
    template: Handlebars.compile($("#suggestion-template").html())
  }).on('typeahead:selected', function( e, selected ) {
      if ( selected && selected.url ) {
        window.location.pathname = selected.url;
      }
    }).keyup( function( e ){
      if ( e.keyCode === 27 ) {
        $( searchQuery ).typeahead('setQuery', '' ).blur();
        e.stopPropagation();
      }
    });
  }).keyup( function( e ){
    if( e.keyCode === 27 ) {
      $( searchQuery ).focus()
    }
  });
})(jQuery);