function generateVigenereTable(row, word) {
    let table = []

    //filter key
    let filtered_word = new Set()
    let first_row = row
    for (i in word) {
        if (row.includes(word[i])) {
            //add to a set (avoid duplicates)
            filtered_word.add(word[i])
            //remove the letter from row
            first_row = first_row.replace(word[i],'')
        }
    }
    
    //turn the set into string
    filtered_word = Array.from(filtered_word).join('')

    //generate first row
    first_row = filtered_word + first_row
    table.push(first_row)
    //make rows
    while (table.length < row.length) {
        let r = table[table.length-1]
        table.push(r.slice(1) + r[0])

        
    }
    
    console.log("       lignes générées :",table.length)

    return table
}

function encodeVigenereTable(row, vignere_word, encoding_key, txt) {

    console.log("Démarrage du processus :",txt)

    
    
    let result = ""

    console.log("   Génération de la table de Vinegère")

    let table = generateVigenereTable(row,vignere_word)

    console.log("   Ajustement des paramètres")
    
    //repeat encoding key
    let extended_encoding_key = encoding_key

    while (extended_encoding_key.length < txt.length) {
        extended_encoding_key += encoding_key
        
    }

    //truncate
    extended_encoding_key = extended_encoding_key.slice(0,txt.length)

    console.log("       Ajustement de la clé d'encodage")
    console.log("           Clé d'encodage finale :",extended_encoding_key)

    //remove unknown char
    let fixed_txt = ""

    for (i in txt) {
        if ( row.includes(txt[i]) ) {
            fixed_txt+=txt[i]
        }
    }

    console.log("       Ajustement du texte à encoder")
    console.log("           Texte final :",fixed_txt)


    console.log("   Encodage du texte")



    //encoding word
    for (i in fixed_txt) {

        //row index
        let row_index = 0
        
            //look which row start with txt[i]
        for (v in table) {
            if (table[v][0] == fixed_txt[i]) {
                row_index = v
            }
        }

        //column index
        let column_index = table[0].indexOf(extended_encoding_key[i])

        //result
        let c = table[row_index][column_index]
        result += c

        console.log("       Ligne n°"+row_index+", caractère n°"+column_index+" de la table de Vinegère")
        console.log("           ",fixed_txt[i],"encodé en",c)
    }

    console.log("Fin du processus :",result)
    return result
}

function decodeVigenereTable(row, vignere_word, encoding_key, txt) {
    console.log("Démarrage du processus :",txt)
    
    let result = ""

    console.log("   Génération de la table de Vinegère")

    let table = generateVigenereTable(row,vignere_word)

    console.log("   Ajustement des paramètres")
    
    //repeat encoding key
    let extended_encoding_key = encoding_key

    while (extended_encoding_key.length < txt.length) {
        extended_encoding_key += encoding_key
        
    }

    //truncate
    extended_encoding_key = extended_encoding_key.slice(0,txt.length)

    console.log("       Ajustement de la clé d'encodage")
    console.log("           Clé d'encodage finale :",extended_encoding_key)


    console.log("   Décodage du texte")

    /*
    for (i in txt) {

        console.log("       Recherche inversé pour",txt[i])

        let c = ""
        
        //look each row
        for (let v = 0; v < table.length; v++) {

            //if char as expected pos, then the 1st letter is what was encoded
            if (table[v][i]==txt[i]) {

                console.log("           Ligne n°"+v+", colonne n°"+i+" de la table de Vinegère")
                console.log("               "+txt[i]+" décodé en "+table[v][0])

                c = table[v][0]
            }
        }

        result += c
    }
    */
    for (i in txt) {
        let column = extended_encoding_key[i] //which letter from key was it associated to
        let column_index = table[0].indexOf(column) //where was it on 1st row

        for (let v = 0; v < table.length; v++) {
            if (table[v][column_index]==txt[i]) {

                result += table[v][0]

                console.log("           Ligne n°"+v+", colonne n°"+column_index+" de la table de Vinegère")
                console.log("               "+txt[i]+" décodé en "+table[v][0])
            }
        }
    }


    console.log("Fin du processus :",result)
    return result
}

let r = "abcdefghijklmnopqrstuvwxyz"
let vk = "couilleéééé"
let k = "zebi"

let enc = encodeVigenereTable(r,vk,k,"couile")
decodeVigenereTable(r,vk,k,enc)