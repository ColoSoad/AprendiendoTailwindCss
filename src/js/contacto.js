let dar = '';
function recuperarInfoDeDark() {
    const infoDelDark = JSON.parse(localStorage.getItem('infoDark'));
    if (infoDelDark !== '') {
        dar = infoDelDark.darkie;
        document.documentElement.classList.toggle(dar);
    } else {
        localStorage.removeItem('infoDark');
    }
}
recuperarInfoDeDark();
