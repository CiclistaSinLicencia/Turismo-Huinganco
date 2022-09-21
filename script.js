document.getElementById('dark-theme-btn').addEventListener
('click' , ( ) => {
    document.documentElement.style.setProperty('--background-theme' , '#333' )
    document.documentElement.style.setProperty('--background-lighttheme-btn' , '#d3d3d3' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#75b418' )
    document.documentElement.style.setProperty('--color-btn-darktheme' , '#272727' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#75b418' )


    document.documentElement.style.setProperty('--header-background' , '#272727' )
    document.documentElement.style.setProperty('--color-btn-nav' , '#ffffff' )
    document.documentElement.style.setProperty('--background-color-octubre' , '#272727' )
                     /*  */
    document.documentElement.style.setProperty('--background-color-bloque-joyas' , '#272727' )
    document.documentElement.style.setProperty('--border-color--joyas' , 'gray' )
    document.documentElement.style.setProperty('--color-texto-joyas' , 'floralwhite' )

    document.documentElement.style.setProperty('--color-anchor-titulo-joyas' , ' #75b418' )
    
    
   /* PADDING BOTON */
   document.documentElement.style.setProperty('--padding-dark' , '8px' )
   document.documentElement.style.setProperty('--padding' , '6px' )
   
   
   document.documentElement.style.setProperty('--clr-border-dropdown' , ' #272727' )
   
   
})

document.getElementById('light-theme-btn').addEventListener
('click', ( ) => {
    document.documentElement.style.setProperty('--background-theme', '#ffffff' )
    
    document.documentElement.style.setProperty('--background-lighttheme-btn' , '#75b418' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#d3d3d3 ' )
    
    document.documentElement.style.setProperty('--header-background' , '#ffffff' )
    document.documentElement.style.setProperty('--color-btn-nav' , 'dark' )
    document.documentElement.style.setProperty('--background-color-octubre' , '#272727' )
    /*  */
    document.documentElement.style.setProperty('--background-color-bloque-joyas' , '#ececec' )
    document.documentElement.style.setProperty('--border-color--joyas' , 'gray' )
    document.documentElement.style.setProperty('--color-texto-joyas' , '#202020' )
    
    document.documentElement.style.setProperty('--color-anchor-titulo-joyas' , ' darkgreen' )
    
})

   /* PADDING BOTON */
   document.documentElement.style.setProperty('--padding-dark', '6px' )
   
   document.documentElement.style.setProperty('--padding' , '8px' )
   

   
   
   /* BOTONES MOBILE */
   
   document.getElementById('dark-theme-mobile-btn').addEventListener
   ('click' , ( ) => {
    document.documentElement.style.setProperty('--background-theme' , '#333' )


    document.documentElement.style.setProperty('--background-lighttheme-btn' , '#d3d3d3' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#75b418' )
    document.documentElement.style.setProperty('--color-btn-darktheme' , '#272727' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#75b418' )


    document.documentElement.style.setProperty('--header-background' , '#272727' )
    document.documentElement.style.setProperty('--color-btn-nav' , '#ffffff' )
    document.documentElement.style.setProperty('--background-color-octubre' , '#272727' )
                     /*  */
    document.documentElement.style.setProperty('--background-color-bloque-joyas' , '#272727' ) 
    document.documentElement.style.setProperty('--border-color--joyas' , 'gray' )
    document.documentElement.style.setProperty('--color-texto-joyas' , 'floralwhite' )

    document.documentElement.style.setProperty('--color-anchor-titulo-joyas' , ' #75b418' )
   
 
    document.documentElement.style.setProperty('--clr-border-dropdown' , ' #272727' )


    /* DROPDOWN */
    document.documentElement.style.setProperty('--mobile-dropdown-background' , ' #333' )
    document.documentElement.style.setProperty('--mobile-dropdown-color' , ' white' )

    
    
})

document.getElementById('light-theme-mobile-btn').addEventListener
('click', ( ) => {
    document.documentElement.style.setProperty('--background-theme', '#ffffff' )

    document.documentElement.style.setProperty('--background-lighttheme-btn' , '#75b418' )
    document.documentElement.style.setProperty('--background-darktheme-btn' , '#d3d3d3 ' )

    document.documentElement.style.setProperty('--header-background' , '#ffffff' )
    document.documentElement.style.setProperty('--color-btn-nav' , 'dark' )
    document.documentElement.style.setProperty('--background-color-octubre' , '#272727' )
                     /*  */
    document.documentElement.style.setProperty('--background-color-bloque-joyas' , '#ececec' )
    document.documentElement.style.setProperty('--border-color--joyas' , 'gray' )
    document.documentElement.style.setProperty('--color-texto-joyas' , '#202020' )

    document.documentElement.style.setProperty('--color-anchor-titulo-joyas' , ' darkgreen' )

    /* DROPDOWN */
    document.documentElement.style.setProperty('--mobile-dropdown-background' , ' white' )
    document.documentElement.style.setProperty('--mobile-dropdown-color' , ' #272727' )
    document.documentElement.style.setProperty('--clr-border-dropdown' , ' white' )
})

/* windows.getComputedStyle(document.documentElement)
.getPropertyValue('--dark-theme') */




/* Carousel */


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", ( ) => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});