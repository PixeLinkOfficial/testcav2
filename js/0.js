let lbutton=document.querySelector('.b2');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;
    document.querySelector('.kurdish').disabled=false;
});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;
    document.querySelector('.kurdish').disabled=true;
});

let butkur =document.querySelector('.kurdish');

butkur.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML="کوردی";
    document.querySelector('.p1111').innerHTML="هەموو بەرهەمه‌کان";
    document.querySelector('.p111').innerHTML="خواردنی گەرموو";
    document.querySelector('.p2').innerHTML="قهوە سارد";
    document.querySelector('.p3').innerHTML="ئەسپریسو شێک";
    document.querySelector('.p4').innerHTML="قهوە فرابی";
    document.querySelector('.p5').innerHTML="میڵک شێک";
    document.querySelector('.p6').innerHTML="سمووتی";
    document.querySelector('.p7').innerHTML="موهیتۆ";
    document.querySelector('.p8').innerHTML="چای سارد";
    document.querySelector('.p9').innerHTML="کوکتیلی ڕیدبووڵ";
    document.querySelector('.p10').innerHTML="شیرینی";
    document.querySelector('.p11').innerHTML="گوپەکانی بسکویت";
    document.querySelector('.p12').innerHTML="کرواسۆن";
    document.querySelector('.p13').innerHTML="کریپ";
    document.querySelector('.p14').innerHTML="وافڵ";
    document.querySelector('.p15').innerHTML="پانکەیک";
    document.querySelector('.p16').innerHTML="مینی پانکەیک";
    document.querySelector('.p17').innerHTML="عەصیر طبیعی";
    document.querySelector('.p18').innerHTML="کافیرنا کەبل";
    document.querySelector('.p19').innerHTML="کافیرنا سپیشەل";
    document.querySelector('.p20').innerHTML="سۆدا & ئاو";
    document.querySelector('.p21').innerHTML="دەربارەی کافیرنا";
    
    localStorage.setItem("lan","kur");
});

let butara =document.querySelector('.arabic');

butara.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML="العربية";
    document.querySelector('.p1111').innerHTML="جميع المنتجات";
    document.querySelector('.p111').innerHTML="المشروبات الساخنة";
    document.querySelector('.p2').innerHTML="قهوه باردا";
    document.querySelector('.p3').innerHTML="اسبريسو شيك";
    document.querySelector('.p4').innerHTML="قهوة فرابي";
    document.querySelector('.p5').innerHTML="ميلكشيك";
    document.querySelector('.p6').innerHTML="سموثي";
    document.querySelector('.p7').innerHTML="موهيتو";
    document.querySelector('.p8').innerHTML="شاي بارد";
    document.querySelector('.p9').innerHTML="كوكتيل ريدبول";
    document.querySelector('.p10').innerHTML="حلوى";
    document.querySelector('.p11').innerHTML="أكواب البسكويت";
    document.querySelector('.p12').innerHTML="كرواسون";
    document.querySelector('.p13').innerHTML="كريب";
    document.querySelector('.p14').innerHTML="وافل";
    document.querySelector('.p15').innerHTML="بانكيك";
    document.querySelector('.p16').innerHTML="ميني بانكيك";
    document.querySelector('.p17').innerHTML="عصير طبيعي";
    document.querySelector('.p18').innerHTML="كافيرنا كبل";
    document.querySelector('.p19').innerHTML="كافيرنا سبيشل";
    document.querySelector('.p20').innerHTML="صودا & ماء";
    document.querySelector('.p21').innerHTML="عن كافيرنا";
   localStorage.setItem("lan","arb");
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML="English";
    localStorage.setItem("lan","eng");
    window.location.reload(true);
});


document.addEventListener('DOMContentLoaded', () => {
    // Loop through items ii1 to ii21
    for (let i = 1; i <= 21; i++) {
      const button = document.querySelector(`.ii${i}`);  // Select buttons like .ii1, .ii2, etc.
      if (button) {
        button.addEventListener('click', () => {
          console.log(`Clicked: ii${i}`);
          // Store the selected item in localStorage
          localStorage.setItem('selectedItem', i); // Store the item number
          // Redirect to 1.html
          window.location.href = '1.html';
        });
      } else {
        console.error(`Button not found: ii${i}`);
      }
    }
  });

document.querySelector('.iigen').addEventListener('click',()=>{
    window.location.href = '1.html';
});
  

function htlan(){
    if(localStorage.getItem('lan')=="arb")
    butara.click();
    else if(localStorage.getItem('lan')=="kur")
    butkur.click()
    }
    htlan();
    