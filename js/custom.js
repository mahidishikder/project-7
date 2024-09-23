
// Blog and Home work in manu
document.getElementById('btn-blog').addEventListener('click',function(){
  document.location.href = './blog.html';
});


// button hidden and show
document.getElementById('btn-history').addEventListener('click',function(){
  let donation = document.getElementById('btn-donation');
  let history = document.getElementById('btn-history');
  donation.style.background = 'white';
  history.style.background = '#B4F461'

})

document.getElementById('btn-donation').addEventListener('click',function(){
  let donation = document.getElementById('btn-donation');
  let history = document.getElementById('btn-history');
  history.style.background = 'white'
  donation.style.background = '#B4F461';


})





