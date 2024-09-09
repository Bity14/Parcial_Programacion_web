

const obtenerValorInputNombre = () => {
    let inputTexto = document.getElementById("input_summoner")
    let summoner = inputTexto.value
    peticionApi(summoner)
}

const obtenerNombre = () =>{
    let input_texto = document.getElementById("input_summoner")
    let summoner = input_texto.value
    return summoner
}
    

const peticionApi = (champion) => {
    const baseURL = 'https://ddragon.leagueoflegends.com/'
    const enpoint1 = `cdn/14.17.1/data/en_US/champion/${champion}.json`
    const url = `${baseURL}${enpoint1}`
    console.log(url)
    axios
        .get(url)
        .then(res => printData(res.data))
        .catch(err => console.log(err))
}

const printData = (data) => {

    let respuesta = document.getElementById('show-info');
    let nombre = obtenerNombre()
    const rutaNombre = `${data.data[nombre].name}`
    const rutaLore = `${data.data[nombre].lore}`
    const rutaTitle = `${data.data[nombre].title}`
    respuesta.innerHTML = 
    `
        <h1>${rutaNombre}<h1>
        <h2>${rutaTitle}<h2>
        <h3>${rutaLore}<h3>
    `
}