import { StyleSheet } from "react-native";
export default myStyles = StyleSheet.create({
    dFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contaianer: {
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    formSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputSearch: {
        flex: 1,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 20,
        paddingTop: 4,
        paddingBottom: 4
    },
    iconSearch: {
        marginLeft: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 5,
        paddingRight: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderRadius: 5
    },
    content: {
        flex: 1,
        paddingLeft: 20,
    },
    listItems: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    imgFlag: {
        width: 80,
        height: 50
    },
    resultSearch: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20
    }
})