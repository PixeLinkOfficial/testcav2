import {cart,savetolocals} from "./cart.js";


//
let lbutton=document.querySelector('.b2');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.rldiv').style.display="block";
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;
    document.querySelector('.kurdish').disabled=false;
});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.rldiv').style.display="none";
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;
    document.querySelector('.kurdish').disabled=true;
});

let butkur =document.querySelector('.kurdish');

butkur.addEventListener('click',()=>{
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });
  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  
  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('.itemtitle').style.fontWeight=500;
  document.querySelector('.itemtitle').style.fontFamily="'Roboto', serif";

  localStorage.setItem("lan","kur");
  document.querySelector('.p1').innerHTML="كوردى";
  document.querySelector('.div1p').style.textAlign='right';
  document.querySelector('.div1p2').style.textAlign='right';
  document.querySelector('.div1p3').style.textAlign='right';
  document.querySelector('.div1p4').style.textAlign='right';
  document.querySelector('.div1p5').style.textAlign='right';
  document.querySelector('.div1p6').style.textAlign='right';
  document.querySelector('.div1p7').style.textAlign='right';
  document.querySelector('.div1p8').style.textAlign='right';
  document.querySelector('.div1p10').style.textAlign='right';
  document.querySelector('.div1p11').style.textAlign='right';
  document.querySelector('.div1p12').style.textAlign='right';
  document.querySelector('.div1p13').style.textAlign='right';
  document.querySelector('.div1p14').style.textAlign='right';
  document.querySelector('.div1p15').style.textAlign='right';
  document.querySelector('.div1p16').style.textAlign='right';
  document.querySelector('.div1p17').style.textAlign='right';
  document.querySelector('.div1p18').style.textAlign='right';
  document.querySelector('.div1p19').style.textAlign='right';
  document.querySelector('.div1p20').style.textAlign='right';
  document.querySelector('.div1p21').style.textAlign='right';

  document.querySelector('.itemtitle1').innerHTML="نەوشنەری گەرم";
  document.querySelector('.div1p1').innerHTML="نەوشنەری گەرم";
  document.querySelector('.pburg1').innerHTML="قەوە";
  document.querySelector('.pburg2').innerHTML="ئسپریسۆ";
  document.querySelector('.pburg3').innerHTML="ئسپریسۆ دبل";
  document.querySelector('.pburg4').innerHTML="ئامەریکانو";
  document.querySelector('.pburg5').innerHTML="کەباشینو";
  document.querySelector('.pburg6').innerHTML="کافی لاتی";
  document.querySelector('.pburg7').innerHTML="هۆت شوکۆلا";
  document.querySelector('.pburg8').innerHTML="قهوه تركى";
  document.querySelector('.pburg9').innerHTML="سحلب";
  document.querySelector('.pburg10').innerHTML="لیمۆنادەی گەرم";
  document.querySelector('.pburg11').innerHTML="ئاریش کەرامێل لاتی";
  document.querySelector('.pburg12').innerHTML="بەترسکوش فانیلا لاتی";
  document.querySelector('.pburg13').innerHTML="براونی لاتی جوز";
  document.querySelector('.pburg14').innerHTML="شير";
  document.querySelector('.pburg15').innerHTML="قەوە ماجە";
  document.querySelector('.pburg16').innerHTML="نەسکافی";
  document.querySelector('.pburg17').innerHTML="چای";
  document.querySelector('.pburgg1').innerHTML="چای كه سك";
  document.querySelector('.pburgg2').innerHTML="چای فاکسین";
  document.querySelector('.pburg18').innerHTML="نەسکافی دكه ل شير";
  document.querySelector('.pburg19').innerHTML="قەوە کەزووان";
  document.querySelector('.pburg20').innerHTML="هۆت شوکۆلا ئیتالی";
  document.querySelector('.pburg21').innerHTML="بەندەق";


  document.querySelector('.itemtitle2').innerHTML="ايس کەافی";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerHTML="ايس کەافی";
  document.querySelector('.pburg22').innerHTML="لاتی کەافی";
  document.querySelector('.pburg23').innerHTML="موکا";
  document.querySelector('.pburg24').innerHTML="ئاریش کەرامێل لاتی";
  document.querySelector('.k1').innerHTML="بەترسکوش فانیلا لاتی";
  document.querySelector('.k2').innerHTML="براونی لاتی";
  document.querySelector('.k3').innerHTML="شوکۆلا منتی لاتی";
  document.querySelector('.k4').innerHTML="ماجە ئایس";
  document.querySelector('.k5').innerHTML="سبانش لاتی";
  document.querySelector('.k6').innerHTML="کەرامێل";
  document.querySelector('.k7').innerHTML="براونی کەافی";


  document.querySelector('.itemtitle3').innerHTML="ئسپریسۆ شیک";
  document.querySelector('.item3').style.width='130px';
  document.querySelector('.itemtitle3').style.fontWeight=500;
  document.querySelector('.itemtitle3').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p3').innerHTML="ئسپریسۆ شیک";
  document.querySelector('.k8').innerHTML="براونی";
  document.querySelector('.k9').innerHTML="بەترسکوش";
  document.querySelector('.k10').innerHTML="کەرامێل";
  document.querySelector('.k11').innerHTML="سحلب";
  document.querySelector('.k12').innerHTML="لەمۆن";
  

  document.querySelector('.itemtitle4').innerHTML="قەهوە فرابێ";
  document.querySelector('.item4').style.width='120px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p4').innerHTML="قەهوە فرابێ";
  document.querySelector('.k13').innerHTML="قەهوە";
  document.querySelector('.k14').innerHTML="کرامل";
  document.querySelector('.k15').innerHTML="فانیلا";
  document.querySelector('.k16').innerHTML="بەندق";
  document.querySelector('.k17').innerHTML="بەترسکۆش";
  document.querySelector('.k18').innerHTML="ئەریش تڤلەنت";
  document.querySelector('.k19').innerHTML="کرامل فانیلا";
  document.querySelector('.k20').innerHTML="شکۆلا مێنت";
  document.querySelector('.k21').innerHTML="براونی بەترسکۆش";
  document.querySelector('.k22').innerHTML="قەهوە ئەریو";
  document.querySelector('.k23').innerHTML="فرابێ کرامل قەهوە";


  document.querySelector('.itemtitle5').innerHTML="مێلكشیک";
  document.querySelector('.item5').style.width='100px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerHTML="مێلكشیک";
  document.querySelector('.k24').innerHTML="فراوەلە";
  document.querySelector('.k25').innerHTML="مۆز";
  document.querySelector('.k26').innerHTML="کرامل";
  document.querySelector('.k27').innerHTML="فانیلا";
  document.querySelector('.k28').innerHTML="نوتیلا";
  document.querySelector('.k29').innerHTML="لۆتس";
  document.querySelector('.k30').innerHTML="ئەریو";
  document.querySelector('.k31').innerHTML="فراوەلە و مۆز";
  

  document.querySelector('.itemtitle6').innerHTML="سموثى";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerHTML="سموثى";
  document.querySelector('.k32').innerHTML="فراوەلە";
  document.querySelector('.k33').innerHTML="مانجو";
  document.querySelector('.k34').innerHTML="ئاناناس";
  document.querySelector('.k35').innerHTML="هنار و تووت";
  document.querySelector('.k36').innerHTML="کێوی و تەفاحە كه سك";
  document.querySelector('.k37').innerHTML="ئەرپیکۆت دۆلیۆز";
  document.querySelector('.k38').innerHTML="کەمی جابوتاکابا";
  document.querySelector('.k39').innerHTML="رازبەری تووت";
  document.querySelector('.k40').innerHTML="تروپیکا";


  document.querySelector('.itemtitle7').innerHTML="موهیتۆ";
  document.querySelector('.item7').style.width='90px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerHTML="موهیتۆ";
  document.querySelector('.k41').innerHTML="ئەعتیادی";
  document.querySelector('.k42').innerHTML="فراوەلە";
  document.querySelector('.k43').innerHTML="ئاناناس شين";
  document.querySelector('.k44').innerHTML="مانجو";
  document.querySelector('.k45').innerHTML="ببڵ کەم ئازرق";
  document.querySelector('.k46').innerHTML="جابوتاکابا و خوخ";
  document.querySelector('.k47').innerHTML="ئاریکوت و خوخ";
  document.querySelector('.k48').innerHTML="کێوی و تەفاحە  كه سك";
  document.querySelector('.k49').innerHTML="فراوەلە و مانجو";
  document.querySelector('.k50').innerHTML="تروپیکا";
  document.querySelector('.k51').innerHTML="رازبەری تووت";



  document.querySelector('.itemtitle8').innerHTML="جا طازى";
  document.querySelector('.item8').style.width='100px';
  document.querySelector('.itemtitle8').style.fontWeight=500;
  document.querySelector('.itemtitle8').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerHTML="جا طازى";
  document.querySelector('.k52').innerHTML="لیمۆن";
  document.querySelector('.k53').innerHTML="خوخ";
  document.querySelector('.k54').innerHTML="تووت";
  document.querySelector('.k55').innerHTML="لیمۆن و تووت";
  document.querySelector('.k56').innerHTML="تروپیکا";
  document.querySelector('.k57').innerHTML="باشۆن خوخ";
  document.querySelector('.k58').innerHTML="تووت و کەرز";
  document.querySelector('.k59').innerHTML="فراوەلە";
  document.querySelector('.k60').innerHTML="مانجو";
  document.querySelector('.k61').innerHTML="کەمی جابیتیكا";


  document.querySelector('.itemtitle9').innerHTML="کۆکتێل ریدبول";
  document.querySelector('.item9').style.width='130px';
  document.querySelector('.itemtitle9').style.fontWeight=500;
  document.querySelector('.itemtitle9').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p10').innerHTML="کۆکتێل ریدبول";
  document.querySelector('.k62').innerHTML="فراوەلە";
  document.querySelector('.k63').innerHTML="خوخ کۆراکۆ";
  document.querySelector('.k64').innerHTML="ببڵکەم";
  document.querySelector('.k65').innerHTML="یۆزیرنا";
  document.querySelector('.k66').innerHTML="مانجو و فراوەلە";
  document.querySelector('.k67').innerHTML="بلوبەری و هنار";
  document.querySelector('.k68').innerHTML="وایت تایکر";
  document.querySelector('.k69').innerHTML="وایت تایکر مەکسیكەن";
  document.querySelector('.k70').innerHTML="ریدبول";
  
  
  
  document.querySelector('.itemtitle10').innerHTML="شرينى";
  document.querySelector('.item10').style.width='85px';
  document.querySelector('.itemtitle10').style.fontWeight=500;
  document.querySelector('.itemtitle10').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p11').innerHTML="شرينى";
  document.querySelector('.k71').innerHTML="جیز کیک";
  document.querySelector('.k72').innerHTML="تیرامیسۆ";
  document.querySelector('.k73').innerHTML="ترالیک کیک";
  document.querySelector('.k74').innerHTML="براونی";
  document.querySelector('.k75').innerHTML="فیلڤتە سور";
  document.querySelector('.k76').innerHTML="سان سباستیان کیک";
  document.querySelector('.k77').innerHTML="کیک فەستق";
  document.querySelector('.k78').innerHTML="ئەریو کیک";
  document.querySelector('.k79').innerHTML="لۆتس کیک";
  document.querySelector('.k80').innerHTML="کیک شوكليت";
  document.querySelector('.k81').innerHTML="کیک لونس فیوشن";
  document.querySelector('.k82').innerHTML="کلیر کیک";


  
  document.querySelector('.itemtitle11').innerHTML="کەوبەکانی بسکویت";
  document.querySelector('.item11').style.width='150px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p12').innerHTML="کەوبەکانی بسکویت";
  document.querySelector('.k83').innerHTML="ئایس کریم";
  document.querySelector('.k84').innerHTML="نوتیلا";
  document.querySelector('.k85').innerHTML="فيقى";
  document.querySelector('.k86').innerHTML="کەندەر";
  document.querySelector('.k87').innerHTML="باونتی";
  document.querySelector('.k88').innerHTML="کەندەر بوینو";
  document.querySelector('.k89').innerHTML="لۆتس";

  document.querySelector('.itemtitle12').innerHTML="كرواسون";
  document.querySelector('.item12').style.width='100px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p13').innerHTML="کرواسەن";
  document.querySelector('.k90').innerHTML="کرواسەن";
  document.querySelector('.k91').innerHTML="کرواسەن نوتیلا";
  document.querySelector('.k92').innerHTML="کرواسەن ئاریو";
  document.querySelector('.k93').innerHTML="کرواسەن لوتس";
  document.querySelector('.k94').innerHTML="کرواسەن فيقى";
  document.querySelector('.k95').innerHTML="کرواسەن کرامێل";
  document.querySelector('.k96').innerHTML="کرواسەن دارک شۆکۆلا";
  document.querySelector('.k97').innerHTML="کرواسەن فەستەق";
  document.querySelector('.k98').innerHTML="کرواسەن بندق";

  document.querySelector('.itemtitle13').innerHTML="كريب";
  document.querySelector('.item13').style.width='80px';
  document.querySelector('.itemtitle13').style.fontWeight=500;
  document.querySelector('.itemtitle13').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p14').innerHTML="کریب";
  document.querySelector('.k99').innerHTML="نوتیلا";
  document.querySelector('.k100').innerHTML="ئاریو";
  document.querySelector('.k101').innerHTML="لوتس";
  document.querySelector('.k102').innerHTML="کەندەر";
  document.querySelector('.k103').innerHTML="کەندەر بوینو";
  document.querySelector('.k104').innerHTML="فیرێرو ڕوژر";
  document.querySelector('.k105').innerHTML="رافێلو";
  document.querySelector('.k106').innerHTML="کریب دگه ل  فەستەق";

  document.querySelector('.itemtitle14').innerHTML="وافل";
  document.querySelector('.item14').style.width='75px';
  document.querySelector('.itemtitle14').style.fontWeight=500;
  document.querySelector('.itemtitle14').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p15').innerHTML="وافل";
  document.querySelector('.k107').innerHTML="نوتیلا";
  document.querySelector('.k108').innerHTML="لوتس";
  document.querySelector('.k109').innerHTML="کەندەر";
  document.querySelector('.k110').innerHTML="کەندەر بوینو";
  document.querySelector('.k111').innerHTML="فیرێرو ڕوژر";
  document.querySelector('.k112').innerHTML="رافاێلو";
  document.querySelector('.k200').innerHTML="ئاریو";
  document.querySelector('.k201').innerHTML="فەستەق";

  document.querySelector('.itemtitle15').innerHTML="بانکیک";
  document.querySelector('.item15').style.width='90px';
  document.querySelector('.itemtitle15').style.fontWeight=500;
  document.querySelector('.itemtitle15').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p16').innerHTML="بانکیک";
  document.querySelector('.k113').innerHTML="نوتیلا";
  document.querySelector('.k114').innerHTML="لوتس";
  document.querySelector('.k202').innerHTML="کەندەر";
  document.querySelector('.k203').innerHTML="کەندەر بوینو";
  document.querySelector('.k204').innerHTML="فیرێرو ڕوژر";
  document.querySelector('.k205').innerHTML="رافاێلو";
  document.querySelector('.k206').innerHTML="ئاریو";
  document.querySelector('.k207').innerHTML="فەستەق";

  document.querySelector('.itemtitle16').innerHTML="مینی بانکیک";
  document.querySelector('.item16').style.width='120px';
  document.querySelector('.itemtitle16').style.fontWeight=500;
  document.querySelector('.itemtitle16').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p17').innerHTML="مینی بانکیک";
  document.querySelector('.k115').innerHTML="نوتیلا";
  document.querySelector('.k116').innerHTML="کەندەر";
  document.querySelector('.k117').innerHTML="کەندەر بوینو";
  document.querySelector('.k118').innerHTML="فیرێرو ڕوژر";
  document.querySelector('.k119').innerHTML="رافاێلو";
  document.querySelector('.k120').innerHTML="ئاریو";
  document.querySelector('.k121').innerHTML="لوتس";
  document.querySelector('.k208').innerHTML="فەستەق";

  document.querySelector('.itemtitle17').innerHTML="فه خوارن  طبيعي";
  document.querySelector('.item17').style.width='135px';
  document.querySelector('.itemtitle17').style.fontWeight=500;
  document.querySelector('.itemtitle17').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p18').innerHTML="فه خوارن  طبيعي";
  document.querySelector('.k122').innerHTML="ئەفاکادو بە شیر";
  document.querySelector('.k123').innerHTML="لیمون و نەعناع";
  document.querySelector('.k124').innerHTML="بەرەنگ";
  document.querySelector('.k125').innerHTML="کۆکتێل";
  document.querySelector('.k126').innerHTML="شیر و مۆز";
  document.querySelector('.k127').innerHTML="پینا کولادا";

  document.querySelector('.itemtitle18').innerHTML="کافیرنا كبل";
  document.querySelector('.item18').style.width='110px';
  document.querySelector('.itemtitle18').style.fontWeight=500;
  document.querySelector('.itemtitle18').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerHTML="کافیرنا كبل";
  document.querySelector('.k128').innerHTML="کەبل موهیتۆ";

  document.querySelector('.itemtitle19').innerHTML="کافیرنا سپیشال";
  document.querySelector('.item19').style.width='120px';
  document.querySelector('.itemtitle19').style.fontWeight=500;
  document.querySelector('.itemtitle19').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p20').innerHTML="کافیرنا سپیشال";
  document.querySelector('.k129').innerHTML="کافیرنا کۆکۆ مجو";
  document.querySelector('.k130').innerHTML="کافیرنا ئسریسۆ مۆز";
  document.querySelector('.k131').innerHTML="کافیرنا بۆبی مێنت";
  document.querySelector('.k132').innerHTML="کافیرنا فڕاوەله";
  document.querySelector('.k133').innerHTML="کافیرنا بەرکەر مینی بانکیک";
  document.querySelector('.k134').innerHTML="کافیرنا ڕۆز موهیتۆ";

  document.querySelector('.itemtitle20').innerHTML="صودا & ئاو";
  document.querySelector('.item20').style.width='120px';
  document.querySelector('.itemtitle20').style.fontWeight=500;
  document.querySelector('.itemtitle20').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p21').innerHTML="صودا & ئاو";
  document.querySelector('.k135').innerHTML="ئاو";
  document.querySelector('.k136').innerHTML="بڵێنک ئينيرجى ";
  document.querySelector('.k137').innerHTML="صودا بە لیمۆن";

  document.querySelector('.itemtitle21').innerHTML="لسەر کاڤيرنا";
  document.querySelector('.item21').style.width='120px';
  document.querySelector('.itemtitle21').style.fontWeight=500;
  document.querySelector('.itemtitle21').style.fontFamily="'Roboto', serif";
});

let butara = document.querySelector('.arabic');

butara.addEventListener('click', () => {
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });

  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });

  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('.itemtitle').style.fontWeight=500;
  document.querySelector('.itemtitle').style.fontFamily="'Roboto', serif";


  localStorage.setItem("lan","arb");
  document.querySelector('.p1').innerHTML="العربية";
  document.querySelector('.div1p').style.textAlign='right';
  document.querySelector('.div1p2').style.textAlign='right';
  document.querySelector('.div1p3').style.textAlign='right';
  document.querySelector('.div1p4').style.textAlign='right';
  document.querySelector('.div1p5').style.textAlign='right';
  document.querySelector('.div1p6').style.textAlign='right';
  document.querySelector('.div1p7').style.textAlign='right';
  document.querySelector('.div1p8').style.textAlign='right';
  document.querySelector('.div1p10').style.textAlign='right';
  document.querySelector('.div1p11').style.textAlign='right';
  document.querySelector('.div1p12').style.textAlign='right';
  document.querySelector('.div1p13').style.textAlign='right';
  document.querySelector('.div1p14').style.textAlign='right';
  document.querySelector('.div1p15').style.textAlign='right';
  document.querySelector('.div1p16').style.textAlign='right';
  document.querySelector('.div1p17').style.textAlign='right';
  document.querySelector('.div1p18').style.textAlign='right';
  document.querySelector('.div1p19').style.textAlign='right';
  document.querySelector('.div1p20').style.textAlign='right';
  document.querySelector('.div1p21').style.textAlign='right';

  document.querySelector('.itemtitle1').innerHTML="المشروبات الساخنة";
  document.querySelector('.div1p1').innerHTML="المشروبات الساخنة";
  document.querySelector('.pburg1').innerHTML="قهوه";
  document.querySelector('.pburg2').innerHTML="اسبريسو";
  document.querySelector('.pburg3').innerHTML="اسبريسو دبل";
  document.querySelector('.pburg4').innerHTML="امريكانو";
  document.querySelector('.pburg5').innerHTML="كباشينو";
  document.querySelector('.pburg6').innerHTML="كافي لاتي";
  document.querySelector('.pburg7').innerHTML="هوت شكولا";
  document.querySelector('.pburg8').innerHTML="قهوه تركية";
  document.querySelector('.pburg9').innerHTML="سحلب";
  document.querySelector('.pburg10').innerHTML="ليموناضة ساخن";
  document.querySelector('.pburg11').innerHTML="اريش كراميل لاتي";
  document.querySelector('.pburg12').innerHTML="بترسكوش فانيلا لاتي";
  document.querySelector('.pburg13').innerHTML="براوني لاتي بلجوز";
  document.querySelector('.pburg14').innerHTML="حليب";
  document.querySelector('.pburg15').innerHTML="قهوة ماجا";
  document.querySelector('.pburg16').innerHTML="نسكافي";
  document.querySelector('.pburg17').innerHTML="شاي";
  document.querySelector('.pburgg1').innerHTML="شاي اخضر";
  document.querySelector('.pburgg2').innerHTML="شاي فاكسين";
  document.querySelector('.pburg18').innerHTML="نسكافي بالحليب";
  document.querySelector('.pburg19').innerHTML="قهوة كزوان";
  document.querySelector('.pburg20').innerHTML="هوت شكولا اطالي";
  document.querySelector('.pburg21').innerHTML="البندق";

  document.querySelector('.itemtitle2').innerHTML="قهوه باردا";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerHTML="قهوه باردا";
  document.querySelector('.pburg22').innerHTML="لاتي كافي";
  document.querySelector('.pburg23').innerHTML="موكا";
  document.querySelector('.pburg24').innerHTML="اريش كراميل لاتي";
  document.querySelector('.k1').innerHTML="بترشكوش فانيلا لاتي";
  document.querySelector('.k2').innerHTML="براوني لاتي";
  document.querySelector('.k3').innerHTML="شكولا منت لاتي";
  document.querySelector('.k4').innerHTML="ماجا ايس";
  document.querySelector('.k5').innerHTML="سبانش لاتي";
  document.querySelector('.k6').innerHTML="كراميل";
  document.querySelector('.k7').innerHTML="براوني كافي";

  document.querySelector('.itemtitle3').innerHTML="اسبريسو شيك";
  document.querySelector('.item3').style.width='130px';
  document.querySelector('.itemtitle3').style.fontWeight=500;
  document.querySelector('.itemtitle3').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p3').innerHTML="اسبريسو شيك";
  document.querySelector('.k8').innerHTML="براوني";
  document.querySelector('.k9').innerHTML="بترشكوش";
  document.querySelector('.k10').innerHTML="كراميل";
  document.querySelector('.k11').innerHTML="سحلب";
  document.querySelector('.k12').innerHTML="ليموناضة";

  document.querySelector('.itemtitle4').innerHTML="قهوة فرابي";
  document.querySelector('.item4').style.width='120px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p4').innerHTML="قهوة فرابي";
  document.querySelector('.k13').innerHTML="قهوه";
  document.querySelector('.k14').innerHTML="كراميل";
  document.querySelector('.k15').innerHTML="فانيلا";
  document.querySelector('.k16').innerHTML="بندق";
  document.querySelector('.k17').innerHTML="بترسكوش";
  document.querySelector('.k18').innerHTML="اريش تفلنت";
  document.querySelector('.k19').innerHTML="كراميل فانيلا";
  document.querySelector('.k20').innerHTML="شكولا منت";
  document.querySelector('.k21').innerHTML="براوني بترسكوش";
  document.querySelector('.k22').innerHTML="قهوة اريو";
  document.querySelector('.k23').innerHTML="فرابي كراميل كوفي";

  document.querySelector('.itemtitle5').innerHTML="ميلكشيك";
  document.querySelector('.item5').style.width='100px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerHTML="ميلكشيك";
  document.querySelector('.k24').innerHTML="فراولة";
  document.querySelector('.k25').innerHTML="موز";
  document.querySelector('.k26').innerHTML="كراميل";
  document.querySelector('.k27').innerHTML="فانيلا";
  document.querySelector('.k28').innerHTML="نوتيلا";
  document.querySelector('.k29').innerHTML="لوتس";
  document.querySelector('.k30').innerHTML="اوريو";
  document.querySelector('.k31').innerHTML="فراولة و موز";

  document.querySelector('.itemtitle6').innerHTML="سموثي";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerHTML="سموثي";
  document.querySelector('.k32').innerHTML="فرولة";
  document.querySelector('.k33').innerHTML="مانجو";
  document.querySelector('.k34').innerHTML="اناناس";
  document.querySelector('.k35').innerHTML="رمان و توت";
  document.querySelector('.k36').innerHTML="كيوي و تفاح اخضر";
  document.querySelector('.k37').innerHTML="اربيكوت دوليوز";
  document.querySelector('.k38').innerHTML="كمي جابوتاكابا";
  document.querySelector('.k39').innerHTML="رازبيري توت";
  document.querySelector('.k40').innerHTML="تروبيكا";

  document.querySelector('.itemtitle7').innerHTML="موهيتو";
  document.querySelector('.item7').style.width='90px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerHTML="موهيتو";
  document.querySelector('.k41').innerHTML="اعتيادي";
  document.querySelector('.k42').innerHTML="فراولة";
  document.querySelector('.k43').innerHTML="اناناس ازرق";
  document.querySelector('.k44').innerHTML="مانجو";
  document.querySelector('.k45').innerHTML="ببل كم ازرق";
  document.querySelector('.k46').innerHTML="جابوتكابا بلخوخ";
  document.querySelector('.k47').innerHTML="اريكوت بلخوخ";
  document.querySelector('.k48').innerHTML="كيوي و تفاح اخضر";
  document.querySelector('.k49').innerHTML="فراولة و مانجو";
  document.querySelector('.k50').innerHTML="تروبيكا";
  document.querySelector('.k51').innerHTML="رازبيري توت";

  document.querySelector('.itemtitle8').innerHTML="شاي بارد";
  document.querySelector('.item8').style.width='100px';
  document.querySelector('.itemtitle8').style.fontWeight=500;
  document.querySelector('.itemtitle8').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerHTML="شاي بارد";
  document.querySelector('.k52').innerHTML="ليمون";
  document.querySelector('.k53').innerHTML="خوخ";
  document.querySelector('.k54').innerHTML="توت";
  document.querySelector('.k55').innerHTML="ليمون و توت";
  document.querySelector('.k56').innerHTML="تروبيكا";
  document.querySelector('.k57').innerHTML="باشون خوخ";
  document.querySelector('.k58').innerHTML="توت وكرز";
  document.querySelector('.k59').innerHTML="فراولة";
  document.querySelector('.k60').innerHTML="مانجو";
  document.querySelector('.k61').innerHTML="كمي جابيتيكا";

  document.querySelector('.itemtitle9').innerHTML="كوكتيل ريدبول";
  document.querySelector('.item9').style.width='130px';
  document.querySelector('.itemtitle9').style.fontWeight=500;
  document.querySelector('.itemtitle9').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p10').innerHTML="كوكتيل ريدبول";
  document.querySelector('.k62').innerHTML="فراولة";
  document.querySelector('.k63').innerHTML="خوخ كوراكو";
  document.querySelector('.k64').innerHTML="ببلكم";
  document.querySelector('.k65').innerHTML="يوزيرنا";
  document.querySelector('.k66').innerHTML="مانجو و فراولة";
  document.querySelector('.k67').innerHTML="بلوبيري و رمان";
  document.querySelector('.k68').innerHTML="وايت تايكر"; 
  document.querySelector('.k69').innerHTML="وايت تايكر مكسيكن"; 
  document.querySelector('.k70').innerHTML="ريدبول";
  
  document.querySelector('.itemtitle10').innerHTML="حلوى";
  document.querySelector('.item10').style.width='80px';
  document.querySelector('.itemtitle10').style.fontWeight=500;
  document.querySelector('.itemtitle10').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p11').innerHTML="حلوى";
  document.querySelector('.k71').innerHTML="جيز كيك";
  document.querySelector('.k72').innerHTML="تيراميسو";
  document.querySelector('.k73').innerHTML="تراليك كيك";
  document.querySelector('.k74').innerHTML="براوني";
  document.querySelector('.k75').innerHTML="فيلفت احمر";
  document.querySelector('.k76').innerHTML="سان ساباستيان كيك";
  document.querySelector('.k77').innerHTML="كيك بلفستق";
  document.querySelector('.k78').innerHTML="اريو كيك";
  document.querySelector('.k79').innerHTML="لوتس كيك";
  document.querySelector('.k80').innerHTML="كيك شكولا";
  document.querySelector('.k81').innerHTML="كيك لونس فيوشن";
  document.querySelector('.k82').innerHTML="كلير كيك";
  
  document.querySelector('.itemtitle11').innerHTML="أكواب البسكويت";
  document.querySelector('.item11').style.width='140px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p12').innerHTML="أكواب البسكويت";
  document.querySelector('.k83').innerHTML="ايس كريم";
  document.querySelector('.k84').innerHTML="نوتيلا";
  document.querySelector('.k85').innerHTML="فواكه";
  document.querySelector('.k86').innerHTML="كندر";
  document.querySelector('.k87').innerHTML="باونتي";
  document.querySelector('.k88').innerHTML="كندر بوينو";
  document.querySelector('.k89').innerHTML="لوتس";
  
  document.querySelector('.itemtitle12').innerHTML="كرواسون";
  document.querySelector('.item12').style.width='100px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p13').innerHTML="كرواسون";
  document.querySelector('.k90').innerHTML="كرواسون";
  document.querySelector('.k91').innerHTML="كرواسون نوتيلا";
  document.querySelector('.k92').innerHTML="كرواسون اريو";
  document.querySelector('.k93').innerHTML="كرواسون لوتس";
  document.querySelector('.k94').innerHTML="كرواسون فواكه";
  document.querySelector('.k95').innerHTML="كرواسون كراميل";
  document.querySelector('.k96').innerHTML="كرواسون دارك شكولا";
  document.querySelector('.k97').innerHTML="كرواسون فستق";
  document.querySelector('.k98').innerHTML="كرواسون بندق";

  document.querySelector('.itemtitle13').innerHTML="كريب";
  document.querySelector('.item13').style.width='80px';
  document.querySelector('.itemtitle13').style.fontWeight=500;
  document.querySelector('.itemtitle13').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p14').innerHTML="كريب";
  document.querySelector('.k99').innerHTML="نوتيلا";
  document.querySelector('.k100').innerHTML="اوريو";
  document.querySelector('.k101').innerHTML="لوتس";
  document.querySelector('.k102').innerHTML="كندر";
  document.querySelector('.k103').innerHTML="كندر بوينو";
  document.querySelector('.k104').innerHTML="فيريرو روجر";
  document.querySelector('.k105').innerHTML="رافيلو";
  document.querySelector('.k106').innerHTML="كريب بالفتسق";

  document.querySelector('.itemtitle14').innerHTML="وافل";
  document.querySelector('.item14').style.width='75px';
  document.querySelector('.itemtitle14').style.fontWeight=500;
  document.querySelector('.itemtitle14').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p15').innerHTML="وافل";
  document.querySelector('.k107').innerHTML="نوتيلا";
  document.querySelector('.k108').innerHTML="لوتس";
  document.querySelector('.k109').innerHTML="كندر";
  document.querySelector('.k110').innerHTML="كندر بوينو";
  document.querySelector('.k111').innerHTML="فيريرو روجر";
  document.querySelector('.k112').innerHTML="رافايلو";
  document.querySelector('.k200').innerHTML="اوريو";
  document.querySelector('.k201').innerHTML="فستق";
  
  document.querySelector('.itemtitle15').innerHTML="بانكيك";
  document.querySelector('.item15').style.width='85px';
  document.querySelector('.itemtitle15').style.fontWeight=500;
  document.querySelector('.itemtitle15').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p16').innerHTML="بانكيك";
  document.querySelector('.k113').innerHTML="نوتیلا";
  document.querySelector('.k114').innerHTML="لوتس";
  document.querySelector('.k202').innerHTML="كندر";
  document.querySelector('.k203').innerHTML="كندر بوینو";
  document.querySelector('.k204').innerHTML="فيريرو روجر";
  document.querySelector('.k205').innerHTML="رافايلو";
  document.querySelector('.k206').innerHTML="اوريو";
  document.querySelector('.k207').innerHTML="فستق";

  document.querySelector('.itemtitle16').innerHTML="ميني بانكيك";
  document.querySelector('.item16').style.width='120px';
  document.querySelector('.itemtitle16').style.fontWeight=500;
  document.querySelector('.itemtitle16').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p17').innerHTML="ميني بانكيك";
  document.querySelector('.k115').innerHTML="نوتیلا";
  document.querySelector('.k116').innerHTML="كندر";
  document.querySelector('.k117').innerHTML="كندر بوينو";
  document.querySelector('.k118').innerHTML="فريرو روجر";
  document.querySelector('.k119').innerHTML="رفايلو";
  document.querySelector('.k120').innerHTML="اوريو";
  document.querySelector('.k121').innerHTML="لوتس";
  document.querySelector('.k208').innerHTML="فستق";

  document.querySelector('.itemtitle17').innerHTML="عصير طبيعي";
  document.querySelector('.item17').style.width='120px';
  document.querySelector('.itemtitle17').style.fontWeight=500;
  document.querySelector('.itemtitle17').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p18').innerHTML="عصير طبيعي";
  document.querySelector('.k122').innerHTML="افاكادو مع الحليب";
  document.querySelector('.k123').innerHTML="ليمون ونعناع";
  document.querySelector('.k124').innerHTML="برتقال";
  document.querySelector('.k125').innerHTML="كوكتيل";
  document.querySelector('.k126').innerHTML="حليب و موز";
  document.querySelector('.k127').innerHTML="بينا كولادا";

  document.querySelector('.itemtitle18').innerHTML="كافيرنا كبل";
  document.querySelector('.item18').style.width='110px';
  document.querySelector('.itemtitle18').style.fontWeight=500;
  document.querySelector('.itemtitle18').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerHTML="كافيرنا كبل";
  document.querySelector('.k128').innerHTML="كبل موهيتو";

  document.querySelector('.itemtitle19').innerHTML="كافيرنا سبيشل";
  document.querySelector('.item19').style.width='120px';
  document.querySelector('.itemtitle19').style.fontWeight=500;
  document.querySelector('.itemtitle19').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p20').innerHTML="كافيرنا سبيشل";
  document.querySelector('.k129').innerHTML="كافيرنا كوكو مجو";
  document.querySelector('.k130').innerHTML="كافيرنا اسريسو موز";
  document.querySelector('.k131').innerHTML="كافيرنا بوبي منت";
  document.querySelector('.k132').innerHTML="كافيرنا فراولة";
  document.querySelector('.k133').innerHTML="كافيرنا بركر ميني بانكيك";
  document.querySelector('.k134').innerHTML="كافيرنا روز موهيتو";

  document.querySelector('.itemtitle20').innerHTML="صودا & ماء";
  document.querySelector('.item20').style.width='120px';
  document.querySelector('.itemtitle20').style.fontWeight=500;
  document.querySelector('.itemtitle20').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p21').innerHTML="صودا & ماء";
  document.querySelector('.k135').innerHTML="ماء";
  document.querySelector('.k136').innerHTML="بلنك مشروب الطاقة";
  document.querySelector('.k137').innerHTML="صودا مع الليمون";

  document.querySelector('.itemtitle21').innerHTML="عن كافيرنا";
  document.querySelector('.item21').style.width='115px';
  document.querySelector('.itemtitle21').style.fontWeight=500;
  document.querySelector('.itemtitle21').style.fontFamily="'Roboto', serif";
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
  document.querySelector('body').style.fontFamily= "'Roboto', serif";
  document.querySelector('header').style.direction='ltr';
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'left';  // Align text to the right
    element.style.alignItems = 'start';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '0';  // Set margin for the button inside the .bmm2 element
      button.style.marginLeft= '7%';
    }
  });
  localStorage.setItem("lan","eng");
  window.location.reload(true);
});



//
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
})

//s


//let ischangedL = false;

function scrollToElement(targetId) {
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate the offset position of the target element
    var targetPosition = targetElement.offsetTop;

    // Height of the fixed header (240px)
    var offset = 100;

    // Scroll to the adjusted position
    window.scrollTo({
      top: targetPosition - offset, // Adjust by subtracting the fixed header height
      behavior: 'smooth', // Smooth scrolling
    });
  } else {
    console.error(`Element with id "${targetId}" not found.`);
  }
}

// Scroll buttons for sc1 to sc8
document.addEventListener('DOMContentLoaded', () => {
  const scrollButtons = [
    { button: '.item1', target: 'sc1' },
    { button: '.item2', target: 'sc2' },
    { button: '.item3', target: 'sc3' },
    { button: '.item4', target: 'sc4' },
    { button: '.item5', target: 'sc5' },
    { button: '.item6', target: 'sc6' },
    { button: '.item7', target: 'sc7' },
    { button: '.item8', target: 'sc8' },
    { button: '.item9', target: 'sc9' },
    { button: '.item10', target: 'sc10' },
    { button: '.item11', target: 'sc11' },
    { button: '.item12', target: 'sc12' },
    { button: '.item13', target: 'sc13' },
    { button: '.item14', target: 'sc14' },
    { button: '.item15', target: 'sc15' },
    { button: '.item16', target: 'sc16' },
    { button: '.item17', target: 'sc17' },
    { button: '.item18', target: 'sc18' },
    { button: '.item19', target: 'sc19' },
    { button: '.item20', target: 'sc20' },
    { button: '.item21', target: 'sc21' }
  ];

  scrollButtons.forEach(item => {
    const button = document.querySelector(item.button);
    console.log('Button:', item.button, button);
    if (button) {
      button.addEventListener('click', function () {
        console.log('Clicked:', item.button);
        scrollToElement(item.target);
      });
    } else {
      console.error(`Button not found: ${item.button}`);
    }
  });

  function scrollToElement(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY; // Get target position
      window.scrollTo({ top: offset - 100, behavior: 'auto' }); // Scroll instantly with 10px offset
    } else {
      console.error(`Target not found: ${targetId}`);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the stored item number from localStorage
  const selectedItem = localStorage.getItem('selectedItem');
  
  if (selectedItem) {
    console.log(`Stored selected item: ${selectedItem}`);
    
    // Find the corresponding target element (scX) based on the stored item number
    const target = document.getElementById(`sc${selectedItem}`);
    
    if (target) {
      console.log(`Scrolling to: ${target.id}`);
      scrollToElement(target); // Scroll to the target element
    } else {
      console.error(`Target element with ID sc${selectedItem} not found`);
    }
    
    // Clear the localStorage item after the action to prevent unwanted behavior on future page loads
    localStorage.removeItem('selectedItem');
  } else {
    console.log("No selected item in localStorage");
  }

  function scrollToElement(target) {
    const offset = target.getBoundingClientRect().top + window.scrollY; // Get the position of the target element
    window.scrollTo({ top: offset - 130, behavior: 'auto' }); // Scroll to target with 10px offset, no animation
  }
});



// Example of toggling the layout (to simulate your layout change button)
//

//
let count= parseInt(localStorage.getItem("countcart")) || 0;
count=0;
cart.forEach((item)=>{
  count+=item.quantity;
});
console.log(count);
document.querySelector('.cart-num').innerHTML=count;
function f12(){
  if(parseInt(localStorage.getItem("countcart"))===0)
  {
    document.querySelector('.cart-bar').style.opacity=0;
    document.querySelector('.cart-bar').style.pointerEvents="none";
    
  }else
  {
    document.querySelector('.cart-bar').style.opacity=1;  
    document.querySelector('.cart-bar').style.pointerEvents="all";  
  }
}
f12();
//1

document.querySelectorAll('.js-add').forEach((button)=>{
  button.addEventListener('click',()=>{
    let it=button.dataset.productId;
    let matching;

    cart.forEach((item)=>{
      if(item.productid==it)
      {
        matching=item;
      }
    });

    if(matching)
      matching.quantity+=1;
    else{
      cart.push(
      {
          productid:it,
          quantity:1
      }
      );
      
    }
    console.log(cart);
    savetolocals();
    
    count=0;
    cart.forEach((item)=>{
      count+=item.quantity;
    });
    localStorage.setItem("countcart",count.toString());
    document.querySelector('.cart-num').innerHTML=count;
     f12();

  });
 
});

//
function htlan(){
if(localStorage.getItem('lan')=="arb")
  butara.click();
else if(localStorage.getItem('lan')=="kur")
  butkur.click()
}
htlan();


//end of 1
// Get references to the elements
// Loop through all pairs of vertical and horizontal elements
for (let i = 1; i <= 21; i++) {
  const verticalElement = document.querySelector(`.ver${i}`);  // Select the vertical element (ver1, ver2, ..., ver9)
  const horizontalContainer = document.querySelector('.items');  // The container for horizontal scrolling
  const horizontalTarget = document.querySelector(`.hor${i}`);  // Select the horizontal target (hor1, hor2, ..., hor9)

  // Function to check if the vertical element is in the viewport
  function checkScrollPosition() {
    const rect = verticalElement.getBoundingClientRect();

    // Check if the .verN element is within the viewport (vertical scroll)
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Get the current document direction (LTR or RTL)
      const isRTL = document.documentElement.dir === 'rtl';

      // Calculate the scroll position considering RTL or LTR
      let scrollPosition;
      if (isRTL) {
        // In RTL, the scroll position is calculated based on the container's total scroll width
        scrollPosition = horizontalContainer.scrollWidth - horizontalTarget.offsetLeft - horizontalTarget.offsetWidth - 30;
      } else {
        // In LTR, we use the normal left offset
        scrollPosition = horizontalTarget.offsetLeft - 30;
      }

      // Scroll the horizontal container to the .horN element
      horizontalContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  }

  // Listen for scroll events on the window for each pair
  window.addEventListener('scroll', checkScrollPosition);

  // Initial check in case the page is already scrolled down
  checkScrollPosition();
}



//
