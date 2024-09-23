
// Blog and Home work in manu
document.getElementById('btn-blog').addEventListener('click',function(e){
  e.preventDefault()
  document.location.href = './blog.html';
});


// button hidden and show
document.getElementById('btn-history').addEventListener('click',function(e){
  e.preventDefault()
  let donation = document.getElementById('btn-donation');
  let history = document.getElementById('btn-history');
  donation.style.background = 'white';
  history.style.background = '#B4F461';
  let section1 = document.getElementById('section1').style.display = 'none';
  


})

document.getElementById('btn-donation').addEventListener('click',function(e){
  e.preventDefault()
  let donation = document.getElementById('btn-donation');
  let history = document.getElementById('btn-history');
  history.style.background = 'white'
  donation.style.background = '#B4F461';
  let section1 = document.getElementById('section1').style.display = 'block';


})

// document.getElementById('btn-history').addEventListener('click',function(e){
//   e.preventDefault()
//   document.location.href = './history.html';
  

// })

// document.getElementById('btn-donation').addEventListener('click',function(e){
//   e.preventDefault()
//   document.location.href = './index.html'
// })

// card one

document.getElementById('btn-donate-card').addEventListener('click',function(){
  let input = parseFloat(document.getElementById('input-card').value)
  let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate').innerText)
  let myAmount = parseFloat(document.getElementById('my-amount').innerText)
  let add = noakhaliDonate + input;
  let myAccountDecreamente = myAmount - input
  console.log(myAmount,noakhaliDonate)

  document.getElementById('my-amount').innerText = myAccountDecreamente
  document.getElementById('noakhali-donate').innerText = add;
  document.getElementById('input-card').value = ''

})

// card two
document.getElementById('btn-donate-card-two').addEventListener('click',function(){
  let input = parseFloat(document.getElementById('input-card-two').value);
  let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate-two').innerText);
  let myAmount = parseFloat(document.getElementById('my-amount').innerText);
  let add = noakhaliDonate + input;
  let myAccountDecreamente = myAmount - input;
console.log(input,noakhaliDonate,myAmount)
document.getElementById('my-amount').innerText = myAccountDecreamente;
document.getElementById('noakhali-donate-two').innerText = add;
document.getElementById('input-card-two').value = '';

})


// card three

document.getElementById('btn-donate-card-three').addEventListener('click',function(){
  let input = parseFloat(document.getElementById('input-card-three').value);
  let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate-three').innerText);
  let myAmount = parseFloat(document.getElementById('my-amount').innerText);
  let add = noakhaliDonate + input;
  let myAccountDecreamente = myAmount - input;
  console.log(input,noakhaliDonate,myAmount)
  document.getElementById('my-amount').innerText = myAccountDecreamente;
document.getElementById('noakhali-donate-three').innerText = add;
document.getElementById('input-card-three').value = '';
})







