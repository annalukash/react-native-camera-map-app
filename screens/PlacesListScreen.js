import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import { useSelector } from "react-redux";

const PlacesListScreen = (props) => {
    const places = useSelector((state) => state.places.places);

    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <PlaceItem
                    onSelect={() => { 
                        props.navigation.navigate("placeDetail", {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id,
                        })
                    }}
                    image={null}
                    title={itemData.item.title}
                    address={null}
                />
            )}
        />
    );
};

PlacesListScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "All Places",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                    onPress={() => {
                        navData.navigation.navigate("newPlace");
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
