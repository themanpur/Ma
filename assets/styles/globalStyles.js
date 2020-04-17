const secondaryColor = "#996515"
export const globalStyles = {
    secondaryColor,
    overlay:{
        backgroundColor: 'rgba(10,10,10,0.4)',
        flex:1
    },
    loader: {
        backgroundColor: secondaryColor,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex:1000000
    }
}