const sets={
 training:["#FootballTraining","#SoccerTraining","#FootballSkills","#EntrainementFootball","#Performance","#Profoot"],
 talent:["#FootballTalent","#YoungTalent","#FutureStars","#DetectionFootball","#JeuneTalent","#Profoot"],
 news:["#FootballNews","#ActuFootball","#Football","#Soccer","#Mercato","#Profoot"],
 academy:["#FootballAcademy","#FormationFootball","#YouthFootball","#JeunesTalents","#SoccerDevelopment","#Profoot"],
 recruit:["#FootballRecruitment","#FootballScouting","#PlayerRecruitment","#ClubFootball","#ScoutFootball","#Profoot"]
};
let current="";
const tags=document.getElementById("tags"),copy=document.getElementById("copy");
document.getElementById("generate").addEventListener("click",()=>{current=sets[document.getElementById("topic").value].join(" ");tags.textContent=current;copy.disabled=false;});
copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(current);copy.textContent="COPIÉ !";setTimeout(()=>copy.textContent="COPIER LES HASHTAGS",1600)}catch(e){copy.textContent="Sélectionne et copie le texte";}});
const dateInput=document.getElementById("date");dateInput.value=new Date().toISOString().slice(0,10);
document.getElementById("add").addEventListener("click",()=>{const idea=document.getElementById("idea").value.trim(),date=dateInput.value;if(!idea||!date){alert("Ajoute une idée et une date.");return;}const item=document.createElement("div");item.className="schedule-item";const title=document.createElement("b");title.textContent=idea;const small=document.createElement("small");small.textContent=new Date(date+"T12:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"});item.append(title,small);const area=document.getElementById("schedule");if(area.querySelector(".muted"))area.innerHTML="";area.append(item);document.getElementById("idea").value="";});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));