import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import myStyles from "../css/Style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const CountryList = () => {
    const [country, setCountry] = useState([]);
    const [key, setKey] = useState('');

    const api = 'https://restcountries.com/v3.1/all'
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((json) => setCountry(json))
    }, [key == ''])

    function searchCountry() {
        let apiSearch = `https://restcountries.com/v3.1/name/${key}`
        fetch(apiSearch)
            .then((res) => res.json())
            .then((json) => setCountry(json))
    }
    return (
        <ScrollView>
            <Text style={myStyles.title}>Country List</Text>
            <View style={myStyles.formSearch}>
                <TextInput
                    style={myStyles.inputSearch}
                    placeholder="Country name"
                    onChangeText={(newKey) => setKey(newKey)}
                />
                <TouchableOpacity style={myStyles.iconSearch} onPress={searchCountry}>
                    <MaterialIcons
                        name="search"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
            {
                country.status == '404' ? (
                    <Text style={myStyles.resultSearch}>No result ...</Text>
                ) : (
                    <FlatList
                        data={country}
                        renderItem={(item) => {
                            let img = item.item.flags.png
                            let currency = item.item.currencies != undefined ? item.item.currencies : {}
                            return (
                                <View style={myStyles.listItems}>
                                    <Image
                                        style={myStyles.imgFlag}
                                        source={{ uri: img }}
                                    />
                                    <View style={myStyles.content}>
                                        <Text>{item.item.name.common}</Text>
                                        <View style={myStyles.dFlex}>
                                            <Text>
                                                Capital : {item.item.capital}
                                            </Text>
                                            <Text>
                                                Currency: {Object.keys(currency)}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                )
            }
        </ScrollView>
    )
}
export default CountryList;