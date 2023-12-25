import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import PropTypes from "prop-types";

const CitySelector = ({ cities, onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleCityChnage =(city) => {
    
    setSelectedCity(city) ;
    onCityChange(city) 
  }
  return (
    <>
      <View style={styles.container}>
        {cities &&
          cities.map((ele, i) => {
            return (
              <TouchableOpacity style={styles.cityView} onPress={() => handleCityChnage(ele)}>
                <Text>{ele}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </>
  );
};

CitySelector.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    
  },
  cityView: {
    height: 50,
    width: "100%",
    backgroundColor: "#18BDF6",
    borderRadius : 10 ,
    margin : 10 ,
    padding : 10 ,
    textAlign : "center" ,
    
  },
});

export default CitySelector;
