// Change Day and Night Theme

const html = document.documentElement;
function changeTheme() {
    const date = new Date();
    const hr = date.getHours();
    const morning = 5;
    const evening = 20;
    if (hr > morning && hr < evening) {
        html.classList.remove("night");
    }
    if (hr >= evening) {
        html.classList.add("night");
    }
    if (hr >= 0 && hr <= morning) {
        html.classList.add("night");
    }
    
}
changeTheme();