export const postColumn = message => (
  $.ajax({
  url: '/api/tickets',
   method: 'POST',
   data: { message }
  })
);