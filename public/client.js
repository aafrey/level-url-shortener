// Client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$('form').submit(event => {
   event.preventDefault()
   const dream = $('input').val()
   $.post('/dreams?' + $.param({dream}), urlJSON => {
      $('<li></li>').text(urlJSON).appendTo('ul#dreams')
      $('input').val('')
      $('input').focus()
   })
})

