import { useState, useEffect } from "react";

const SocialNetworks = (props) => {

   const gotoFacebook= () => {
    window.open(props.facebook, '_facebook_headpize');
   }


   const gotoInstagram= () => {
    window.open(props.instagram, '_instagram_headpize');
   }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="34" viewBox="0 0 77 34">
    <g id="Grupo_156" data-name="Grupo 156" transform="translate(-1376 92)">
      <circle id="Elipse_4" data-name="Elipse 4" cx="17" cy="17" r="17" transform="translate(1376 -92)" fill="#001e6c"/>
      <circle id="Elipse_5" data-name="Elipse 5" cx="17" cy="17" r="17" transform="translate(1419 -92)" fill="#001e6c"/>
      <g id="facebook" onClick={() => gotoFacebook()} transform="translate(1388.604 -83.645)">
        <path id="Caminho_33" data-name="Caminho 33" d="M170.747,102.355h3.6V93.673h2.413s.226-1.4.336-2.933h-2.735v-2a.848.848,0,0,1,.78-.7H177.1V85h-2.665c-3.773,0-3.684,2.925-3.684,3.361V90.75H169v2.922h1.75Zm0,0" transform="translate(-168.996 -85)" fill="#fff"/>
      </g>
      <g id="instagram" onClick={() => gotoFacebook()} transform="translate(1427.112 -83.645)">
        <g id="Grupo_66" data-name="Grupo 66">
          <g id="Grupo_65" data-name="Grupo 65">
            <path id="Caminho_35" data-name="Caminho 35" d="M11.886,0H5.4A5.4,5.4,0,0,0,0,5.4v6.483a5.4,5.4,0,0,0,5.4,5.4h6.483a5.4,5.4,0,0,0,5.4-5.4V5.4A5.4,5.4,0,0,0,11.886,0Zm3.782,11.886a3.786,3.786,0,0,1-3.782,3.782H5.4a3.786,3.786,0,0,1-3.782-3.782V5.4A3.786,3.786,0,0,1,5.4,1.621h6.483A3.786,3.786,0,0,1,15.668,5.4Z" fill="#fff"/>
          </g>
        </g>
        <g id="Grupo_68" data-name="Grupo 68" transform="translate(4.322 4.322)">
          <g id="Grupo_67" data-name="Grupo 67">
            <path id="Caminho_36" data-name="Caminho 36" d="M132.322,128a4.322,4.322,0,1,0,4.322,4.322A4.322,4.322,0,0,0,132.322,128Zm0,7.024a2.7,2.7,0,1,1,2.7-2.7A2.705,2.705,0,0,1,132.322,135.024Z" transform="translate(-128 -128)" fill="#fff"/>
          </g>
        </g>
        <g id="Grupo_70" data-name="Grupo 70" transform="translate(12.715 3.422)">
          <g id="Grupo_69" data-name="Grupo 69">
            <circle id="Elipse_3" data-name="Elipse 3" cx="0.576" cy="0.576" r="0.576" fill="#fff"/>
          </g>
        </g>
      </g>
    </g>
  </svg>
  
  )
};

export default SocialNetworks;
