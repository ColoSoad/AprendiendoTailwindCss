function recuperarInfoDeDark() {
    const infoDelDark = JSON.parse(localStorage.getItem('infoDark'));
    if (infoDelDark !== '') {
        let dark = infoDelDark.darkie;
        let check = infoDelDark.isChecked;
        if (check == true) {
            document.documentElement.classList.toggle(dark);
        }
    } else {
        localStorage.removeItem('infoDark');
    }
}
recuperarInfoDeDark();
