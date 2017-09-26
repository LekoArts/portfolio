import Typography from "typography"

const typography = new Typography({
    title: 'LekoArts',
    baseFontSize: `16px`,
    baseLineHeight: 1.5,
    headerFontFamily: ['Montserrat', 'sans-serif'],
    bodyFontFamily: ['Istok Web', 'sans-serif'],
    scaleRatio: 3,
    headerWeight: 700,
    googleFonts: [
        {
            name: 'Montserrat',
            styles: [
                '700',
                '400'
            ]
        },
        {
            name: 'Istok Web',
            styles: [
                '400'
            ]
        }
    ]
})

export default typography