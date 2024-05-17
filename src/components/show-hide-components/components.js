const DummyComponents = {
    showLightDarkMode: true,
    showModalPopup: true,
    showGenerateQRCode: true,
    showTicTacToe: true,
    showTreeViewComponent: true,
    showCustomTabs: true
}

export default function SendFeautureData() {

    return new Promise((resolve, reject) => {
        if (DummyComponents) setTimeout(() => {
            resolve(DummyComponents)
        }, (600));
        else reject("An error occured fetching the data")
    })
}