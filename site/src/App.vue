<template>
    <div id="pp">
        <div id="info">
            

            <div id="info_txt" v-if="rappelDisplayed || solutionDisplayed">
                <div id="rappel" v-if="rappelDisplayed">
                    un texte :
                    <div class="codeblock">
                        PoLrNoFrTsAuRhOgNoNb(Og+B)NoNpBhPtTlOs
                    </div>

                    une énigme qui débloque la clé privé : 
                    <div class="codeblock">
                        D'apparence invisible, approche toi de moi et tu perd ton éclat, qui suis-je ?
                    </div>
                    <div class="tip">
                        <div>🛈</div>
                        <div>
                            la véritable "clé privé" c'est la réponse de l'énigme traduite en anglais
                        </div>
                    </div>

                    une autre énigme qui débloque la clé publique : 
                    <div class="codeblock">
                        soixante pommes vertes et douze oranges toutes les années qui pour toujours règne sur le verger. Roi de tout fruits français ainsi est son surnom. Qui est-il ?
                    </div>
                </div>

                <div id="md" v-if="solutionDisplayed">
                    <h2>Clé publique (public)</h2>
                    Pour la clé publique il fallait prendre un mot sur quatre
                    <div class="codeblock">soixante pommes vertes et douze oranges toutes les années qui pour toujours règne sur le verger. Roi de tout fruits français ainsi est son surnom.</div>
                    donnait alors
                    <div class="codeblock">soixante douze années règne Roi français surnom</div>
                    et quel roi français a régné pendant 72 ans ? <strong>Louis XIV</strong><br>et quel est son surnom ? <strong>le roi-soleil</strong>

                    <div class="codeblock">La clé publique était donc <code>roi-soleil</code></div>

                    <h2>Clé privée</h2>
                    Pour la clé privée la solution était un trou noir, car il est invisible et si une étoile s'en approche elle est aspirée (donc son éclat disparait)
                    <div class="codeblock">La clé privée était donc <code>blackhole</code></div>

                    <h2>Le texte</h2>
                    Ok alors là ça devient plus compliqué.
                    Il fallait remarquer que c'était une suite d'éléments chimiques<br>
                    Et ces éléments ont un numéro atomique associé, donc
                    <div class="codeblock">PoLrNoFrTsAuRhOgNoNb(Og+B)NoNpBhPtTlOs</div>
                    Devient alors
                    <div class="codeblock">84 103 102 87 117 79 45 118 102 41 (118 + 5) 102 93 107 78 81 76</div>
                    Ensuite il fallait faire l'addition et convertir chaque nombre en lettre grâce aux codes ASCII
                    On obtient alors
                    <div class="codeblock">T g f W u O - v f ) { f ] k N Q L</div>
                    Ensuite il fallait aller sur le site <a href="https://chasse-au-tresor-2024.vercel.app/">https://chasse-au-tresor-2024.vercel.app/</a> pour obtenir en résultat ceci :
                    <div class="codeblock">pastebin_BvszraPG</div>
                    Ensuite il fallait aller sur cet url : <a href="https://pastebin.com/BvszraPG">https://pastebin.com/BvszraPG</a>
                    Le titre de ce pastebin est
                    <div class="codeblock">URL_DE_OUF/thefinals</div> 
                    et il contient une suite de nombres :
                    <div class="codeblock">84 104 101 
                    85 110 100 
                    101 114 100
                    111 103 115</div>
                    Il fallait, encore, convertir en code ASCII
                    Ce qui donne <div class="codeblock">TheUnderdogs</div>
                    Il fallait aller sur l'url <a href="https://chasse-au-tresor-2024.vercel.app/thefinals">https://chasse-au-tresor-2024.vercel.app/thefinals</a> et suivre les instructions dessus.
                </div>
            </div>

            <div id="info_btn">
                <button @click="solutionDisplayed = false; rappelDisplayed = !rappelDisplayed">Rappel</button>
                <button @click="rappelDisplayed = false; solutionDisplayed = !solutionDisplayed">Solution</button>
            </div>
           
        </div>
        
        <RouterView></RouterView>
        <canvas id="bg"></canvas>
    </div>
</template>
  
<script>
    import * as mtr from '@/assets/js/matrix.mjs'

    import { RouterView } from 'vue-router'

    import { ref } from 'vue'

    const rappelDisplayed = ref(false)
    const solutionDisplayed = ref(false)
 
    export default {
        name: 'App',
        setup() {
            return {
                rappelDisplayed,
                solutionDisplayed,
                md
            }
        },
        components: {
            RouterView
        },
        mounted() {
            mtr.init()
        }
    }
</script>

<style>
 
#pp {
    position: absolute;
}

#pp > * {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
}

#bg {
    z-index: 0;
}

/* codeblock */

.codeblock {
    font-family: monospace;
    font-size: 1.2em;
    padding: var(--padding);
    border: 2px solid var(--txt-color);
    border-radius: var(--border-radius);
    background-color: var(--bg-color);
}

/* tip */

.tip > *:nth-child(2) {
    font-size: 0.8em !important;
    color: var(--txt-color);
    font-style: italic;
    opacity: 0.5;
}

.tip > *:nth-child(1) {
    font-size: 1.5em;
    color: var(--txt-color);

    background-color: #0077ff;
    border-radius: 10px;
    width: 1.5em;
    aspect-ratio: 1 / 1;
}

.tip {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: var(--gap);
    flex-direction: row;
}
/* info */

#info {
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: right;

    gap: var(--gap);

    position: absolute;
    bottom: 0px;
    left: 0px;

    pointer-events: none;
}

#info > * {
    width: fit-content;
}

#info button {
    pointer-events: all;
}

#info_btn {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: end;

    gap: var(--gap);

    padding: var(--padding);
}

#info_txt > *{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;

    backdrop-filter: blur(5px);

    border: 2px solid var(--txt-color);

    padding: var(--padding);

    gap: var(--gap);
}

#md {
    pointer-events: all;
    overflow: auto;
    height: 80vh;

    text-align: left;
}

</style>