
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
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'block';


})

document.getElementById('btn-donation').addEventListener('click',function(e){
  e.preventDefault()
  let donation = document.getElementById('btn-donation');
  let history = document.getElementById('btn-history');
  history.style.background = 'white'
  donation.style.background = '#B4F461';
  document.getElementById('section1').style.display = 'block';
  document.getElementById('section2').style.display = 'none';
  


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
  let modal1 = document.getElementById('my_modal_5');
    modal1.close();
  if(isNaN(input)){
    alert('Wrong Input Please Amount Type')
     return;
  }else if(input <= 0){
    alert('Please Positive Amount Type ')
    return
  }  
  else if(input > myAmount){

    alert('Your have no enough money')
    return
  }
   else{
    let add = noakhaliDonate + input;
    let myAccountDecreamente = myAmount - input;
    let div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('mb-4')
    div.classList.add('border-gray-300')
    div.classList.add('shadow')
    div.classList.add('rounded-xl')
    div.classList.add('p-6')
    div.innerHTML = `
     <h2 class="text-gray-600 font-bold text-xl mb-4">
     ${input} Taka is donated for donate for floot add Noakhali , Bangladesh
     </h2>
     ${new Date ()}
    `
    document.getElementById('transaction-history').appendChild(div)

    document.getElementById('my-amount').innerText = myAccountDecreamente
    document.getElementById('noakhali-donate').innerText = add;
    document.getElementById('input-card').value = ''
    modal1.showModal();
    return

  }




})

// card two
document.getElementById('btn-donate-card-two').addEventListener('click',function(){
  let input = parseFloat(document.getElementById('input-card-two').value);
  let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate-two').innerText);
  let myAmount = parseFloat(document.getElementById('my-amount').innerText);
  let modal2 = document.getElementById('my_modal_6');
  if(isNaN(input)){
    alert('Wrong Input Please Amount Type')
    return
  } else if(input > myAmount){
    alert('Your have no enough money')
    return
  } else if(input <= 0){
   alert('Please Positive Amount Type')
  } else{
    let add = noakhaliDonate + input;
    let myAccountDecreamente = myAmount - input;
    let div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('mb-4')
    div.classList.add('border-gray-300')
    div.classList.add('shadow')
    div.classList.add('rounded-xl')
    div.classList.add('p-6')
    div.innerHTML = `
     <h2 class="text-gray-600 font-bold text-xl mb-4">
     ${input} Taka is donated for Donate for Flood Relief in Feni,Bangladesh
     </h2>
     ${new Date ()}
    `
    document.getElementById('transaction-history').appendChild(div)
  document.getElementById('my-amount').innerText = myAccountDecreamente;
  document.getElementById('noakhali-donate-two').innerText = add;
  document.getElementById('input-card-two').value = '';
   modal2.showModal();
   return
  }

})


// card three

document.getElementById('btn-donate-card-three').addEventListener('click',function(){
  let input = parseFloat(document.getElementById('input-card-three').value);
  let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate-three').innerText);
  let myAmount = parseFloat(document.getElementById('my-amount').innerText);
  let modal3 = document.getElementById('my_modal_1');
  modal3.close();
  if(isNaN(input)){
    alert('Wrong Input Please Amount Type')
    return
  } else if(input > myAmount){
    alert('Your have no enough money')
    return
  } else if(input <= 0){
   alert('Please Positive Amount Type')
  } else{
  let add = noakhaliDonate + input;
  let myAccountDecreamente = myAmount - input;
  let div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('mb-4')
    div.classList.add('border-gray-300')
    div.classList.add('shadow')
    div.classList.add('rounded-xl')
    div.classList.add('p-6')
    div.innerHTML = `
     <h2 class="text-gray-600 font-bold text-xl mb-4">
     ${input} Taka is donated for Donate for Aid for Injured in the Quota Movement
     </h2>
     ${new Date ()}
    `
    document.getElementById('transaction-history').appendChild(div)
  document.getElementById('my-amount').innerText = myAccountDecreamente;
document.getElementById('noakhali-donate-three').innerText = add;
document.getElementById('input-card-three').value = '';
modal3.showModal();
  }
})







