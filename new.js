for(i=0;i<sk.length;i++)
{
  var techskill = document.createElement("h2");
  techskill.textContent = sk[i].title;
  skill.appendChild(techskill);

  var eduli = document.createElement("h3");
  eduli.textContent = sk[i].data;
  skill.appendChild(eduli);
}
