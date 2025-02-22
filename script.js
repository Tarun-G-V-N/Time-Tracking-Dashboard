const workCurrentData = document.querySelector("#work .current");
const workPreviousData = document.querySelector("#work .previous");
const playCurrentData = document.querySelector("#play .current");
const playPreviousData = document.querySelector("#play .previous");
const studyCurrentData = document.querySelector("#study .current");
const studyPreviousData = document.querySelector("#study .previous");
const exerciseCurrentData = document.querySelector("#exercise .current");
const exercisePrevData = document.querySelector("#exercise .previous");
const socialCurrentData = document.querySelector("#social .current");
const socialPreviousData = document.querySelector("#social .previous");
const careCurrentData = document.querySelector("#selfCare .current");
const carePreviousData = document.querySelector("#selfCare .previous");
const dailyLink = document.getElementById("daily");
const weeklyLink = document.getElementById("weekly");
const monthlyLink = document.getElementById("monthly");


function getDailyData(data) {
    workCurrentData.textContent = data[0].timeframes.daily.current + "hrs";
    workPreviousData.textContent = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
    playCurrentData.textContent = data[1].timeframes.daily.current + "hrs";
    playPreviousData.textContent = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
    studyCurrentData.textContent = data[2].timeframes.daily.current + "hrs";
    studyPreviousData.textContent = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";
    exerciseCurrentData.textContent = data[3].timeframes.daily.current + "hrs";
    exercisePrevData.textContent = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";
    socialCurrentData.textContent = data[4].timeframes.daily.current + "hrs";
    socialPreviousData.textContent = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";
    careCurrentData.textContent = data[5].timeframes.daily.current + "hrs";
    carePreviousData.textContent = "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
}

function getWeeklytData(data) {
    workCurrentData.textContent = data[0].timeframes.weekly.current + "hrs";
    workPreviousData.textContent = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
    playCurrentData.textContent = data[1].timeframes.weekly.current + "hrs";
    playPreviousData.textContent = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
    studyCurrentData.textContent = data[2].timeframes.weekly.current + "hrs";
    studyPreviousData.textContent = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
    exerciseCurrentData.textContent = data[3].timeframes.weekly.current + "hrs";
    exercisePrevData.textContent = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
    socialCurrentData.textContent = data[4].timeframes.weekly.current + "hrs";
    socialPreviousData.textContent = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
    careCurrentData.textContent = data[5].timeframes.weekly.current + "hrs";
    carePreviousData.textContent = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
}

function getMonthlyData(data) {
    workCurrentData.textContent = data[0].timeframes.monthly.current + "hrs";
    workPreviousData.textContent = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
    playCurrentData.textContent = data[1].timeframes.monthly.current + "hrs";
    playPreviousData.textContent = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";
    studyCurrentData.textContent = data[2].timeframes.monthly.current + "hrs";
    studyPreviousData.textContent = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";
    exerciseCurrentData.textContent = data[3].timeframes.monthly.current + "hrs";
    exercisePrevData.textContent = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";
    socialCurrentData.textContent = data[4].timeframes.monthly.current + "hrs";
    socialPreviousData.textContent = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";
    careCurrentData.textContent = data[5].timeframes.monthly.current + "hrs";
    carePreviousData.textContent = "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
}

dailyLink.addEventListener("click", async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    getDailyData(data);
});
weeklyLink.addEventListener("click", async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    getWeeklytData(data);
});
monthlyLink.addEventListener("click", async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    getMonthlyData(data);
});