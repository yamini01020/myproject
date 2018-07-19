// function getfile(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.careerobjective);
//   infor(data.education);
//   infor1(data.skills);
// })
var child=document.querySelector(".child1");
function details(det) {
  var img = document.createElement("img");
  img.src = det.Image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.Name;
  child.appendChild(name);
  var number = document.createElement("h3");
  number.textContent = det.Phonenumber;
  child.appendChild(number);
  var mail = document.createElement("a");
  mail.href= "mailto:dronavajjhalayamini@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);
  var heading = document.createElement("h3");
  heading.textContent = det.Text;
  child.appendChild(heading);
  var line = document.createElement("hr");
  child.appendChild(line);
  var address = document.createElement("h3");
  address.textContent = det.Adress;
  child.appendChild(address);
}
var childtwo=document.querySelector(".child2");
function career(car){
  var care = document.createElement("h2");
  care.textContent=car.head;
  childtwo.appendChild(care);
  var linec = document.createElement("hr");
  childtwo.appendChild(linec);
  var career = document.createElement("h3");
  career.textContent=car.info;
  childtwo.appendChild(career);
}
var educ=document.querySelector(".child2");
function infor(edu){
  var qua= document.createElement("h2");
  qua.textContent="Education Qualification";
  educ.appendChild(qua);
  var linea = document.createElement("hr");
  educ.appendChild(linea);

  for(i=0;i<edu.length;i++)
  {
    var deg = document.createElement("h2");
    deg.textContent = edu[i].degree;
    educ.appendChild(deg);

    var eduul = document.createElement("ul");
    var ins = document.createElement("li");
    ins.textContent = edu[i].institute;
    eduul.appendChild(ins);
    educ.appendChild(eduul);

     var eduul = document.createElement("ul");
     var dur = document.createElement("li");
     dur.textContent = edu[i].duration;
     eduul.appendChild(dur);
     educ.appendChild(eduul);
  }
}
  var skill=document.querySelector(".child2");
  function infor1(sk){
    var tech= document.createElement("h2");
    tech.textContent="Technical Skills";
    educ.appendChild(tech);
    var lineb = document.createElement("hr");
    skill.appendChild(lineb);

    var skilldata = document.createElement("table");
    skilldata.border="1";
    skilldata.width="100%";
    skill.appendChild(skilldata);

    tabledata = "";
    for(i=0;i<sk.length;i++)
    {
      tabledata+="<tr><td>"+sk[i].title+"<tr><td>"+sk[i].data;
    }
    skilldata.innerHTML=tabledata;
}
function loadjson(file){
   return new Promise((resolve,reject)=>{
     return fetch(file).then (response=>{
       if(response.ok)
       {
         resolve(response.json());
       }
       else
       {
          reject(new Error('error'));
       }

     })
   })
}
var achi=document.querySelector(".child2");
function ar(ach){
  var def= document.createElement("h3");
  def.textContent=ach.h;
  achi.appendChild(def);
  var x = document.createElement("h3");
  x.textContent=ach.a;
  achi.appendChild(x);
  var y= document.createElement("h3");
  y.textContent=ach.b;
  achi.appendChild(y);
  var z= document.createElement("h3");
  z.textContent=ach.c;
  achi.appendChild(z);
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.careerobjective);
  infor(data.education);
  infor1(data.skills);
  ar(data.ach);
})
