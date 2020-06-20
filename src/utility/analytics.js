
const intervalId = setInterval(() => {
    console.log('Sending anlytics data with set Interval...')
}, 2000);
document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearTimeout(intervalId);
});