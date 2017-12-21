export const postColumn = message => (
  $.ajax({
  url: '/api/users',
   method: 'POST',
   data: { message }
  })
);