const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;

const state = {
  events: [],
};

async function render () {
  await getEvents();
  renderEvents();
}

async function getEvents () {
// const getEvents = async () => {
  try{
    const response = await fetch(API_URL);
    const json = await response.json();
    state.events = json.data;
    console.log(state.events);
  }
  catch(error) {
    console.log(error);
  }
}
window.addEventListener('load', () => {
  render();
});

const renderEvents = () => {
  const eventList = document.querySelector(`#eventList`);

  const eventLiElements = state.events.map((event) => {
    const li = document.createElement(`li`);
    li.innerHTML = `${event.name} - ${event.description}`;
    return li;
  });
  
  console.log(eventLiElements);
  eventList.replaceChildren(...eventLiElements);
}
