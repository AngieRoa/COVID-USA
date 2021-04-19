<template>
  <gmap-map
    :id="Map"
        :center="center"
        :zoom="zoom"
        :options="options"
        style="width: 100%; height: 950px;">
        
<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Alabama"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-1" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-1" triggers="hover" placement="top">
      <template #title>{{Location_Alabama}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Alabama}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Alabama}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Alabama}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Alabama}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Alaska"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-2" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-2" triggers="hover" placement="top">
      <template #title>{{Location_Alaska}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Alaska}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Alaska}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Alaska}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Alaska}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Arizona"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-3" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-3" triggers="hover" placement="top">
      <template #title>{{Location_Arizona}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Arizona}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Arizona}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Arizona}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Arizona}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Arkanzas"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-4" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-4" triggers="hover" placement="top">
      <template #title>{{Location_Arkansas}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Arkansas}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Arkansas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Arkansas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Arkansas}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_California"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-5" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-5" triggers="hover" placement="top">
      <template #title>{{Location_California}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_California}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_California}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_California}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_California}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Colorado"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-6" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-6" triggers="hover" placement="top">
      <template #title>{{Location_Colorado}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Colorado}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Colorado}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Colorado}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Colorado}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Connecticut"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-7" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-7" triggers="hover" placement="top">
      <template #title>{{Location_Connecticut}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Connecticut}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Connecticut}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Connecticut}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Connecticut}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Delaware"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-8" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-8" triggers="hover" placement="top">
      <template #title>{{Location_Delaware}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Delaware}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Delaware}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Delaware}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Delaware}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_DistrictofColumbia"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-9" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-9" triggers="hover" placement="top">
      <template #title>{{Location_DistrictofColumbia}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_DistrictofColumbia}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_DistrictofColumbia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_DistrictofColumbia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_DistrictofColumbia}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Florida"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-10" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-10" triggers="hover" placement="top">
      <template #title>{{Location_Florida}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Florida}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Florida}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Florida}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Florida}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Georgia"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-11" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-11" triggers="hover" placement="top">
      <template #title>{{Location_Georgia}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Georgia}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Georgia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Georgia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Georgia}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Hawaii"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-12" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-12" triggers="hover" placement="top">
      <template #title>{{Location_Hawaii}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Hawaii}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Hawaii}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Hawaii}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Hawaii}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Idaho"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-13" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-13" triggers="hover" placement="top">
      <template #title>{{Location_Idaho}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Idaho}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Idaho}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Idaho}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Idaho}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Illinois"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-14" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-14" triggers="hover" placement="top">
      <template #title>{{Location_Illinois}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Illinois}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Illinois}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Illinois}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Illinois}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Indiana"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-15" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-15" triggers="hover" placement="top">
      <template #title>{{Location_Indiana}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Indiana}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Indiana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Indiana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Indiana}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Iowa"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-16" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-16" triggers="hover" placement="top">
      <template #title>{{Location_Iowa}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Iowa}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Iowa}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Iowa}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Iowa}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Kansas"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-17" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-17" triggers="hover" placement="top">
      <template #title>{{Location_Kansas}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Kansas}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Kansas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Kansas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Kansas}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Kentucky"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-18" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-18" triggers="hover" placement="top">
      <template #title>{{Location_Kentucky}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Kentucky}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Kentucky}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Kentucky}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Kentucky}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Louisiana"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-19" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-19" triggers="hover" placement="top">
      <template #title>{{Location_Louisiana}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Louisiana}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Louisiana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Louisiana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Louisiana}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Maine"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-20" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-20" triggers="hover" placement="top">
      <template #title>{{Location_Maine}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Maine}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Maine}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Maine}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Maine}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Maryland"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-21" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-21" triggers="hover" placement="top">
      <template #title>{{Location_Maryland}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Maryland}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Maryland}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Maryland}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Maryland}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Massachusetts"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-22" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-22" triggers="hover" placement="top">
      <template #title>{{Location_Massachusetts}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Massachusetts}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Massachusetts}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Massachusetts}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Massachusetts}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Michigan"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-23" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-23" triggers="hover" placement="top">
      <template #title>{{Location_Michigan}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Michigan}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Michigan}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Michigan}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Michigan}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Minnesota"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-24" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-24" triggers="hover" placement="top">
      <template #title>{{Location_Minnesota}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Minnesota}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Minnesota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Minnesota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Minnesota}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Mississippi"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-25" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-25" triggers="hover" placement="top">
      <template #title>{{Location_Mississippi}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Mississippi}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Mississippi}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Mississippi}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Mississippi}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Missouri"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-26" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-26" triggers="hover" placement="top">
      <template #title>{{Location_Missouri}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Missouri}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Missouri}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Missouri}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Missouri}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Montana"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-27" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-27" triggers="hover" placement="top">
      <template #title>{{Location_Montana}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Montana}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Montana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Montana}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Montana}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Nebraska"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-28" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-28" triggers="hover" placement="top">
      <template #title>{{Location_Nebraska}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Nebraska}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Nebraska}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Nebraska}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Nebraska}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Nevada"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-29" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-29" triggers="hover" placement="top">
      <template #title>{{Location_Nevada}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Nevada}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Nevada}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Nevada}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Nevada}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_NewHampshire"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-30" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-30" triggers="hover" placement="top">
      <template #title>{{Location_NewHampshire}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NewHampshire}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NewHampshire}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NewHampshire}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NewHampshire}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_NewJersey"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-31" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-31" triggers="hover" placement="top">
      <template #title>{{Location_NewJersey}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NewJersey}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NewJersey}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NewJersey}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NewJersey}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_NewMexico"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-32" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-32" triggers="hover" placement="top">
      <template #title>{{Location_NewMexico}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NewMexico}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NewMexico}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NewMexico}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NewMexico}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_NewYork"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-33" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-33" triggers="hover" placement="top">
      <template #title>{{Location_NewYork}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NewYork}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NewYork}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NewYork}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NewYork}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_NorthCarolina"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-34" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-34" triggers="hover" placement="top">
      <template #title>{{Location_NorthCarolina}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NorthCarolina}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NorthCarolina}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NorthCarolina}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NorthCarolina}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_NorthDakota"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-35" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-35" triggers="hover" placement="top">
      <template #title>{{Location_NorthDakota}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_NorthDakota}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_NorthDakota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_NorthDakota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_NorthDakota}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Ohio"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-36" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-36" triggers="hover" placement="top">
      <template #title>{{Location_Ohio}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Ohio}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Ohio}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Ohio}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Ohio}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Oklahoma"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-37" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-37" triggers="hover" placement="top">
      <template #title>{{Location_Oklahoma}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Oklahoma}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Oklahoma}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Oklahoma}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Oklahoma}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Oregon"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-38" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-38" triggers="hover" placement="top">
      <template #title>{{Location_Oregon}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Oregon}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Oregon}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Oregon}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Oregon}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Pennsylvania"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-39" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-39" triggers="hover" placement="top">
      <template #title>{{Location_Pennsylvania}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Pennsylvania}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Pennsylvania}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Pennsylvania}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Pennsylvania}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_PuertoRico"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-40" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-40" triggers="hover" placement="top">
      <template #title>{{Location_PuertoRico}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_PuertoRico}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_PuertoRico}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_PuertoRico}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_PuertoRico}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_RhodeIsland"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-41" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-41" triggers="hover" placement="top">
      <template #title>{{Location_RhodeIsland}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_RhodeIsland}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_RhodeIsland}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_RhodeIsland}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_RhodeIsland}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_SouthCarolina"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-42" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-42" triggers="hover" placement="top">
      <template #title>{{Location_SouthCarolina}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_SouthCarolina}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_SouthCarolina}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_SouthCarolina}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_SouthCarolina}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_SouthDakota"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-43" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-43" triggers="hover" placement="top">
      <template #title>{{Location_SouthDakota}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_SouthDakota}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_SouthDakota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_SouthDakota}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_SouthDakota}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Tennessee"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-44" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-44" triggers="hover" placement="top">
      <template #title>{{Location_Tennessee}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Tennessee}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Tennessee}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Tennessee}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Tennessee}}</p>
  </b-popover>
</div>
<!--Fin Marker-->




      <!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Texas"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-45" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      <div class="text-center my-3">
      <b-popover target="popover-target-45" triggers="hover" placement="top">
      <template #title>{{Location_Texas}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Texas}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Texas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Texas}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Texas}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Utah"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-46" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-46" triggers="hover" placement="top">
      <template #title>{{Location_Utah}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Utah}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Utah}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Utah}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Utah}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Vermont"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-47" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-47" triggers="hover" placement="top">
      <template #title>{{Location_Vermont}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Vermont}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Vermont}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Vermont}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Vermont}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Virginia"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-48" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-48" triggers="hover" placement="top">
      <template #title>{{Location_Virginia}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Virginia}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Virginia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Virginia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Virginia}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->


<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Washington"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-49" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-49" triggers="hover" placement="top">
      <template #title>{{Location_Washington}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Washington}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Washington}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Washington}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Washington}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_WestVirginia"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-50" class="MinPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-50" triggers="hover" placement="top">
      <template #title>{{Location_WestVirginia}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_WestVirginia}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_WestVirginia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_WestVirginia}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_WestVirginia}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->

<!--Marker-->
      <gmap-custom-marker 
      :marker="marker_Wisconsin"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-51" class="punto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-51" triggers="hover" placement="top">
      <template #title>{{Location_Wisconsin}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Wisconsin}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Wisconsin}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Wisconsin}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Wisconsin}}</p>
  </b-popover>
</div>
<!--Fin Marker-->


<!--Marker -->
      <gmap-custom-marker 
      :marker="marker_Wyoming"
      :clickable="true"
      @click="center=m.position"
      :offsetX="-20"
      :offsetY="-40"
      >
      <img id="popover-target-52" class="GranPunto" src="../components/Map/marker.png" />

      </gmap-custom-marker>
      
      <div class="text-center my-3">
      <b-popover target="popover-target-52" triggers="hover" placement="top">
      <template #title>{{Location_Wyoming}}</template>
      <h5 class="cardMap-h5"><img src="https://img.icons8.com/pastel-glyph/24/fa314a/information--v1.png"/> Estos datos fueron cargados en:  {{Updated_Wyoming}}</h5>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#4a90e2;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,166.625c-44.4577,0 -80.625,-36.1673 -80.625,-80.625c0,-44.4577 36.1673,-80.625 80.625,-80.625c44.4577,0 80.625,36.1673 80.625,80.625c0,44.4577 -36.1673,80.625 -80.625,80.625z" fill="#3498db"></path><path d="M86,6.45c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55M86,4.3c-45.12205,0 -81.7,36.57795 -81.7,81.7c0,45.12205 36.57795,81.7 81.7,81.7c45.12205,0 81.7,-36.57795 81.7,-81.7c0,-45.12205 -36.57795,-81.7 -81.7,-81.7z" fill="#4e7ab5"></path><g><path d="M43.43215,115.42275l51.686,-51.68385l-15.1489,-15.3639h43.65575v43.65575l-14.8264,-14.6114l-51.68385,51.686z" fill="#ffffff"></path><path d="M122.55,49.45v40.0115l-12.23565,-12.05935l-1.52005,-1.49855l-1.5093,1.51145l-50.17025,50.17025l-12.16255,-12.16255l50.17025,-50.17025l1.5093,-1.5093l-1.49855,-1.52005l-12.5947,-12.77315h40.0115M124.7,47.3h-47.3l16.2024,16.43245l-51.6903,51.6903l15.20265,15.20265l51.6903,-51.6903l15.89495,15.6649v-47.3z" fill="#4e7ab5"></path></g></g></g></svg>
            Casos confirmados: {{Confirmed_Wyoming}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#b1bc1a"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#04692f"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
           Recuperados: {{Recovered_Wyoming}}</p>
            <p class="cardMap-p"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,163.4c-20.6744,0 -40.1104,-8.0496 -54.7304,-22.6696c-14.62,-14.62 -22.6696,-34.056 -22.6696,-54.7304c0,-20.6744 8.0496,-40.1104 22.6696,-54.7304c14.62,-14.62 34.056,-22.6696 54.7304,-22.6696c20.6744,0 40.1104,8.0496 54.7304,22.6696c14.62,14.62 22.6696,34.056 22.6696,54.7304c0,20.6744 -8.0496,40.1104 -22.6696,54.7304c-14.62,14.62 -34.056,22.6696 -54.7304,22.6696z" fill="#e74c3c"></path><path d="M86,11.46667c19.90613,0 38.62547,7.75147 52.7008,21.83253c14.08107,14.07533 21.83253,32.79467 21.83253,52.7008c0,19.90613 -7.75147,38.62547 -21.83253,52.7008c-14.07533,14.08107 -32.79467,21.83253 -52.7008,21.83253c-19.90613,0 -38.62547,-7.75147 -52.7008,-21.83253c-14.08107,-14.07533 -21.83253,-32.79467 -21.83253,-52.7008c0,-19.90613 7.75147,-38.62547 21.83253,-52.7008c14.08107,-14.07533 32.79467,-21.83253 52.7008,-21.83253M86,5.73333c-20.54253,0 -41.08507,7.83747 -56.75427,23.5124c-31.34413,31.34413 -31.34413,82.17013 0,113.51427c15.6692,15.6692 36.21173,23.50667 56.75427,23.50667c20.54253,0 41.08507,-7.83747 56.75427,-23.5124c31.34413,-31.34413 31.34413,-82.17013 0,-113.51427c-15.6692,-15.6692 -36.21173,-23.50667 -56.75427,-23.50667z" fill="#942020"></path><path d="M79.8596,51.6h40.5404v40.5404l-16.21387,-16.21387l-49.3468,49.34107l-8.10693,-8.10693l49.34107,-49.3468z" fill="#ffffff"></path></g></g></svg>
            Fallecidos: {{Dead_Wyoming}}</p>
  </b-popover>
</div>
<!-- Fin Marker-->
  </gmap-map>

</template>
<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import {styleMap} from '../components/Map/style'
import axios from "axios"


  export default {

   components: {
      'gmap-custom-marker': GmapCustomMarker,
  },
    data () {
      
      return {
      //Alabama
      Location_Alabama:null,
      Confirmed_Alabama:null,
      Dead_Alabama:null,
      Recovered_Alabama: null,
      Updated_Alabama: null,

      //Alaska
      Location_Alaska:null,
      Confirmed_Alaska:null,
      Dead_Alaska:null,
      Recovered_Alaska: null,
      Updated_Alaska: null,

      //Arizona
      Location_Arizona:null,
      Confirmed_Arizona:null,
      Dead_Arizona:null,
      Recovered_Arizona: null,
      Updated_Arizona: null,

      //Arkansas
      Location_Arkansas:null,
      Confirmed_Arkansas:null,
      Dead_Arkansas:null,
      Recovered_Arkansas: null,
      Updated_Arkansas: null,

      //California
      Location_California:null,
      Confirmed_California:null,
      Dead_California:null,
      Recovered_California: null,
      Updated_California: null,

      //Colorado
      Location_Colorado:null,
      Confirmed_Colorado:null,
      Dead_Colorado:null,
      Recovered_Colorado: null,
      Updated_Colorado: null,

      //Connecticut
      Location_Connecticut:null,
      Confirmed_Connecticut:null,
      Dead_Connecticut:null,
      Recovered_Connecticut: null,
      Updated_Connecticut: null,

      //Delaware
      Location_Delaware:null,
      Confirmed_Delaware:null,
      Dead_Delaware:null,
      Recovered_Delaware: null,
      Updated_Delaware: null,

      //DistrictofColumbia
      Location_DistrictofColumbia:null,
      Confirmed_DistrictofColumbia:null,
      Dead_DistrictofColumbia:null,
      Recovered_DistrictofColumbia: null,
      Updated_DistrictofColumbia: null,

      //Florida
      Location_Florida:null,
      Confirmed_Florida:null,
      Dead_Florida:null,
      Recovered_Florida: null,
      Updated_Florida: null,

      //Georgia
      Location_Georgia:null,
      Confirmed_Georgia:null,
      Dead_Georgia:null,
      Recovered_Georgia: null,
      Updated_Georgia: null,

      //Hawaii
      Location_Hawaii:null,
      Confirmed_Hawaii:null,
      Dead_Hawaii:null,
      Recovered_Hawaii: null,
      Updated_Hawaii: null,

      //Idaho
      Location_Idaho:null,
      Confirmed_Idaho:null,
      Dead_Idaho:null,
      Recovered_Idaho: null,
      Updated_Idaho: null,

      //Illinois
      Location_Illinois:null,
      Confirmed_Illinois:null,
      Dead_Illinois:null,
      Recovered_Illinois: null,
      Updated_Illinois: null,

      //Indiana
      Location_Indiana:null,
      Confirmed_Indiana:null,
      Dead_Indiana:null,
      Recovered_Indiana: null,
      Updated_Indiana: null,

      //Iowa
      Location_Iowa:null,
      Confirmed_Iowa:null,
      Dead_Iowa:null,
      Recovered_Iowa: null,
      Updated_Iowa: null,

      //Kansas
      Location_Kansas:null,
      Confirmed_Kansas:null,
      Dead_Kansas:null,
      Recovered_Kansas: null,
      Updated_Kansas: null,

      //Kentucky
      Location_Kentucky:null,
      Confirmed_Kentucky:null,
      Dead_Kentucky:null,
      Recovered_Kentucky: null,
      Updated_Kentucky: null,

      //Louisiana
      Location_Louisiana:null,
      Confirmed_Louisiana:null,
      Dead_Louisiana:null,
      Recovered_Louisiana: null,
      Updated_Louisiana: null,

      //Maine
      Location_Maine:null,
      Confirmed_Maine:null,
      Dead_Maine:null,
      Recovered_Maine: null,
      Updated_Maine: null,

      //Maryland
      Location_Maryland:null,
      Confirmed_Maryland:null,
      Dead_Maryland:null,
      Recovered_Maryland: null,
      Updated_Maryland: null,

      //Massachusetts
      Location_Massachusetts:null,
      Confirmed_Massachusetts:null,
      Dead_Massachusetts:null,
      Recovered_Massachusetts: null,
      Updated_Massachusetts: null,

      //Michigan
      Location_Michigan:null,
      Confirmed_Michigan:null,
      Dead_Michigan:null,
      Recovered_Michigan: null,
      Updated_Michigan: null,

      //Minnesota
      Location_Minnesota:null,
      Confirmed_Minnesota:null,
      Dead_Minnesota:null,
      Recovered_Minnesota: null,
      Updated_Minnesota: null,

      //Mississippi
      Location_Mississippi:null,
      Confirmed_Mississippi:null,
      Dead_Mississippi:null,
      Recovered_Mississippi: null,
      Updated_Mississippi: null,

      //Missouri
      Location_Missouri:null,
      Confirmed_Missouri:null,
      Dead_Missouri:null,
      Recovered_Missouri: null,
      Updated_Missouri: null,

      //Montana
      Location_Montana:null,
      Confirmed_Montana:null,
      Dead_Montana:null,
      Recovered_Montana: null,
      Updated_Montana: null,

      //Nebraska
      Location_Nebraska:null,
      Confirmed_Nebraska:null,
      Dead_Nebraska:null,
      Recovered_Nebraska: null,
      Updated_Nebraska: null,

      //Nevada
      Location_Nevada:null,
      Confirmed_Nevada:null,
      Dead_Nevada:null,
      Recovered_Nevada: null,
      Updated_Nevada: null,

      //NewHampshire
      Location_NewHampshire:null,
      Confirmed_NewHampshire:null,
      Dead_NewHampshire:null,
      Recovered_NewHampshire: null,
      Updated_NewHampshire: null,

      //NewJersey
      Location_NewJersey:null,
      Confirmed_NewJersey:null,
      Dead_NewJersey:null,
      Recovered_NewJersey: null,
      Updated_NewJersey: null,

      //NewMexico
      Location_NewMexico:null,
      Confirmed_NewMexico:null,
      Dead_NewMexico:null,
      Recovered_NewMexico: null,
      Updated_NewMexico: null,

      //NewYork
      Location_NewYork:null,
      Confirmed_NewYork:null,
      Dead_NewYork:null,
      Recovered_NewYork: null,
      Updated_NewYork: null,

      //NorthCarolina
      Location_NorthCarolina:null,
      Confirmed_NorthCarolina:null,
      Dead_NorthCarolina:null,
      Recovered_NorthCarolina: null,
      Updated_NorthCarolina: null,

      //NorthDakota
      Location_NorthDakota:null,
      Confirmed_NorthDakota:null,
      Dead_NorthDakota:null,
      Recovered_NorthDakota: null,
      Updated_NorthDakota: null,

      //Ohio
      Location_Ohio:null,
      Confirmed_Ohio:null,
      Dead_Ohio:null,
      Recovered_Ohio: null,
      Updated_Ohio: null,

      //Oklahoma
      Location_Oklahoma:null,
      Confirmed_Oklahoma:null,
      Dead_Oklahoma:null,
      Recovered_Oklahoma: null,
      Updated_Oklahoma: null,

      //Oregon
      Location_Oregon:null,
      Confirmed_Oregon:null,
      Dead_Oregon:null,
      Recovered_Oregon: null,
      Updated_Oregon: null,

      //Pennsylvania
      Location_Pennsylvania:null,
      Confirmed_Pennsylvania:null,
      Dead_Pennsylvania:null,
      Recovered_Pennsylvania: null,
      Updated_Pennsylvania: null,

      //PuertoRico
      Location_PuertoRico:null,
      Confirmed_PuertoRico:null,
      Dead_PuertoRico:null,
      Recovered_PuertoRico: null,
      Updated_PuertoRico: null,

      //RhodeIsland
      Location_RhodeIsland:null,
      Confirmed_RhodeIsland:null,
      Dead_RhodeIsland:null,
      Recovered_RhodeIsland: null,
      Updated_RhodeIsland: null,

      //SouthCarolina
      Location_SouthCarolina:null,
      Confirmed_SouthCarolina:null,
      Dead_SouthCarolina:null,
      Recovered_SouthCarolina: null,
      Updated_SouthCarolina: null,

      //SouthDakota
      Location_SouthDakota:null,
      Confirmed_SouthDakota:null,
      Dead_SouthDakota:null,
      Recovered_SouthDakota: null,
      Updated_SouthDakota: null,

      //Tennessee
      Location_Tennessee:null,
      Confirmed_Tennessee:null,
      Dead_Tennessee:null,
      Recovered_Tennessee: null,
      Updated_Tennessee: null,


      //Texas
      Location_Texas:null,
      Confirmed_Texas:null,
      Dead_Texas:null,
      Recovered_Texas: null,
      Updated_Texas: null,

      //Utah
      Location_Utah:null,
      Confirmed_Utah:null,
      Dead_Utah:null,
      Recovered_Utah: null,
      Updated_Utah: null,

      //Vermont
      Location_Vermont:null,
      Confirmed_Vermont:null,
      Dead_Vermont:null,
      Recovered_Vermont: null,
      Updated_Vermont: null,

      //Virginia
      Location_Virginia:null,
      Confirmed_Virginia:null,
      Dead_Virginia:null,
      Recovered_Virginia: null,
      Updated_Virginia: null,

      //Washington
      Location_Washington:null,
      Confirmed_Washington:null,
      Dead_Washington:null,
      Recovered_Washington: null,
      Updated_Washington: null,

      //WestVirginia
      Location_WestVirginia:null,
      Confirmed_WestVirginia:null,
      Dead_WestVirginia:null,
      Recovered_WestVirginia: null,
      Updated_WestVirginia: null,

      //Wisconsin
      Location_Wisconsin:null,
      Confirmed_Wisconsin:null,
      Dead_Wisconsin:null,
      Recovered_Wisconsin: null,
      Updated_Wisconsin: null,

      //Wyoming
      Location_Wyoming:null,
      Confirmed_Wyoming:null,
      Dead_Wyoming:null,
      Recovered_Wyoming: null,
      Updated_Wyoming: null,

    
        center: {lat: 33.73915, lng:  -100.9847},

        
      marker_Alabama: {lat: 32.3182314, lng: -86.902298},
      marker_Alaska: {lat: 64.2008413, lng: -149.4936733},
      marker_Arizona: {lat: 34.0489281, lng: -111.0937311},
      marker_Arkanzas: {lat: 35.20105, lng: -91.8318334},
      marker_California: {lat: 36.778261, lng: -119.4179324},
      marker_Colorado: {lat: 39.5500507, lng: -105.7820674},
      marker_Connecticut: {lat: 41.6032207, lng: -73.087749},
      marker_Delaware: {lat: 38.9108325, lng: -75.52766989999999},
      marker_DistrictofColumbia: {lat: 38.9071923, lng:-77.0368707},
      marker_Florida: {lat: 27.6648274 , lng: -81.5157535},
      marker_Georgia: {lat: 32.1656221, lng: -82.9000751},
      marker_Hawaii: {lat: 19.8967662, lng: -155.5827818},
      marker_Idaho: {lat: 44.0682019, lng: -114.7420408},
      marker_Illinois: {lat: 40.6331249, lng: -89.3985283},
      marker_Indiana: {lat: 40.2671941, lng: -86.1349019},
      marker_Iowa: {lat: 41.8780025, lng: -93.097702},
      marker_Kansas: {lat: 39.011902, lng: -98.4842465},
      marker_Kentucky: {lat: 37.8393332, lng: -84.2700179},
      marker_Louisiana: {lat: 30.9842977, lng: -91.96233269999999},
      marker_Maine: {lat: 45.253783, lng: -69.4454689},
      marker_Maryland: {lat: 39.0457549, lng: -76.64127119999999},
      marker_Massachusetts: {lat: 42.4072107, lng: -71.3824374},
      marker_Michigan: {lat: 44.3148443, lng: -85.60236429999999},
      marker_Minnesota: {lat: 46.729553, lng: -94.6858998},
      marker_Mississippi: {lat: 32.3546679, lng: -89.3985283},
      marker_Missouri: {lat: 37.9642529, lng: -91.8318334},
      marker_Montana: {lat: 46.8796822, lng: -110.3625658},
      marker_Nebraska: {lat: 41.4925374, lng: -99.9018131},
      marker_Nevada: {lat: 38.8026097, lng: -116.419389},
      marker_NewHampshire: {lat: 43.1938516, lng: -71.5723953},
      marker_NewJersey: {lat: 40.0583238, lng: -74.4056612},
      marker_NewMexico: {lat: 34.5199402, lng: -105.8700901},
      marker_NewYork: {lat: 40.7127753, lng: -74.0059728},
      marker_NorthCarolina: {lat: 35.7595731, lng: -79.01929969999999},
      marker_NorthDakota: {lat: 47.5514926, lng: -101.0020119},
      marker_Ohio: {lat: 40.4172871, lng: -82.90712300000001},
      marker_Oklahoma: {lat: 35.0077519, lng: -97.092877},
      marker_Oregon: {lat: 43.8041334, lng: -120.5542012},
      marker_Pennsylvania: {lat: 41.2033216, lng: -77.1945247},
      marker_PuertoRico: {lat: 18.220833, lng: -66.590149},
      marker_RhodeIsland: {lat: 41.5800945, lng: -71.4774291},
      marker_SouthCarolina: {lat: 33.836081, lng: -81.1637245},
      marker_SouthDakota: {lat: 43.9695148, lng: -99.9018131},
      marker_Tennessee: {lat: 35.5174913, lng: -86.5804473},
      marker_Texas: {lat: 31.9685988, lng: -99.9018131},
      marker_Utah: {lat: 39.3209801, lng: -111.0937311},
      marker_Vermont: {lat: 44.5588028, lng: -72.57784149999999},
      marker_Virginia: {lat: 37.4315734, lng: -78.6568942},
      marker_Washington: {lat: 47.7510741, lng: -120.7401385},
      marker_WestVirginia: {lat: 38.5976262, lng: -80.4549026},
      marker_Wisconsin: {lat: 43.7844397, lng: -88.7878678},
      marker_Wyoming: {lat: 43.0759678, lng: -107.2902839},
         zoom: 5,
      options: {
        zoomControl: true, // Establece el control de zoom del mapa
        mapTypeControl: false, // Oculta el control de tipos de mapas
        scaleControl: false, //  Oculta el control de escala del mapa
        streetViewControl: false, // Oculta el control de StreeView del mapa
        fullscreenControl: true, // Establce el control full screen para ver el mapa a pantalla completa
        styles: styleMap // Estilos del Mapa

      },
      }
      
    },
  
  methods:{
     async getState(){
  
            try{
           
                let datos_Alabama = await axios.get(`https://www.trackcorona.live/api/provinces/Alabama`)
                this.Location_Alabama = await datos_Alabama.data.data[0].location
                this.Confirmed_Alabama = await datos_Alabama.data.data[0].confirmed
                this.Dead_Alabama = await datos_Alabama.data.data[0].dead
                this.Recovered_Alabama = await datos_Alabama.data.data[0].recovered
                this.Updated_Alabama = await datos_Alabama.data.data[0].updated      
          
                let datos_Alaska  = await axios.get(`https://www.trackcorona.live/api/provinces/Alaska`)
                this.Location_Alaska = await datos_Alaska .data.data[0].location
                this.Confirmed_Alaska = await datos_Alaska .data.data[0].confirmed
                this.Dead_Alaska = await datos_Alaska .data.data[0].dead
                this.Recovered_Alaska = await datos_Alaska .data.data[0].recovered
                this.Updated_Alaska = await datos_Alaska .data.data[0].updated
                
               let datos_Arizona  = await axios.get(`https://www.trackcorona.live/api/provinces/Arizona`)
                this.Location_Arizona = await datos_Arizona.data.data[0].location
                this.Confirmed_Arizona = await datos_Arizona.data.data[0].confirmed
                this.Dead_Arizona = await datos_Arizona.data.data[0].dead
                this.Recovered_Arizona = await datos_Arizona.data.data[0].recovered
                this.Updated_Arizona = await datos_Arizona.data.data[0].updated      

                let datos_Arkansas = await axios.get(`https://www.trackcorona.live/api/provinces/Arkansas`)
                this.Location_Arkansas = await datos_Arkansas.data.data[0].location
                this.Confirmed_Arkansas = await datos_Arkansas.data.data[0].confirmed
                this.Dead_Arkansas = await datos_Arkansas.data.data[0].dead
                this.Recovered_Arkansas = await datos_Arkansas.data.data[0].recovered
                this.Updated_Arkansas = await datos_Arkansas.data.data[0].updated

                let datos_California   = await axios.get(`https://www.trackcorona.live/api/provinces/California`)
                this.Location_California = await datos_California.data.data[0].location
                this.Confirmed_California = await datos_California.data.data[0].confirmed
                this.Dead_California = await datos_California.data.data[0].dead
                this.Recovered_California = await datos_California.data.data[0].recovered
                this.Updated_California = await datos_California.data.data[0].updated    
                
                let datos_Colorado = await axios.get(`https://www.trackcorona.live/api/provinces/Colorado`)
                this.Location_Colorado = await datos_Colorado.data.data[0].location
                this.Confirmed_Colorado = await datos_Colorado.data.data[0].confirmed
                this.Dead_Colorado = await datos_Colorado.data.data[0].dead
                this.Recovered_Colorado = await datos_Colorado.data.data[0].recovered
                this.Updated_Colorado = await datos_Colorado.data.data[0].updated

                let datos_Connecticut   = await axios.get(`https://www.trackcorona.live/api/provinces/Connecticut`)
                this.Location_Connecticut = await datos_Connecticut.data.data[0].location
                this.Confirmed_Connecticut = await datos_Connecticut.data.data[0].confirmed
                this.Dead_Connecticut = await datos_Connecticut.data.data[0].dead
                this.Recovered_Connecticut = await datos_Connecticut.data.data[0].recovered
                this.Updated_Connecticut = await datos_Connecticut.data.data[0].updated    
                
                let datos_Delaware = await axios.get(`https://www.trackcorona.live/api/provinces/Delaware`)
                this.Location_Delaware = await datos_Delaware.data.data[0].location
                this.Confirmed_Delaware = await datos_Delaware.data.data[0].confirmed
                this.Dead_Delaware = await datos_Delaware.data.data[0].dead
                this.Recovered_Delaware = await datos_Delaware.data.data[0].recovered
                this.Updated_Delaware = await datos_Delaware.data.data[0].updated 

                let datos_DistrictofColumbia = await axios.get(`https://www.trackcorona.live/api/provinces/District of Columbia`)
                this.Location_DistrictofColumbia = await datos_DistrictofColumbia.data.data[0].location
                this.Confirmed_DistrictofColumbia = await datos_DistrictofColumbia.data.data[0].confirmed
                this.Dead_DistrictofColumbia = await datos_DistrictofColumbia.data.data[0].dead
                this.Recovered_DistrictofColumbia = await datos_DistrictofColumbia.data.data[0].recovered
                this.Updated_DistrictofColumbia = await datos_DistrictofColumbia.data.data[0].updated      
          
                let datos_Florida  = await axios.get(`https://www.trackcorona.live/api/provinces/Florida`)
                this.Location_Florida = await datos_Florida .data.data[0].location
                this.Confirmed_Florida = await datos_Florida .data.data[0].confirmed
                this.Dead_Florida = await datos_Florida .data.data[0].dead
                this.Recovered_Florida = await datos_Florida .data.data[0].recovered
                this.Updated_Florida = await datos_Florida .data.data[0].updated
                
               let datos_Georgia  = await axios.get(`https://www.trackcorona.live/api/provinces/Georgia`)
                this.Location_Georgia = await datos_Georgia.data.data[0].location
                this.Confirmed_Georgia = await datos_Georgia.data.data[0].confirmed
                this.Dead_Georgia = await datos_Georgia.data.data[0].dead
                this.Recovered_Georgia = await datos_Georgia.data.data[0].recovered
                this.Updated_Georgia = await datos_Georgia.data.data[0].updated      

                let datos_Hawaii = await axios.get(`https://www.trackcorona.live/api/provinces/Hawaii`)
                this.Location_Hawaii = await datos_Hawaii.data.data[0].location
                this.Confirmed_Hawaii = await datos_Hawaii.data.data[0].confirmed
                this.Dead_Hawaii = await datos_Hawaii.data.data[0].dead
                this.Recovered_Hawaii = await datos_Hawaii.data.data[0].recovered
                this.Updated_Hawaii = await datos_Hawaii.data.data[0].updated

                let datos_Idaho   = await axios.get(`https://www.trackcorona.live/api/provinces/Idaho`)
                this.Location_Idaho = await datos_Idaho.data.data[0].location
                this.Confirmed_Idaho = await datos_Idaho.data.data[0].confirmed
                this.Dead_Idaho = await datos_Idaho.data.data[0].dead
                this.Recovered_Idaho = await datos_Idaho.data.data[0].recovered
                this.Updated_Idaho = await datos_Idaho.data.data[0].updated    
                
                let datos_Illinois = await axios.get(`https://www.trackcorona.live/api/provinces/Illinois`)
                this.Location_Illinois = await datos_Illinois.data.data[0].location
                this.Confirmed_Illinois = await datos_Illinois.data.data[0].confirmed
                this.Dead_Illinois = await datos_Illinois.data.data[0].dead
                this.Recovered_Illinois = await datos_Illinois.data.data[0].recovered
                this.Updated_Illinois = await datos_Illinois.data.data[0].updated

                let datos_Indiana   = await axios.get(`https://www.trackcorona.live/api/provinces/Indiana`)
                this.Location_Indiana = await datos_Indiana.data.data[0].location
                this.Confirmed_Indiana = await datos_Indiana.data.data[0].confirmed
                this.Dead_Indiana = await datos_Indiana.data.data[0].dead
                this.Recovered_Indiana = await datos_Indiana.data.data[0].recovered
                this.Updated_Indiana = await datos_Indiana.data.data[0].updated    
                
                let datos_Iowa = await axios.get(`https://www.trackcorona.live/api/provinces/Iowa`)
                this.Location_Iowa = await datos_Iowa.data.data[0].location
                this.Confirmed_Iowa = await datos_Iowa.data.data[0].confirmed
                this.Dead_Iowa = await datos_Iowa.data.data[0].dead
                this.Recovered_Iowa = await datos_Iowa.data.data[0].recovered
                this.Updated_Iowa = await datos_Iowa.data.data[0].updated

                let datos_Kansas = await axios.get(`https://www.trackcorona.live/api/provinces/Kansas`)
                this.Location_Kansas = await datos_Kansas.data.data[0].location
                this.Confirmed_Kansas = await datos_Kansas.data.data[0].confirmed
                this.Dead_Kansas = await datos_Kansas.data.data[0].dead
                this.Recovered_Kansas = await datos_Kansas.data.data[0].recovered
                this.Updated_Kansas = await datos_Kansas.data.data[0].updated      
          
                let datos_Kentucky  = await axios.get(`https://www.trackcorona.live/api/provinces/Kentucky`)
                this.Location_Kentucky = await datos_Kentucky .data.data[0].location
                this.Confirmed_Kentucky = await datos_Kentucky .data.data[0].confirmed
                this.Dead_Kentucky = await datos_Kentucky .data.data[0].dead
                this.Recovered_Kentucky = await datos_Kentucky .data.data[0].recovered
                this.Updated_Kentucky = await datos_Kentucky .data.data[0].updated
                
               let datos_Louisiana  = await axios.get(`https://www.trackcorona.live/api/provinces/Louisiana`)
                this.Location_Louisiana = await datos_Louisiana.data.data[0].location
                this.Confirmed_Louisiana = await datos_Louisiana.data.data[0].confirmed
                this.Dead_Louisiana = await datos_Louisiana.data.data[0].dead
                this.Recovered_Louisiana = await datos_Louisiana.data.data[0].recovered
                this.Updated_Louisiana = await datos_Louisiana.data.data[0].updated      

                let datos_Maine = await axios.get(`https://www.trackcorona.live/api/provinces/Maine`)
                this.Location_Maine = await datos_Maine.data.data[0].location
                this.Confirmed_Maine = await datos_Maine.data.data[0].confirmed
                this.Dead_Maine = await datos_Maine.data.data[0].dead
                this.Recovered_Maine = await datos_Maine.data.data[0].recovered
                this.Updated_Maine = await datos_Maine.data.data[0].updated

                let datos_Maryland   = await axios.get(`https://www.trackcorona.live/api/provinces/Maryland`)
                this.Location_Maryland = await datos_Maryland.data.data[0].location
                this.Confirmed_Maryland = await datos_Maryland.data.data[0].confirmed
                this.Dead_Maryland = await datos_Maryland.data.data[0].dead
                this.Recovered_Maryland = await datos_Maryland.data.data[0].recovered
                this.Updated_Maryland = await datos_Maryland.data.data[0].updated    
                
                let datos_Massachusetts = await axios.get(`https://www.trackcorona.live/api/provinces/Massachusetts`)
                this.Location_Massachusetts = await datos_Massachusetts.data.data[0].location
                this.Confirmed_Massachusetts = await datos_Massachusetts.data.data[0].confirmed
                this.Dead_Massachusetts = await datos_Massachusetts.data.data[0].dead
                this.Recovered_Massachusetts = await datos_Massachusetts.data.data[0].recovered
                this.Updated_Massachusetts = await datos_Massachusetts.data.data[0].updated

                let datos_Michigan   = await axios.get(`https://www.trackcorona.live/api/provinces/Michigan`)
                this.Location_Michigan = await datos_Michigan.data.data[0].location
                this.Confirmed_Michigan = await datos_Michigan.data.data[0].confirmed
                this.Dead_Michigan = await datos_Michigan.data.data[0].dead
                this.Recovered_Michigan = await datos_Michigan.data.data[0].recovered
                this.Updated_Michigan = await datos_Michigan.data.data[0].updated    
                
                let datos_Minnesota = await axios.get(`https://www.trackcorona.live/api/provinces/Minnesota`)
                this.Location_Minnesota = await datos_Minnesota.data.data[0].location
                this.Confirmed_Minnesota = await datos_Minnesota.data.data[0].confirmed
                this.Dead_Minnesota = await datos_Minnesota.data.data[0].dead
                this.Recovered_Minnesota = await datos_Minnesota.data.data[0].recovered
                this.Updated_Minnesota = await datos_Minnesota.data.data[0].updated 

                let datos_Mississippi = await axios.get(`https://www.trackcorona.live/api/provinces/Mississippi`)
                this.Location_Mississippi = await datos_Mississippi.data.data[0].location
                this.Confirmed_Mississippi = await datos_Mississippi.data.data[0].confirmed
                this.Dead_Mississippi = await datos_Mississippi.data.data[0].dead
                this.Recovered_Mississippi = await datos_Mississippi.data.data[0].recovered
                this.Updated_Mississippi = await datos_Mississippi.data.data[0].updated      
          
                let datos_Missouri  = await axios.get(`https://www.trackcorona.live/api/provinces/Missouri`)
                this.Location_Missouri = await datos_Missouri .data.data[0].location
                this.Confirmed_Missouri = await datos_Missouri .data.data[0].confirmed
                this.Dead_Missouri = await datos_Missouri .data.data[0].dead
                this.Recovered_Missouri = await datos_Missouri .data.data[0].recovered
                this.Updated_Missouri = await datos_Missouri .data.data[0].updated
                
               let datos_Montana  = await axios.get(`https://www.trackcorona.live/api/provinces/Montana`)
                this.Location_Montana = await datos_Montana.data.data[0].location
                this.Confirmed_Montana = await datos_Montana.data.data[0].confirmed
                this.Dead_Montana = await datos_Montana.data.data[0].dead
                this.Recovered_Montana = await datos_Montana.data.data[0].recovered
                this.Updated_Montana = await datos_Montana.data.data[0].updated      

                let datos_Nebraska = await axios.get(`https://www.trackcorona.live/api/provinces/Nebraska`)
                this.Location_Nebraska = await datos_Nebraska.data.data[0].location
                this.Confirmed_Nebraska = await datos_Nebraska.data.data[0].confirmed
                this.Dead_Nebraska = await datos_Nebraska.data.data[0].dead
                this.Recovered_Nebraska = await datos_Nebraska.data.data[0].recovered
                this.Updated_Nebraska = await datos_Nebraska.data.data[0].updated

                let datos_Nevada   = await axios.get(`https://www.trackcorona.live/api/provinces/Nevada`)
                this.Location_Nevada = await datos_Nevada.data.data[0].location
                this.Confirmed_Nevada = await datos_Nevada.data.data[0].confirmed
                this.Dead_Nevada = await datos_Nevada.data.data[0].dead
                this.Recovered_Nevada = await datos_Nevada.data.data[0].recovered
                this.Updated_Nevada = await datos_Nevada.data.data[0].updated    
                
                let datos_NewHampshire = await axios.get(`https://www.trackcorona.live/api/provinces/New Hampshire`)
                this.Location_NewHampshire = await datos_NewHampshire.data.data[0].location
                this.Confirmed_NewHampshire = await datos_NewHampshire.data.data[0].confirmed
                this.Dead_NewHampshire = await datos_NewHampshire.data.data[0].dead
                this.Recovered_NewHampshire = await datos_NewHampshire.data.data[0].recovered
                this.Updated_NewHampshire = await datos_NewHampshire.data.data[0].updated

                let datos_NewJersey   = await axios.get(`https://www.trackcorona.live/api/provinces/New Jersey`)
                this.Location_NewJersey = await datos_NewJersey.data.data[0].location
                this.Confirmed_NewJersey = await datos_NewJersey.data.data[0].confirmed
                this.Dead_NewJersey = await datos_NewJersey.data.data[0].dead
                this.Recovered_NewJersey = await datos_NewJersey.data.data[0].recovered
                this.Updated_NewJersey = await datos_NewJersey.data.data[0].updated    
                
                let datos_NewMexico = await axios.get(`https://www.trackcorona.live/api/provinces/New Mexico`)
                this.Location_NewMexico = await datos_NewMexico.data.data[0].location
                this.Confirmed_NewMexico = await datos_NewMexico.data.data[0].confirmed
                this.Dead_NewMexico = await datos_NewMexico.data.data[0].dead
                this.Recovered_NewMexico = await datos_NewMexico.data.data[0].recovered
                this.Updated_NewMexico = await datos_NewMexico.data.data[0].updated

                let datos_NewYork = await axios.get(`https://www.trackcorona.live/api/provinces/New York`)
                this.Location_NewYork = await datos_NewYork.data.data[0].location
                this.Confirmed_NewYork = await datos_NewYork.data.data[0].confirmed
                this.Dead_NewYork = await datos_NewYork.data.data[0].dead
                this.Recovered_NewYork = await datos_NewYork.data.data[0].recovered
                this.Updated_NewYork = await datos_NewYork.data.data[0].updated      
          
                let datos_NorthCarolina  = await axios.get(`https://www.trackcorona.live/api/provinces/North Carolina`)
                this.Location_NorthCarolina = await datos_NorthCarolina .data.data[0].location
                this.Confirmed_NorthCarolina = await datos_NorthCarolina .data.data[0].confirmed
                this.Dead_NorthCarolina = await datos_NorthCarolina .data.data[0].dead
                this.Recovered_NorthCarolina = await datos_NorthCarolina .data.data[0].recovered
                this.Updated_NorthCarolina = await datos_NorthCarolina .data.data[0].updated
                
               let datos_NorthDakota  = await axios.get(`https://www.trackcorona.live/api/provinces/North Dakota`)
                this.Location_NorthDakota = await datos_NorthDakota.data.data[0].location
                this.Confirmed_NorthDakota = await datos_NorthDakota.data.data[0].confirmed
                this.Dead_NorthDakota = await datos_NorthDakota.data.data[0].dead
                this.Recovered_NorthDakota = await datos_NorthDakota.data.data[0].recovered
                this.Updated_NorthDakota = await datos_NorthDakota.data.data[0].updated      

                let datos_Ohio = await axios.get(`https://www.trackcorona.live/api/provinces/Ohio`)
                this.Location_Ohio = await datos_Ohio.data.data[0].location
                this.Confirmed_Ohio = await datos_Ohio.data.data[0].confirmed
                this.Dead_Ohio = await datos_Ohio.data.data[0].dead
                this.Recovered_Ohio = await datos_Ohio.data.data[0].recovered
                this.Updated_Ohio = await datos_Ohio.data.data[0].updated

                let datos_Oklahoma   = await axios.get(`https://www.trackcorona.live/api/provinces/Oklahoma`)
                this.Location_Oklahoma = await datos_Oklahoma.data.data[0].location
                this.Confirmed_Oklahoma = await datos_Oklahoma.data.data[0].confirmed
                this.Dead_Oklahoma = await datos_Oklahoma.data.data[0].dead
                this.Recovered_Oklahoma = await datos_Oklahoma.data.data[0].recovered
                this.Updated_Oklahoma = await datos_Oklahoma.data.data[0].updated    
                
                let datos_Oregon = await axios.get(`https://www.trackcorona.live/api/provinces/Oregon`)
                this.Location_Oregon = await datos_Oregon.data.data[0].location
                this.Confirmed_Oregon = await datos_Oregon.data.data[0].confirmed
                this.Dead_Oregon = await datos_Oregon.data.data[0].dead
                this.Recovered_Oregon = await datos_Oregon.data.data[0].recovered
                this.Updated_Oregon = await datos_Oregon.data.data[0].updated

                let datos_Pennsylvania   = await axios.get(`https://www.trackcorona.live/api/provinces/Pennsylvania`)
                this.Location_Pennsylvania = await datos_Pennsylvania.data.data[0].location
                this.Confirmed_Pennsylvania = await datos_Pennsylvania.data.data[0].confirmed
                this.Dead_Pennsylvania = await datos_Pennsylvania.data.data[0].dead
                this.Recovered_Pennsylvania = await datos_Pennsylvania.data.data[0].recovered
                this.Updated_Pennsylvania = await datos_Pennsylvania.data.data[0].updated    
                
                let datos_PuertoRico = await axios.get(`https://www.trackcorona.live/api/provinces/Puerto Rico`)
                this.Location_PuertoRico = await datos_PuertoRico.data.data[0].location
                this.Confirmed_PuertoRico = await datos_PuertoRico.data.data[0].confirmed
                this.Dead_PuertoRico = await datos_PuertoRico.data.data[0].dead
                this.Recovered_PuertoRico = await datos_PuertoRico.data.data[0].recovered
                this.Updated_PuertoRico = await datos_PuertoRico.data.data[0].updated 

                let datos_RhodeIsland = await axios.get(`https://www.trackcorona.live/api/provinces/Rhode Island`)
                this.Location_RhodeIsland = await datos_RhodeIsland.data.data[0].location
                this.Confirmed_RhodeIsland = await datos_RhodeIsland.data.data[0].confirmed
                this.Dead_RhodeIsland = await datos_RhodeIsland.data.data[0].dead
                this.Recovered_RhodeIsland = await datos_RhodeIsland.data.data[0].recovered
                this.Updated_RhodeIsland = await datos_RhodeIsland.data.data[0].updated      
          
                let datos_SouthCarolina  = await axios.get(`https://www.trackcorona.live/api/provinces/South Carolina`)
                this.Location_SouthCarolina = await datos_SouthCarolina .data.data[0].location
                this.Confirmed_SouthCarolina = await datos_SouthCarolina .data.data[0].confirmed
                this.Dead_SouthCarolina = await datos_SouthCarolina .data.data[0].dead
                this.Recovered_SouthCarolina = await datos_SouthCarolina .data.data[0].recovered
                this.Updated_SouthCarolina = await datos_SouthCarolina .data.data[0].updated

                let datos_SouthDakota = await axios.get(`https://www.trackcorona.live/api/provinces/South Dakota`)
                this.Location_SouthDakota = await datos_SouthDakota.data.data[0].location
                this.Confirmed_SouthDakota = await datos_SouthDakota.data.data[0].confirmed
                this.Dead_SouthDakota = await datos_SouthDakota.data.data[0].dead
                this.Recovered_SouthDakota = await datos_SouthDakota.data.data[0].recovered
                this.Updated_SouthDakota = await datos_SouthDakota.data.data[0].updated      
          
                let datos_Tennessee  = await axios.get(`https://www.trackcorona.live/api/provinces/Tennessee`)
                this.Location_Tennessee = await datos_Tennessee .data.data[0].location
                this.Confirmed_Tennessee = await datos_Tennessee .data.data[0].confirmed
                this.Dead_Tennessee = await datos_Tennessee .data.data[0].dead
                this.Recovered_Tennessee = await datos_Tennessee .data.data[0].recovered
                this.Updated_Tennessee = await datos_Tennessee .data.data[0].updated

                let datos_Texas = await axios.get(`https://www.trackcorona.live/api/provinces/Texas`)
                this.Location_Texas = await datos_Texas.data.data[0].location
                this.Confirmed_Texas = await datos_Texas.data.data[0].confirmed
                this.Dead_Texas = await datos_Texas.data.data[0].dead
                this.Recovered_Texas = await datos_Texas.data.data[0].recovered
                this.Updated_Texas = await datos_Texas.data.data[0].updated   
                
               let datos_Utah  = await axios.get(`https://www.trackcorona.live/api/provinces/Utah`)
                this.Location_Utah = await datos_Utah.data.data[0].location
                this.Confirmed_Utah = await datos_Utah.data.data[0].confirmed
                this.Dead_Utah = await datos_Utah.data.data[0].dead
                this.Recovered_Utah = await datos_Utah.data.data[0].recovered
                this.Updated_Utah = await datos_Utah.data.data[0].updated      

                let datos_Vermont = await axios.get(`https://www.trackcorona.live/api/provinces/Vermont`)
                this.Location_Vermont = await datos_Vermont.data.data[0].location
                this.Confirmed_Vermont = await datos_Vermont.data.data[0].confirmed
                this.Dead_Vermont = await datos_Vermont.data.data[0].dead
                this.Recovered_Vermont = await datos_Vermont.data.data[0].recovered
                this.Updated_Vermont = await datos_Vermont.data.data[0].updated

                let datos_Virginia   = await axios.get(`https://www.trackcorona.live/api/provinces/Virginia`)
                this.Location_Virginia = await datos_Virginia.data.data[0].location
                this.Confirmed_Virginia = await datos_Virginia.data.data[0].confirmed
                this.Dead_Virginia = await datos_Virginia.data.data[0].dead
                this.Recovered_Virginia = await datos_Virginia.data.data[0].recovered
                this.Updated_Virginia = await datos_Virginia.data.data[0].updated    
                
                let datos_Washington = await axios.get(`https://www.trackcorona.live/api/provinces/Washington`)
                this.Location_Washington = await datos_Washington.data.data[0].location
                this.Confirmed_Washington = await datos_Washington.data.data[0].confirmed
                this.Dead_Washington = await datos_Washington.data.data[0].dead
                this.Recovered_Washington = await datos_Washington.data.data[0].recovered
                this.Updated_Washington = await datos_Washington.data.data[0].updated

                let datos_WestVirginia   = await axios.get(`https://www.trackcorona.live/api/provinces/West Virginia`)
                this.Location_WestVirginia = await datos_WestVirginia.data.data[0].location
                this.Confirmed_WestVirginia = await datos_WestVirginia.data.data[0].confirmed
                this.Dead_WestVirginia = await datos_WestVirginia.data.data[0].dead
                this.Recovered_WestVirginia = await datos_WestVirginia.data.data[0].recovered
                this.Updated_WestVirginia = await datos_WestVirginia.data.data[0].updated    
                
                let datos_Wisconsin = await axios.get(`https://www.trackcorona.live/api/provinces/Wisconsin`)
                this.Location_Wisconsin = await datos_Wisconsin.data.data[0].location
                this.Confirmed_Wisconsin = await datos_Wisconsin.data.data[0].confirmed
                this.Dead_Wisconsin = await datos_Wisconsin.data.data[0].dead
                this.Recovered_Wisconsin = await datos_Wisconsin.data.data[0].recovered
                this.Updated_Wisconsin = await datos_Wisconsin.data.data[0].updated 

                let datos_Wyoming = await axios.get(`https://www.trackcorona.live/api/provinces/Wyoming`)
                this.Location_Wyoming = await datos_Wyoming.data.data[0].location
                this.Confirmed_Wyoming = await datos_Wyoming.data.data[0].confirmed
                this.Dead_Wyoming = await datos_Wyoming.data.data[0].dead
                this.Recovered_Wyoming = await datos_Wyoming.data.data[0].recovered
                this.Updated_Wyoming = await datos_Wyoming.data.data[0].updated       
            }
            catch(error){
                
            }
            finally{

            }
            
        },

        async getPol(){
                let datos = await axios.get(`https://theunitedstates.io/districts/states/NY/shape.geojson`)
                this.paths = await datos.data.coordinates
                console.log(datos.data.coordinates[0]) 
        }
  }, 

  created(){
        this.getState()
        this.getPol()
    }
    
  }
</script>

<style scoped>
.punto{
  width: 50px;
  position:absolute;
  transition: transform .2s;
}

.punto:hover {
  transform: scale(1.5);
}

.GranPunto{
  width: 80px;
  position:absolute;
  transition: transform .2s;
}

.GranPunto:hover {
  transform: scale(1.5);
}

.MinPunto{
  width: 25px;
  position:absolute;
  transition: transform .2s;
}

.MinPunto:hover {
  transform: scale(1.5);
}

.cardMap-h5{
    font-weight: 300;
    font-size:11px;
    text-align: center;
    color: rgb(206, 14, 0);
}

.cardMap-p{
    font-weight: 500;
    font-size:14px;
    text-align: left;
    color: rgb(1, 30, 83);
    margin-bottom: 5px;
}
</style>
