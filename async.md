# Esercizio di chiamata asincrona
```javascript
function getPastEvent() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (Math.random() <0.2) {
        return reject(new Error ("Conessione instabile, impossibile recuperare l'evento."));
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];
      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}
async function travelThroughHistory(n) {
  try{
      const promises = [...Array(n)].map(()=> getPastEvent());
      const risultato = await Promise.allSettled(promises);
      const events = risultato
      .filter(({status})=>status === 'fulfilled')
      .map(({value})=>value);

      const eventounico= [...new Map(events.map (evento => [`${evento.year}- ${evento.name}`, evento]))
      .values()].filter(evento => evento.year <2000).sort((a,b)=> a.year-b.year);
      return eventounico;
  } catch (error) {
    console.log("C'è un errore: ", error)
  }
}
travelThroughHistory(10)
.then((risultati)=> {
  console.log("Lista");
  console.table(risultati);
}) 
.catch((error) => {console.log("Qualcosa è andato storto:", error)
});
```
