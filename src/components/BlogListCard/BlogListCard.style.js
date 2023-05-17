import { StyleSheet } from 'react-native'
import colors from '../../styles/color';

export default StyleSheet.create({
    container:{
        margin: 10,
        backgroundColor: colors.light_background,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.dark_background,
    },
    banner:{
        height: 200,
        marginBottom: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: colors.light_orange,
        resizeMode: 'stretch',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: colors.dark_background,
        padding: 2,
        color: colors.orange,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: colors.white,
        
    },
    summary:{
        paddingTop: 3,
        fontSize: 12.5,
        textAlign: 'justify',
    },
    duration:{
        alignSelf: 'flex-end',
        fontSize: 11,
        fontStyle: 'italic',
        color: colors.dark_background,
        backgroundColor: colors.light_orange,
        padding: 2,
        borderRadius: 5,
    },
})