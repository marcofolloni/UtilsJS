/**
 * Funzione per la generazione di un tag DIV
 * 
 * @param {*} id identificatore
 * @param {*} text testo contenuto
 * @param {*} classes classi da aggiungere
 * @param {*} attributes oggetto attributo
 * @returns 
 */
export function createDiv( id, text = '', classes = [], attributes = {} ) {
    let defaultDiv = document.createElement( 'div' );
    defaultDiv.innerHTML = text;
    defaultDiv.classList.add( ...classes );
    for( const[ key, value ] of Object.entries( attributes ) ) {
        defaultDiv.setAttribute( key, value )
    }
    defaultDiv.id = id;
    return defaultDiv;
}

/**
 * Funzione per la generazione di un tag INPUT
 * 
 * @param {*} id 
 * @param {*} type 
 * @param {*} placeholder 
 * @param {*} classes 
 * @param {*} datalist 
 * @returns 
 */
export function createInput( id, type, placeholder = '', classes = [], datalist = false ){
    let defaultInput = document.createElement( 'input' );
    defaultInput.name = defaultInput.id = id;
    defaultInput.type = type;
    defaultInput.placeholder = placeholder;
    defaultInput.classList.add( ...classes );
    if( datalist ) defaultInput.setAttribute( 'list', `${id}-datalist` );
    return defaultInput;
}

/**
 * Funzione per la generazione di una SELECT con relativi OPTIONS
 * 
 * @param {*} id 
 * @param {*} placeholder 
 * @param {*} classes 
 * @param {*} options 
 * @returns 
 */
export function createSelect( id, placeholder, classes = [], options = [] ){
    let defaultSelect = document.createElement( 'select' );
    let option;
    defaultSelect.name = defaultSelect.id = id;
    defaultSelect.placeholder = placeholder;
    defaultSelect.classList.add( ...classes );
    for( const[ key, value ] of Object.entries( options ) ) {
        option = document.createElement( 'option' );
        option.value = key;
        option.innerText = value;
        defaultSelect.appendChild( option );
    }
    return defaultSelect;
}

/**
 * Funzione per la generazione di un DATALIST
 * 
 * @param {*} id 
 * @param {*} options 
 * @returns 
 */
export function createDataList( id, options = [] ){
    let defaultDataList = document.createElement( 'datalist' );
    let option;
    defaultDataList.id = id;
    for( const[ key, value ] of Object.entries( options ) ) {
        option = document.createElement( 'option' );
        option.value = key;
        defaultDataList.appendChild( option );
    }
    return defaultDataList;
}

/**
 * Funzione per la generazione di un BUTTON
 * 
 * @param {*} label 
 * @param {*} classes 
 * @returns 
 */
export function createBtn( label, classes = [] ){
    let defaultBtn = document.createElement( 'button' );
    defaultBtn.innerHTML = label;
    defaultBtn.classList.add( 'btn-cuneo' );
    defaultBtn.classList.add( ...classes );
    return defaultBtn;
}

/**
 * Funzione per la generazione di un tag A
 * 
 * @param {*} label 
 * @param {*} href 
 * @param {*} target 
 * @param {*} classes 
 * @returns 
 */
export function createA( label, href, target = '_blank', classes = [] ){
    let a = document.createElement( 'a' );
    a.innerText = label;
    a.href = href;
    a.target = target;
    a.classList.add( ...classes );
    return a;
}